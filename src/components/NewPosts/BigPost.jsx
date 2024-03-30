import React from "react";

function createSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')  // quita caracteres inválidos
    .replace(/\s+/g, '-')         // reemplaza espacios por guiones
    .replace(/-+/g, '-');         // reemplaza múltiples guiones por uno solo
}

export default function BigPost({ title, date, category, thumbnail }) {
  return (
    <a class="w-full relative rounded-3xl" href={`/blog/${createSlug(title)}`}>
      <div class="rounded-xl absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>

      <img class="" src={thumbnail} alt="" />
      <div class="absolute flex z-10 text-white bottom-0 px-8 py-5 w-full">
        <div class="max-w-[773px]">
          <span style={{ color: "rgba(220, 220, 220, 0.81)" }}>{date}</span>
          <h3 class="text-6xl">{title}</h3>
        </div>
        <div class="w-full flex justify-end items-end gap-6">
          <div class="w-20 py-1 px-6 hover:cursor-pointer hover:scale-105 bg-blue-500 flex items-center justify-center rounded-full leading-normal">
            <span class="m-0 p-0">{category}</span>
          </div>
        </div>
      </div>

    </a>
  );
}
