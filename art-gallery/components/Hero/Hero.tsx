import Image from "next/image";
const heroimg = "/images/hero.jpg";
export default function Hero() {
  return (
    <main className="">
      <div className=" flex-shrink w-full md:h-screen h-52 relative shadow-inner sh">
        <Image
          src={heroimg || ""}
          alt="hero image"
          fill
          objectFit="cover"
          className=""

        />

        <div className="relative w-full h-52 md:h-screen grid grid-cols-3">
          <div className="col-span-2 ">
            <div className="absolute top-5 left-10 md:top-40 md:left-20">
              <h1 className="text-2xl md:text-6xl font-extrabold">
                Art Gallery{" "}
              </h1>
              <p className=" text-lg md:text-3xl font-bold mt-2">Description</p>
            </div>
          </div>
          <div className="col-span-1 ">
            <button className="rounded-full text-xl md:text-4xl font-extrabold border-black hover:bg-blue-500  border px-5  md:px-10 md:py-5 py-2 absolute bottom-4  md:bottom-32 items-center md:right-20 right-4 flex-shrink ">
              Know More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
