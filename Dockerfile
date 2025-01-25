# Etapa 1: Instalar todas las dependencias (incluyendo devDependencies)
FROM node:20-alpine AS development-dependencies-env
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install

# Etapa 2: Instalar solo dependencias de producción
FROM node:20-alpine AS production-dependencies-env
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --prod

# Etapa 3: Construir la aplicación
FROM node:20-alpine AS build-env
WORKDIR /app
COPY . .
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
RUN npm install -g pnpm && pnpm run build

# Etapa final: Imagen de producción
FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build

# Instalar pnpm globalmente y ejecutar el comando de inicio
RUN npm install -g pnpm
CMD ["pnpm", "run", "start"]