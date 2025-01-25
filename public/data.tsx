import {
  BriefcaseBusiness,
  Cat,
  ChevronLeft,
  Dog,
  MapPin,
  Menu,
  Moon,
  Phone,
  Rabbit,
  Search,
  ShoppingCart,
  Store,
  Sun,
  Tag,
  User,
  X,
} from "lucide-react";

import delivery from "public/icons/delivery-svg.svg";
import store from "public/icons/store-svg.svg";
import truck from "public/icons/truck-svg.svg";
import announced from "public/icons/attention-svg.svg";

import brand from "public/circle-brands/CANBOv2.jpg";
import brand1 from "public/circle-brands/DOGXTREME.jpg";
import brand2 from "public/circle-brands/HILLS.jpg";
import brand3 from "public/circle-brands/bravery.jpg";
import brand4 from "public/circle-brands/WELLNESS.jpg";
import brand5 from "public/circle-brands/logo-nath.jpg";
import brand6 from "public/circle-brands/pro-plan.jpg";
import brand7 from "public/circle-brands/thumbnail_logo-true-origins-web.jpg";

import logo from "public/icons/logo.png";
import logoBlack from "public/icons/logo-black.png";

//firstOffers
import churuOffer from "public/images/navidad-churuu.jpg";
import correasOffer from "public/images/navidad-correas.jpg";
import snacksOffer from "public/images/navidad-snacks.jpg";

import charlasOnlineImg from "public/images/banner-charla-desktop.jpg";
import charlasOnlineImgMobile from "public/images/banner-charla-mobile.jpg";

import peluqueria from "public/images/peluqueria-home.jpg";
import navidadHome from "public/images/navidad-home.jpg";

import navidadAntipulgas from "public/images/navidad-antipulgass.jpg";
import navidadPañales from "public/images/navidad-pañales.jpg";
import navidadAlimentoGato from "public/images/navidad-alimento-gato.jpg";
import nadidadAlimentoPerro from "public/images/navidad-alimento-perro.jpg";

import homeLiquidacion from "public/images/home-liquidacion-separador-desktop.jpg";
import homeLiquidacionMobile from "public/images/home-liquidacion-separador-mobile.jpg";

import navidadKitten from "public/images/navidad-kitten.jpg";
import navidadPuppy from "public/images/navidad-puppy.jpg";

import mapIcon from "public/icons/map-pin.svg";
import peluqeria from "public/icons/peluqueria.svg";

import imageNewsletter from "public/images/ML-newsletter.jpg";
import libroReclamaciones from "public/images/libro-rec.png";

import WhatsappGifIcon from "public/icons/whatsapp.gif";
import bannerDog from "public/images/BANNER-CATEGORIA-PERRO.jpg";
import bannerCat from "public/images/BANNER-CATEGORIA-GATO.jpg";

import categoryOne from "public/images/juguetes.jpg";
import categoryTwo from "public/images/farmacia.jpg";
import categoryThree from "public/images/alimento-snack-perro.jpg";
import categoryFour from "public/images/perro-correas.jpg";
import categoryFive from "public/images/cama-perro.jpg";
import categorySix from "public/images/perro-accesorios.jpg";

