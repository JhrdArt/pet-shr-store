import type { Product } from "~/types";

const BACKEND_URI = import.meta.env.VITE_BACKEND_URI

const BASE_URLS = [
  BACKEND_URI,
];

async function fetchWithFallback(endpoint: string) {
  let lastError: Error | null = null;
  
  for (const baseUrl of BASE_URLS) {
    try {
      const url = `${baseUrl}${endpoint}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.error(`Failed with ${baseUrl}:`, error);
    }
  }
  
  throw new Error(`All base URLs failed: ${lastError?.message}`);
}

export async function fetchProducts(): Promise<Product[]> {
  return fetchWithFallback('/products');
}

export async function fetchProductByID(idp: string): Promise<Product> {
  return fetchWithFallback(`/products/${idp}`);
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  return fetchWithFallback(`/products/category/${category}`);
}