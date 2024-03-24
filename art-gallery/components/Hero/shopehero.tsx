import Image from "next/image";
const heroimg = "/images/shophero.jpg";
export default function ShopHero() {
  return (
    <main className="">
      <div className=" flex-shrink w-full md:h-[25rem] h-52 relative">
        <Image
          src={heroimg || ""}
          alt="hero image"
          fill
          objectFit="cover"
          className=""

        />

        <div className="relative w-full h-52 md:h-screen grid grid-cols-3">
          <div className="col-span-1 ">
            <div className="absolute top-5 left-10 md:top-40 md:left-20">
              <h1 className="text-2xl md:text-6xl font-extrabold">
                Shop{" "}
              </h1>
              <p className=" text-xs md:text-lg font-bold mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi a cumque maxime cupiditate quasi architecto tenetur quae, esse amet ad voluptate debitis, similique beatae. Maiores sapiente illo doloribus tempore laudantium?</p>
            </div>
          </div>
          <div className="col-span-2 ">

          </div>
        </div>
      </div>
    </main>
  );
}