export const headerData = {
  header: {
    logo: {
      src: logo,
      name: "Shr Pet",
      link: "/",
    },
    inputLabels: {
      icon: <Search />,
      label: "Busca tus productos",
      placeholder: "Busca tus marcas y productos favoritos",
    },
    darkMode: {
      dark: {
        name: "dark",
        icon: <Moon />,
      },
      light: {
        name: "light",
        icon: <Sun />,
      },
    },
    menuMobile: {
      open: {
        name: "menu",
        icon: <Menu size={32} stroke="#fff" />,
        ariaLabel: "menu button",
      },
      close: {
        name: "close",
        icon: <X size={32} stroke="#fff" />,
        ariaLabel: "close button",
      },
    },
    actions: [
      {
        name: "Iniciar sesión",
        icon: <User stroke="#fff" />,
        ariaLabel: "login button",
      },
      {
        name: "Ubícanos",
        icon: <Store stroke="#fff" />,
        ariaLabel: "location button",
      },
      {
        name: "Carrito",
        icon: <ShoppingCart stroke="#fff" />,
        ariaLabel: "Car button",
      },
    ],
  },
  nav: [
    {
      name: "Perros",
      link: "/perro",
      icon: <Dog stroke="#000" />,
      submenu: true,
      sublinks: [
        {
          Head: "Accesorios",
          sublink: [
            { name: "Camas y colchonetas", link: "/perro" },
            { name: "Correas y arnés", link: "/perro" },
            { name: "Juguetes", link: "/perro" },
            { name: "Platos y bebederos", link: "/perro" },
            { name: "Ropas", link: "/perro" },
          ],
        },
        {
          Head: "Comidas",
          sublink: [
            { name: "Alimentos medicados", link: "/perro" },
            { name: "Alimento húmedo", link: "/perro" },
            { name: "Alimento seco", link: "/perro" },
            { name: "Snacks", link: "/perro" },
          ],
        },
        {
          Head: "Cuidado e Higiene",
          sublink: [
            { name: "Antipulgas", link: "/perro" },
            { name: "Cuidado oral", link: "/perro" },
            { name: "Shampoo", link: "/perro" },
            { name: "Vitaminas y suplementos", link: "/perro" },
            { name: "Farmacos", link: "/perro" },
          ],
        },
      ],
    },
    {
      name: "Gatos",
      link: "/gato",
      icon: <Cat stroke="#000" />,
      submenu: true,
      sublinks: [
        {
          Head: "Comida",
          sublink: [
            { name: "Alimentos", link: "/gato" },
            { name: "Alimento húmedo", link: "/gato" },
            { name: "Alimento seco", link: "/gato" },
            { name: "Snacks", link: "/gato" },
          ],
        },
        {
          Head: "Cuidado e Higiene",
          sublink: [
            { name: "Cuidados e higiene", link: "/gato" },
            { name: "Arena", link: "/gato" },
            { name: "Anti pulgas", link: "/gato" },
            { name: "Alimento seco", link: "/gato" },
            { name: "Cuidado externo", link: "/gato" },
            { name: "Cuidado oral", link: "/gato" },
            { name: "Suplementos y vitaminas", link: "/gato" },
          ],
        },
        {
          Head: "Accesorios",
          sublink: [
            { name: "Camas y cuevas", link: "/gato" },
            { name: "Correas", link: "/gato" },
            { name: "Rascadores", link: "/gato" },
            { name: "Kennels y transportador", link: "/gato" },
            { name: "Platos y bebederos", link: "/gato" },
          ],
        },
      ],
    },
    {
      name: "Otros",
      link: "/otros",
      icon: <Rabbit stroke="#000" />,
      submenu: true,
      sublinks: [
        {
          Head: "Comida",
          sublink: [{ name: "Alimentos", link: "/otros" }],
        },
        {
          Head: "Cuidado e Higiene",
          sublink: [{ name: "Cuidados e higiene", link: "/otros" }],
        },
        {
          Head: "Accesorios",
          sublink: [
            { name: "Transportadores", link: "/otros" },
            { name: "Platos y bebederos", link: "/otros" },
          ],
        },
      ],
    },
    {
      name: "Servicios",
      link: "/servicios",
      submenu: true,
      icon: <BriefcaseBusiness stroke="#000" />,
      sublinks: [
        {
          Head: "Servicios",
          sublink: [
            { name: "Veterinaria", link: "/" },
            { name: "Baños y cortes", link: "/" },
            { name: "Catering", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Ofertas",
      link: "/ofertas",
      submenu: false,
      icon: <Tag stroke="#000" />,
    },
  ],
};

export const listBrandsData = [
  {
    src: brand,
    name: "canbo",
    id: 1,
  },
  {
    src: brand1,
    name: "Dog extreme",
    id: 2,
  },
  {
    src: brand2,
    name: "hills",
    id: 3,
  },
  {
    src: brand3,
    name: "bravery",
    id: 4,
  },
  {
    src: brand4,
    name: "wellness",
    id: 5,
  },
  {
    src: brand5,
    name: "nath",
    id: 6,
  },
  {
    src: brand6,
    name: "pro plan",
    id: 7,
  },
  {
    src: brand7,
    name: "true origins",
    id: 8,
  },
];

export const listOffersData = {
  firstOffers: {
    title: "¡Lleva más, paga menos con estas ofertas!",
    offers: [
      {
        img: snacksOffer,
        id: 1,
        description: "Ofertas únicas en snacks",
        href: "/",
      },
      {
        img: correasOffer,
        id: 1,
        description: "¡Descuento y más ofertas en collares!",
        href: "/",
      },
      {
        img: churuOffer,
        id: 1,
        description: "Ofertas en alimento húmedo Churu",
        href: "/",
      },
    ],
  },
  secondOffer: [
    {
      imgDesktop: charlasOnlineImg,
      imgMobile: charlasOnlineImgMobile,
      name: "charlas online",
      href: "/",
    },
  ],
  thirdOffer: [
    {
      img: peluqueria,
      name: "navidad peluquería",
      href: "/",
    },
    {
      img: navidadHome,
      name: "navidad home",
      href: "/",
    },
  ],
  fortyOffer: [
    {
      img: navidadAntipulgas,
      title: "¡Todo en antipulgas!",
      description: "Las mejores marcas para tu cuidar a tu engreído",
      id: 1,
      href: "/",
    },
    {
      img: navidadPañales,
      title: "¡Ahorra más en pañales!",
      description: "Las mejores ofertas en pañales",
      id: 2,
      href: "/",
    },
    {
      img: navidadAlimentoGato,
      title: "¡Lo que necesita el felino de la casa!",
      description: "Para mantener consentido a tu amigo felino",
      id: 3,
      href: "/",
    },
    {
      img: nadidadAlimentoPerro,
      title: "¡Las mejores marcas de alimento!",
      description: "Lo que hace feliz a tu mascota",
      id: 4,
      href: "/",
    },
  ],
  settlement: [
    {
      img: {
        mobile: homeLiquidacionMobile,
        desktop: homeLiquidacion,
      },
      name: "liqudación imagen",
      href: "/",
    },
  ],
  fiveOffer: [
    {
      img: navidadKitten,
      title: "De todo para hacer feliz a tu gatito",
      description:
        "Rascadores, camas, arenas..... todo el mundo gatuno a un click!",
      id: 1,
      href: "/",
    },
    {
      img: navidadPuppy,
      title: "Para tu fiel amigo",
      description: "Sabanillas, juguetes y accesorios ideales para tú engreído",
      id: 2,
      href: "/",
    },
  ],
};

export const confidences = [
  {
    icon: mapIcon,
    title: "Localiza nuestra tienda",
    paragraph: "¡Nuestra tienda es petfriendly!",
    href: "/",
  },
  {
    icon: peluqeria,
    title: "Baños y peluquería",
    paragraph:
      "Pon guapo a tu perrito con nuestro servicio de baño y peluquería",
    href: "/",
  },
  {
    icon: logo,
    title: "Mira nuestras actividades",
    paragraph: "¡Entérate sobre nuestras actividades benéficas!",
    href: "/",
  },
];

export const aboutUs = {
  About: {
    title: "SHRpet - tienda para mascotas física y online",
    description:
      "Somos SHRpet, la cadena de tiendas para mascotas más grande del Perú, con más de 40 establecimientos en Lima y provincias, servicio de delivery rápido y una selección de más de 3000 productos diseñados para el bienestar de tu mascota. Nuestro propósito principal es ofrecer todo lo necesario para que tu mascota sea feliz. Desde las marcas más reconocidas en alimentos que garantizan su salud y longevidad, hasta los juguetes más duraderos para disfrutar de momentos inolvidables. Detrás de SHRpet, contamos con un equipo de más de 500 especialistas y amantes de los animales, dedicados a seleccionar cuidadosamente y recomendar los mejores productos para tu mascota.",
  },
  Delivery: {
    title: "Delivery gratis y rápido",
    description:
      "Realizamos envíos a Lima, Arequipa, Chiclayo, Trujillo y Piura con diversas opciones de delivery: Delivery estándar: gratis para compras superiores a S/90. Delivery rápido: recibe tu pedido en menos de 2 horas por solo S/10. Retiro en tienda: realiza tu compra online y recoge tu pedido en cualquiera de nuestras tiendas sin costo adicional. Consulta más detalles sobre las condiciones del delivery aquí.",
  },
  Food: {
    title: "Comida para perros y gatos",
    description:
      "Queremos brindarte la mejor atención y cuidado para tu mascota, por ello trabajamos con las marcas más destacadas de alimentos para perros y gatos. Encuentra sus marcas preferidas como Canbo, Hills, Pro Plan, Dogxtreme, Royal Canin, entre muchas otras. Disponemos además de una amplia variedad diseñada para cubrir necesidades específicas, como alimentos especializados para condiciones médicas (hepáticas, sobrepeso, cuidado renal, digestivo, entre otras) y según la etapa de vida: cachorro, adulto o senior.",
  },
  Hygiene: {
    title: "Higiene y cuidado",
    description:
      "La higiene de tu mascota es fundamental. En SHRpet encontrarás una gran selección de productos para su cuidado y limpieza. Disponemos de diversas marcas de arena para gatos, como TK Pet, KlinKat, Cat's Best, entre otras. También contamos con pañales de adiestramiento para perros que facilitan su entrenamiento. Si buscas cuidar su pelaje, ofrecemos productos específicos para el baño, como shampoos para diferentes tipos de pelo, además de herramientas para el cepillado, como el reconocido Furminator.",
  },
  Pharmaceuticals: {
    title: "Fármacos",
    description:
      "Descubre medicamentos esenciales para perros y gatos de las mejores marcas y a precios competitivos. Desde antipulgas que protegen a tu mascota de pulgas y garrapatas, hasta vitaminas que fortalecen su sistema inmunológico y mejoran su piel y pelaje.",
  },
  FunAndMore: {
    title: "Diversión y más",
    description:
      "Contamos con la mayor variedad de juguetes y accesorios de las mejores marcas. Encuentra el famoso juguete Kong, ideal para perros y gatos, rascadores para gatos o peluches que se convertirán en los compañeros favoritos de tu mascota.",
  },
};

export const newsletterData = {
  title: "¿Quieres recibir ofertas en tu email?",
  description:
    "Únete a nuestra newsletter y recibirás toda la información sobre nuestros productos, promociones y campañas. Sé el primero en enterarte de todo…",
  image: {
    src: imageNewsletter,
    alt: "Imagen de gatito para newsletter",
  },
  button: {
    label: "¡Unete!",
  },
  input: {
    label: "Email",
  },
};

export const footerData = {
  sections: [
    {
      title: "Localiza tu tienda",
      url: "/localiza-tu-tienda",
      description:
        "Somos una familia de más de 50 tiendas en Lima y provincias, así que siempre tendrás una tienda Shr Pet allí donde estés. ¡Encuentra la más cercana!",
      icon: <MapPin stroke="#000" />,
    },
    {
      title: "Mi cuenta",
      links: [
        { label: "Entrar en mi cuenta", url: "/mi-cuenta" },
        { label: "Mis pedidos", url: "/mis-pedidos" },
        { label: "Guía de Compra", url: "/guia-de-compra" },
        { label: "Información de Envío", url: "/informacion-envio" },
        { label: "Preguntas Frecuentes", url: "/preguntas-frecuentes" },
        {
          label: "Términos y Condiciones de uso",
          url: "/terminos-condiciones",
        },
        { label: "Super Puntos", url: "/super-puntos" },
        { label: "Legales Campañas 2024", url: "/legales-campanas-2024" },
      ],
    },
    {
      title: "Guia de compra",
      links: [
        {
          label: "Información de envíos",
          url: "/informacion-envios",
        },
        {
          label: "Preguntas Frecuentes",
          url: "/preguntas-frecuentes",
        },
        {
          label: "Términos y Condiciones de uso",
          url: "/terminos-condiciones",
        },
        {
          label: "Legales Campañas 2024",
          url: "/legales",
        },
        {
          img: {
            src: libroReclamaciones,
            alt: "imagen libro de reclamaciones",
            url: "/libro-reclamaciones",
          },
        },
      ],
    },
    {
      title: "Contacto",
      contactInfo: {
        email: {
          label: "pedidos@shrpet.pe",
          url: "mailto:pedidos@shrpet.pe",
        },
        phone: { label: "01 63 65 64", url: "tel:016416464" },
        whatsapp: {
          label: "+51 34243243223",
          url: "https://wa.me/51993703332233",
        },
        serviceHours: {
          weekdays: "Lunes a sabados. 8am - 9pm",
          sunday: "Domingo 8am - 8pm",
        },
      },
      reportChannel: {
        label: "Canal de Denuncias",
        url: "/canal-de-denuncias",
      },
    },
    {
      title: "ShrPet",
      links: [
        { label: "Acerca de SHRpet", url: "/acerca-de" },
        { label: "Trabaja con nosotros", url: "/trabaja-con-nosotros" },
        { label: "Política de Privacidad", url: "/politica-privacidad" },
        { label: "Eventos y actividades", url: "/eventos-actividades" },
        { label: "Jornadas de adopción", url: "/jornadas-adopcion" },
        { label: "Charlas online", url: "/charlas-online" },
      ],
    },
  ],
};

export const informationData = [
  {
    title: "Despacho gratis",
    subtitle: "Por compras mayores a S/90",
    img: truck,
  },
  {
    title: "Delivery gratis",
    subtitle: "Tu pedido en menos de 2 horas",
    img: delivery,
  },
  {
    title: "Retiros en tienda",
    subtitle: "Ven a buscar",
    img: store,
  },
  {
    title: "Asesoria especializada",
    subtitle: "Contáctanos",
    img: announced,
  },
];

export const footerBottom = {
  logo: {
    src: logoBlack,
    alt: "Logo de Shrpet",
    name: "Shrpet",
  },
  rights: "© Shrpet - Todos los derechos reservados",
  socials: [
    {
      name: "X",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
      url: "https://x.com/shrpet",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
        </svg>
      ),
      url: "https://shrpet.com/instagram",
    },
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
        </svg>
      ),
      url: "https://shrpet.com/facebook",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
      url: "https://shrpet.com/linkedin",
    },
    {
      name: "YouTube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"></path>
        </svg>
      ),
      url: "https://shrpet.com/youtube",
    },
  ],
};

