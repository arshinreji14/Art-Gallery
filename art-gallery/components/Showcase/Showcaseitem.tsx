"use client"
import Image from "next/image";
import HomeAnimation from "../Animations/homeanimation";
import { useEffect, useRef, useState } from "react";
interface images{
  id:number,
  name: string,
  tagline: string,
  image_url: string
}
type ShowCaseItemProps = {
  value: images
};


const ShowCaseItem: React.FC<ShowCaseItemProps> = ({ value }) => {
    const container = useRef(null);
const xhigh = useRef(null);
const high = useRef(null);


  return (
    <main>
      <HomeAnimation containerRef={container}
      xhigh={xhigh}
      high={high}>
        <div
          ref={container}
          className=" h-[16rem]  sm:h-[26rem] md:h-[26rem] lg:h-[38rem] grid  md:grid-cols-3 "
        >
          <div ref={xhigh} className="image  sm:col-span-2 flex items-center justify-center shadow-gray shadow-xl ">
            <div className=" w-[21rem] h-[14rem] sm:w-[38rem] sm:h-[26rem] md:w-[28rem] md:h-[18rem] lg:w-[44rem] lg:h-[28rem] relative  bg-white">
              <Image
                src={value.image_url||""}
                alt="image not found"
                fill
                className="relative rounded-3xl "
              />
            </div>
          </div>

          <div ref={high} className="detailes  hidden sm:block  md:col-span-1 py-40 px-2 ">
            <h1 className=" text-5xl font-bold "> {value.name} </h1>
            <p className="text-xl mt-4">
              {value.tagline}
            </p>
          </div>
        </div>
      </HomeAnimation>
    </main>
  );
};
export default ShowCaseItem;
