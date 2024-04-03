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

export function formatDate(str) {
  const date = new Date(str);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript comienzan desde 0
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}


export function getThumb(post) {
  return `https://esciclismomalaga.pockethost.io/api/files/${post.collectionId}/${post.id}/${post.thumbnail}`
  
}