export const WhatsappButtonData = {
  image: {
    src: WhatsappGifIcon,
    alt: "Whatsapp gif",
  },
  href: "/",
  label: "¡Escríbenos vía whatsapp!",
  ariaLabel: "whatsapp button",
};

export const CartShopData = {
  title: "Mi carrito",
  links: {
    toBack: {
      title: "Seguir comprando",
      icon: <ChevronLeft strokeWidth={1} />,
    },
    call: {
      desktop: "¿Necesitas ayuda? Llámanos:",
      mobile: <Phone size={18} />,
      number: "01-432-4322",
    },
  },
  alert:
    "Envío regular gratis | para pedidos mayores a S./90 en Lima, Piura, Chiclayo y Trujilllo.",
  message:
    "Recuerda iniciar sesión para aplicar cupones. Los SHR-puntos, por el momento, no son válidos para canjear en compras web",
  cupon: {
    title: "¿Tienes un cupón?",
    placeholder: "Código del cupón",
    labelButton: "Aplicar",
  },
  buttonToOrder: {
    label: "Hacer pedido",
    href: "/login",
    ariaLabel: "Button to order",
  },
  recommendedZone: {
    title: "¡Productos que te recomendamos para tu mascota!",
    disclamer:
      "En cumplimiento de la Ley N° 30884, que regula el plástico de un solo uso, nos encontramos en la obligación de cobrar por la entrega de bolsas biodegradables. En ese sentido, el costo de cada bolsa biodegradable asciende a S/.0.20 céntimos. En caso no solicite agregar bolsa biodegradable a su pedido, los productos serán entregados sin bolsa",
  },
};

