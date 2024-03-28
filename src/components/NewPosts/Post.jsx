import React from "react";

export default function Post() {
  return (
    <div className="w-96">
      <div className=" w-96 rounded-lg h-64 relative">
        <div className=" rounded-xl absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10 "></div>
        <img
          className="w-full h-full rounded-xl object-cover"
          src="https://www.ciclismoafondo.es/uploads/s1/12/52/84/6/5dc6b0680de694c7403493c1-10-ciclistas-a-seguir-en-2020.jpeg"
          alt=""
        />
        <div className="absolute bottom-0 z-10 text-white py-4 px-3 flex items-center gap-2 justify-between w-full">
          <div className="flex gap-2">
            <div className="w-20 py-1 px-6 bg-blue-500 flex items-center justify-center rounded-full leading-normal ">
              <span className="m-0 p-0 ">cosas</span>
            </div>
            <div className="w-20 py-1 px-6 bg-blue-500 flex items-center justify-center rounded-full leading-normal ">
              <span className="m-0 p-0 ">cosas</span>
            </div>
          </div>

          <date>12/12/2003</date>
        </div>
      </div>
      <h3 className=" text-3xl font-bold">
        Como ser mejor persona sin parecerlo
      </h3>
    </div>
  );
}
