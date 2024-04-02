
import { createSlug } from "@/lib/utils";

export default function Post({ title, date, category, thumbnail }) {
  return (
    <a className="w-96" href={`/blog/${createSlug(title)}`}>
      <div className=" w-96 rounded-lg h-64 relative">
        <div className=" rounded-xl absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10 "></div>
        <img
          className="w-full h-full rounded-xl object-cover"
          src={thumbnail}
          alt=""
        />
        <div className="absolute bottom-0 z-10 text-white py-4 px-3 flex items-center gap-2 justify-between w-full">
          <div className="flex gap-2">
            <div className="w-20 py-1 px-6 bg-blue-500 flex hover:cursor-pointer hover:scale-105 items-center  hover:transition-all justify-center rounded-full leading-normal ">
              <span className="m-0 p-0 ">{category}</span>
            </div>
          </div>

          <span>{date}</span>
        </div>
      </div>
      <h3 className="mb-8  text-3xl font-bold">
        {title}
      </h3>
    </a>
  );
}
