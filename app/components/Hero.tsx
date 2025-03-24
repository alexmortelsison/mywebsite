import Image from "next/image";
export default function HeroPage() {
  return (
    <div className="z-10 lg:px-16 2xl:px-0 tracking-tighter ">
      <div className="">
        <div className="">
          <Image
            src={"/bg.png"}
            alt="background"
            fill
            quality={100}
            className="object-cover -z-50 brightness-50"
          />
          <div className="bg-gray-800/20 backdrop-blur-sm h-[90vh]">
            <div className="max-w-7xl mx-auto z-10 px-8">
              <h1 className="pt-[250px] 2xl:pt-[350px] lg:pt-[300px] md:pt-[500px] text-white font-bold text-4xl lg:text-9xl">
                Alex Sison.
              </h1>
              <p className="text-white font-normal text-3xl lg:text-6xl">
                Full Stack Developer.
              </p>
              <p className="text-gray-400 text-md lg:text-xl lg:w-1/3 pt-2">
                A dedicated web developer with a strong passion for creating
                efficient, high-performing, and user-friendly web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