export const PurchaseDetailsData = {
  login: {
    header: {
      logo: logo,
      name: "SHR Pet",
      title: "Terminar compra",
      icon: <ShoppingCart />,
    },
    action: {
      links: {
        toBack: {
          title: "Volver al carrito",
          icon: <ChevronLeft strokeWidth={1} />,
          href: "/carrito",
        },
        call: {
          desktop: "¿Necesitas ayuda? Llámanos:",
          mobile: <Phone size={18} />,
          number: "01-432-4322",
        },
      },
    },
    title: "Termina tu compra",
    registerFormInfo: {
      message:
        "Puedes comprar como invitado si no quieres crear una cuenta. Si entras como invitado, no disfrutarás de las múltiples ventajas de formar parte del mundo Shr Pet. Pero no te preocupes, puedes registrarte más adelante.",
      button: {
        label: "Quiero registrarme",
      },
    },
    loginFormInfo: {
      message: "Inicia sesión o continúa como invitado",
      inputs: {
        email: {
          label: "Email",
          placeholder: "Email",
        },
        password: {
          label: "Contraseña",
          placeholder: "contraseña",
        },
        remenber: {
          label: "Recuérdame",
        },
      },
      actions: {
        forgotPassword: {
          label: "Olvidé mi contraseña",
          href: "/",
        },
        loginButton: {
          label: "Ingresar",
          href: "/checkout-details",
        },
        guestButton: {
          label: "Coninuar como invitado",
          href: "/checkout-details",
        },
      },
    },
  },
};

