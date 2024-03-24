import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import CarouselPost from "./CarouselPost";
import { useEffect, useState } from "react";

import PocketBase from "pocketbase";

export default function FeaturedCarousel() {
  const [resultList, setResultList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const pb = new PocketBase("https://esciclismomalaga.pockethost.io");
      const list = await pb.collection("posts").getList(1, 50);
      setResultList(list);
    };

    fetchData();
  }, []);

  if (!resultList) {
    return <div>Loading...</div>; // Render some loading state
  }

  console.log(resultList);
  return (
    <Carousel className="basis-1/3">
      <CarouselContent className="w-52">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <CarouselPost className=" text-left w-full  text-white" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
