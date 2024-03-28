import React from "react";

export default function Post() {
  return (
    <div className="w-full h-full relative">
      <img
        className="w-full h-full"
        src="https://www.ciclismoafondo.es/uploads/s1/12/52/84/6/5dc6b0680de694c7403493c1-10-ciclistas-a-seguir-en-2020.jpeg"
        alt=""
      />
      <div style={{bottom: "0"}} className="absolute bottom-0 z-10 text-white">
        <div className="w-20 py-2 px-7 bg-blue-500">
            <span>cosas</span>
        </div>
      </div>
    </div>
  );
}
