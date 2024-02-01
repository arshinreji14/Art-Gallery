import Image from "next/image";
const heroimg = "/images/hero.jpg";
export default function Hero() {
  return (
    <main className="">
      <div className="w-full h-screen  relative">
        <Image
          src={heroimg || ""}
          alt="hero image"
          fill
          objectFit="cover"
          className=""
          sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="relative w-full h-screen grid grid-cols-3">
          <div className="col-span-2  ">
            <div className="absolute top-40 left-20">
              <h1 className="text-5xl md:text-6xl font-extrabold">
                Art Gallery{" "}
              </h1>
              <p className="text-3xl font-bold mt-2">Description</p>
            </div>
          </div>
          <div className="col-span-1 ">
            <button className="rounded-full text-3xl md:text-4xl font-extrabold border-black hover:bg-blue-500  border px-7  md:px-10 py-5 absolute  bottom-32 items-center right-1/4 md:right-20">
              Know More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
