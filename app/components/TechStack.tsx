import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCanva } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { SiRedux, SiShadcnui } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import Image from "next/image";

const stack1 = [
  {
    name: "NextJS",
    icon: <TbBrandNextjs size={40} />,
  },
  {
    name: "React",
    icon: <DiReact size={40} />,
  },
  {
    name: "Typescript",
    icon: <TbBrandTypescript size={40} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={40} />,
  },
];

const stack2 = [
  {
    name: "Redux",
    icon: <SiRedux size={40} />,
  },
  {
    name: "ShadcnUI",
    icon: <SiShadcnui size={40} />,
  },
  {
    name: "AWS",
    icon: <FaAws size={40} />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb size={40} />,
  },
  {
    name: "Github",
    icon: <AiFillGithub size={40} />,
  },
  {
    name: "Canva",
    icon: <SiCanva size={40} />,
  },
];

export default function TechStack() {
  return (
    <div className="lg:h-[100vh] md:h-[30vh] bg-white z-50 tracking-tighter inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pt-8 md:pt-16 lg:pt-48 ">
      <div className="flex flex-col justify-center items-center pt-24 md:pt-0 lg:pt-24">
        <h1 className="lg:text-xl">Main Tech Stack</h1>
        <p className="text-center text-2xl lg:text-4xl px-8 lg:px-0 pt-2 lg:pt-4 lg:max-w-[800px]">
          I use Next.Js, React, TypeScript, and TailwindCSS for fast and
          scalable web development.
        </p>

        <div className="relative flex justify-center items-center">
          <div className="hidden lg:block">
            <Image
              src={"/smoke.png"}
              alt=""
              width={1000}
              height={1000}
              className="object-cover w-full h-[500px]"
            />
          </div>
          <div className="absolute -top-[1px] md:grid-cols-2 lg:grid-cols-4 max-w-7xl md:px-2 mx-auto gap-4 md:mt-12 lg:mt-24 z-40 hidden mb-48 lg:inline-grid">
            <div className="flex flex-col rounded-4xl lg:h-[300px] lg:w-[200px] md:h-[200px] md:w-[200px] justify-center items-center bg-gray-700/30 backdrop-blur-sm hover:scale-110 duration-500">
              <div className="">
                <TbBrandNextjs
                  size={200}
                  className="w-[120px] h-[120px] md:w-[80px] md:h-[80px] text-[#29b2ff]"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-4xl lg:h-[300px] w-[200px] md:h-[200px] md:w-[200px] justify-center items-center bg-gray-700/30 backdrop-blur-sm hover:scale-110 duration-500">
              <div className="">
                <DiReact
                  size={200}
                  className="w-[120px] h-[120px] md:w-[80px] md:h-[80px] text-[#29b2ff]"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-4xl lg:h-[300px] w-[200px] md:h-[200px] md:w-[200px] justify-center items-center bg-gray-700/30 backdrop-blur-sm hover:scale-110 duration-500">
              <div className="">
                <TbBrandTypescript
                  size={200}
                  className="w-[120px] h-[120px] md:w-[80px] md:h-[80px] text-[#29b2ff]"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-4xl lg:h-[300px] w-[200px] md:h-[200px] md:w-[200px] justify-center items-center bg-gray-700/30 backdrop-blur-sm hover:scale-110 duration-500">
              <div className="">
                <SiTailwindcss
                  size={200}
                  className="w-[120px] h-[120px] md:w-[80px] md:h-[80px] text-[#29b2ff]"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-24 md:mt-8 space-x-4 lg:hidden">
            {stack1.map((link) => (
              <div
                key={link.name}
                className="items-center flex flex-col gap-y-2"
              >
                <div>{link.icon}</div>
                <p className="text-sm">{link.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 pt-8">
          {stack2.map((link) => (
            <div key={link.name} className="items-center flex flex-col gap-y-2">
              <div>{link.icon}</div>
              <p className="text-sm">{link.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
