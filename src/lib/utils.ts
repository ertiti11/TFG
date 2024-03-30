import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSlug(str) {
  const map = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };

  str = str.replace(/[áéíóúÁÉÍÓÚ]/g, (match) => map[match]);

  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // quita caracteres inválidos
    .replace(/\s+/g, "-") // reemplaza espacios por guiones
    .replace(/-+/g, "-"); // reemplaza múltiples guiones por uno solo
}




export function getThumb(post) {
  return `https://esciclismomalaga.pockethost.io/api/files/${post.collectionId}/${post.id}/${post.thumbnail}`
  
}
