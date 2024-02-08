"use client"
import Image from "next/image";
import HomeAnimation from "../Animations/homeanimation";
import { useRef } from "react";
type ShowCaseItemProps = {
  value: number;
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
            <div className=" w-[21rem] h-[14rem] sm:w-[38rem] sm:h-[26rem] md:w-[28rem] md:h-[18rem] lg:w-[44rem] lg:h-[28rem] relative ">
              <Image
                src={`/images/${value}.jpg`}
                alt="image not found"
                fill
                className="relative rounded-3xl "
              />
            </div>
          </div>

          <div ref={high} className="detailes  hidden sm:block  md:col-span-1 py-40 px-2 ">
            <h1 className=" text-5xl font-bold "> Title </h1>
            <p className="text-xl mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              sapiente expedita laborum dolorem voluptatum inventore tenetur
              voluptatem eos consequatur officiis nam, corrupti voluptatibus.
              Architecto earum quasi totam ab vel mollitia!
            </p>
          </div>
        </div>
      </HomeAnimation>
    </main>
  );
};
export default ShowCaseItem;
