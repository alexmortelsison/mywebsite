import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";
export default function TechStack() {
  return (
    <div className="lg:h-[50vh] md:h-[25vh] bg-white z-50 tracking-tighter mt-24">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center pt-8 md:pt-16 2xl:pt-44 lg:pt-24">
        <h1 className="lg:text-xl">Tech Stack</h1>
        <p className="text-center text-2xl lg:text-4xl px-8 lg:px-0 pt-2 lg:pt-4 lg:max-w-[800px]">
          I use Next.Js, React, TypeScript, and TailwindCSS for fast and
          scalable web development.
        </p>

        <div className="relative flex justify-center items-center">
          <div>
            <Image
              src={"/smoke.png"}
              alt="smoke"
              width={1000}
              height={1000}
              className="object-cover w-screen"
            />
          </div>
          <div className="absolute -top-[1px] md:grid-cols-2 lg:grid-cols-4 max-w-7xl md:px-2 mx-auto gap-4 md:mt-12 lg:mt-24 z-40 hidden md:inline-grid">
            <div className="flex flex-col rounded-4xl lg:h-[300px] lg:w-[200px] md:h-[200px] md:w-[200px] justify-center items-center bg-gray-600/20 backdrop-blur-xl">
              <div className="">
                <TbBrandNextjs
                  size={200}
                  className="w-[120px] h-[120px] md:w-[80px] md:h-[80px] text-black/80"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-4xl lg:h-[300px] w-[200px] md:h-[200px] md:w-[200px] justify-center items-center bg-gray-600/20 backdrop-blur-xl">
              <div className="">
                <DiReact
                  size={200}
                  className="w-[120px] h-[120px] md:w-[80px] md:h-[80px] text-black/80"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-4xl lg:h-[300px] w-[200px] md:h-[200px] md:w-[200px] justify-center items-center bg-gray-600/20 backdrop-blur-xl">
              <div className="">
                <TbBrandTypescript
                  size={200}
                  className="w-[120px] h-[120px] md:w-[80px] md:h-[80px] text-black/80"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-4xl lg:h-[300px] w-[200px] md:h-[200px] md:w-[200px] justify-center items-center bg-gray-600/20 backdrop-blur-xl">
              <div className="">
                <SiTailwindcss
                  size={200}
                  className="w-[120px] h-[120px] md:w-[80px] md:h-[80px] text-black/80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
