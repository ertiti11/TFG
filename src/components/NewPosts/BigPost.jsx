

export default function BigPost({ title, date, category, thumbnail }) {
  return (
    <div className="w-full relative rounded-3xl">
      <div className=" rounded-xl absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10 "></div>

      <img
        className="w-full h-ful object-cover rounded-3xl"
        src={thumbnail}
        alt=""
      />
      <div className="absolute flex z-10 text-white bottom-0 px-8 py-5 w-full">
        <div className=" max-w-[773px]">
          <date style={{ color: "rgba(220, 220, 220, 0.81)" }}>{date}</date>
          <h3 className=" text-6xl">
            {title}
          </h3>
        </div>
        <div className="w-full flex justify-end items-end gap-6">
          <div className="w-20 py-1 px-6 hover:cursor-pointer hover:scale-105 bg-blue-500 flex items-center justify-center rounded-full leading-normal ">
            <span className="m-0 p-0 ">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
