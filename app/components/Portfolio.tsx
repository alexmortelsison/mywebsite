import { CarouselD } from "./CarouselPage";

export default function PortfolioPage() {
  return (
    <div className="bg-white h-[50vh] max-w-7xl mx-auto mt-24 px-6 lg:px-0">
      <div className="flex flex-col justify-center items-center">
        <p>Showcasing My Skills, Projects, and Passion</p>
        <h1 className="text-4xl font-bold pt-2">Portfolio</h1>
      </div>
      <div className="md:grid md:grid-cols-2 mt-4">
        <div className="mt-8">
          <h2 className="lg:text-2xl text-xl text-center md:text-start">
            Here, you&apos;ll find a collection of my work, showcasing my
            skills, creativity, and dedication to delivering high-quality
            results. From innovative projects to collaborations, each piece
            reflects my passion for continuous learning and growth.{" "}
          </h2>
        </div>
        <div className="place-items-end">
          <div>
            <CarouselD />
          </div>
        </div>
      </div>
    </div>
  );
}