export const CheckoutDetailsData = {
  formulary: {
    title: "Datos de Envío",
    typeCollectProduct: {
      selectOptionTitle: "Elige una opción para recibir tu compra",
      options: [
        {
          label: "Retiro en tienda",
          desc: "Ver dirección",
          name: "tienda",
        },
        {
          label: "Despacho a domicilio",
          desc: "Envío programado",
          name: "delivery",
        },
      ],
    },
    deliveryOption: {
      desc: "Rellena el formulario para el envío",
      clientDataForm: [
        {
          key: "name",
          label: "Nombre",
          placeholder: "Nombre",
          messageError: "Introduce tu nombre",
        },
        {
          key: "lastName",
          label: "Apellido",
          placeholder: "Apellido",
          messageError: "Introduce tu apellido",
        },
        {
          key: "phoneNumber",
          label: "Celular",
          placeholder: "Celular",
          messageError: "Introduce tu número de contacto",
        },
        {
          key: "address",
          label: "Dirección",
          placeholder: "Dirección domicilio",
          messageError: "La dirección es importante para el envío",
        },
        {
          key: "pepartment",
          label: "Departamento",
          placeholder: "Departamento",
          messageError: "Introduzca el departamento",
        },
        {
          key: "province",
          label: "Provincia",
          placeholder: "Provincia",
          messageError: "Introduzca la provincia",
        },
        {
          key: "district",
          label: "Distrito",
          placeholder: "Distrito",
          messageError: "Introduzca el distrito",
        },
      ],
    },
    storeOption: {
      desc: "Rellena el formulario para generar tu compra",
      clientDataForm: [
        {
          key: "name",
          label: "Nombre",
          placeholder: "Nombre",
        },
        {
          key: "lastName",
          label: "Apellido",
          placeholder: "Apellido",
        },
        {
          key: "phoneNumber",
          label: "Celular",
          placeholder: "Celular",
        },
      ],
    },
    sendButtonData: {
      label: "Siguiente: Pagar",
    },
  },
  summaryOrder: {
    title: "Resumen del pedido",
    sub: "Subtotal",
    delivery: "Costo de envío",
    total: "Total",
    cantProducts: "Productos",
    message: "* Los impuestos se han incluidos dentro del precio final",
  },
};

export const ModalData = {
  detailsButton: {
    label: "Ver detalles",
    ariaLabel: "circle information",
  },
  triggerButton: {
    icon: <X />,
    ariaLabel: "Close button",
  },
  selectOption: {
    message: "Selecciona una opción para ver disponibilidad",
    button: {
      label: "Añadir al carro",
      ariaLabel: "Button add cart",
    },
  },
};

export const SectionDogData = {
  banner: {
    src: bannerDog,
    alt: "Banne perros",
  },
  listCategories: [
    {
      to: "/perro/alimento-snacks-perro",
      label: "Alimentos y snacks",
      img: {
        src: categoryThree,
        alt: "img alimento y snacks",
      },
    },
    {
      to: "/perro/camas-perro",
      label: "Camas",
      img: {
        src: categoryFive,
        alt: "img alimento y snacks",
      },
    },
    {
      to: "/perro/juguetes-perro",
      label: "Juguetes",
      img: {
        src: categoryOne,
        alt: "img juguetes",
      },
    },
    {
      to: "/perro/farmacia-medicamentos",
      label: "Farmacia",
      img: {
        src: categoryTwo,
        alt: "to alimento y snacks",
      },
    },
    {
      to: "/perro/correas-perro",
      label: "Collares",
      img: {
        src: categoryFour,
        alt: "imagen correa perro",
      },
    },
    {
      to: "/perro/accesorios-otros",
      label: "Accesorios y otros",
      img: {
        src: categorySix,
        alt: "img accesorios y otros",
      },
    },
  ],
  productsList: {
    title: "¡No te lo pierdas!",
  },
  longDescription: {
    introduction:
      "¿Estás buscando una tienda de animales online donde comprar todo lo que necesita tu perro al mejor precio y sin hacer colas? No lo dudes, SHR PET es tu sitio. Disponemos de más de 1.000 productos para perro entre los que puedes elegir el que mejor se adapta a las necesidades de tu amigo: alimento seco, accesorios, artículos de salud e higiene...",
    food: {
      title: "La mejor variedad de comida para tu perro",
      description: {
        paragraph1:
          "En nuestra sección de comida para perro encontrarás piensos de calidad de grandes marcas como Hill’s, Royal Canin, Dogxtreme, Acana, entre muchas otras. Contamos con diferentes fórmulas en función de la raza, la edad, el tamaño y la actividad física de tu can. Entre ellos puedes encontrar alimentos naturales.",
        paragraph2:
          "También dietas veterinarias para perros, en función de la recomendación de tu veterinario, y un amplio surtido de Alimento para cachorros.",
        paragraph3:
          "Disponemos de comida húmeda para perro en distintos formatos: latas, tarrinas y pouches. Esta es un complemento perfecto a la alimentación de tu mascota que favorece la hidratación. ",
        paragraph4:
          "Los snacks y premios para perros le encantarán y no solo te servirán para educarlo, si no que con ellos jugará y se divertirá al máximo durante horas. Hay distintos tipos. Por un lado se encuentran los snacks dentales para prevenir el sarro y favorecer la salud bucal. Por otro, los snacks funcionales que pueden ayudar a controlar el peso, proteger las articulaciones o evitar reacciones alérgicas.",
        paragraph5:
          "Estamos seguros de que entre toda la comida para perro y todos los productos que tenemos encontrarás lo que buscas.",
      },
    },
    care: {
      title: "Salud e higiene para tu perro",
      description: {
        paragraph1:
          "Asimismo, si buscas artículos para cuidar y mantener sano y limpio a tu compañero, puedes acudir a la sección de salud e higiene canina. En ella encontrarás una amplia variedad de cepillos y champús para perros. Los antiparasitarios son fundamentales para afrontar las complicadas primaveras. En esta categoría también tienes complementos vitamínicos o tratamientos naturales para perros y muchos más productos. ",
      },
    },
    accessories: {
      title: "Los mejores accesorios para tu perro",
      description: {
        paragraph1:
          "Por supuesto, hay accesorios para perro como juguetes para una diversión asegurada o transportines perfectos para los viajes. Para los largos paseos disponemos de collares, correas y arneses. Pero también casetas, bebederos y comederos. No te pierdas la sección de ropa para perros, hay muchos abrigos diferentes para que el invierno sea más llevadero. Las camas para perros garantizan el buen descanso de nuestro amigo.",
      },
    },
  },
};
export const SectionCatData = {
  banner: {
    src: bannerCat,
    alt: "Banner cat",
  },
  listCategories: [
    {
      to: "/gato/alimento-snacks-gato",
      label: "Alimentos y snacks",
      img: {
        src: categoryThree,
        alt: "img alimento y snacks",
      },
    },
    {
      to: "/gato/camas-gato",
      label: "Camas",
      img: {
        src: categoryFive,
        alt: "img alimento y snacks",
      },
    },
    {
      to: "/gato/juguetes-gato",
      label: "Juguetes",
      img: {
        src: categoryOne,
        alt: "img juguetes",
      },
    },
    {
      to: "/gato/farmacia-medicamentos",
      label: "Farmacia",
      img: {
        src: categoryTwo,
        alt: "to alimento y snacks",
      },
    },
    {
      to: "/gato/correas-gato",
      label: "Collares",
      img: {
        src: categoryFour,
        alt: "imagen correa gato",
      },
    },
    {
      to: "/gato/accesorios-otros",
      label: "Accesorios y otros",
      img: {
        src: categorySix,
        alt: "img accesorios y otros",
      },
    },
  ],
  productsList: {
    title: "¡No te lo pierdas!",
  },
  longDescription: {
    introduction:
      "¿Estás buscando una tienda de animales online donde comprar todo lo que necesita tu perro al mejor precio y sin hacer colas? No lo dudes, SHR pet es tu sitio. Disponemos de más de 1.000 productos para perro entre los que puedes elegir el que mejor se adapta a las necesidades de tu amigo: alimento seco, accesorios, artículos de salud e higiene...",
    food: {
      title: "La mejor variedad de comida para tu gato",
      description: {
        paragraph1:
          "En nuestra sección de comida para perro encontrarás piensos de calidad de grandes marcas como Hill’s, Royal Canin, Dogxtreme, Acana, entre muchas otras. Contamos con diferentes fórmulas en función de la raza, la edad, el tamaño y la actividad física de tu can. Entre ellos puedes encontrar alimentos naturales.",
        paragraph2:
          "También dietas veterinarias para gatos, en función de la recomendación de tu veterinario, y un amplio surtido de Alimento para cachorros.",
        paragraph3:
          "Disponemos de comida húmeda para perro en distintos formatos: latas, tarrinas y pouches. Esta es un complemento perfecto a la alimentación de tu mascota que favorece la hidratación. ",
        paragraph4:
          "Los snacks y premios para gatos le encantarán y no solo te servirán para educarlo, si no que con ellos jugará y se divertirá al máximo durante horas. Hay distintos tipos. Por un lado se encuentran los snacks dentales para prevenir el sarro y favorecer la salud bucal. Por otro, los snacks funcionales que pueden ayudar a controlar el peso, proteger las articulaciones o evitar reacciones alérgicas.",
        paragraph5:
          "Estamos seguros de que entre toda la comida para perro y todos los productos que tenemos encontrarás lo que buscas.",
      },
    },
    care: {
      title: "Salud e higiene para tu gato",
      description: {
        paragraph1:
          "Asimismo, si buscas artículos para cuidar y mantener sano y limpio a tu compañero, puedes acudir a la sección de salud e higiene canina. En ella encontrarás una amplia variedad de cepillos y champús para gatos. Los antiparasitarios son fundamentales para afrontar las complicadas primaveras. En esta categoría también tienes complementos vitamínicos o tratamientos naturales para gatos y muchos más productos. ",
      },
    },
    accessories: {
      title: "Los mejores accesorios para tu gato",
      description: {
        paragraph1:
          "Por supuesto, hay accesorios para perro como juguetes para una diversión asegurada o transportines perfectos para los viajes. Para los largos paseos disponemos de collares, correas y arneses. Pero también casetas, bebederos y comederos. No te pierdas la sección de ropa para gatos, hay muchos abrigos diferentes para que el invierno sea más llevadero. Las camas para gatos garantizan el buen descanso de nuestro amigo.",
      },
    },
  },
};

import gifPromo from "public/images/mxm-gif.gif";

export const productUnitData = {
  gif: {
    url: gifPromo,
    alt: "gif promo",
  },
};
