import CarouselPage from "./CarouselPage";

const slides = [
  "allymusic.mp4",
  "techhub.mp4",
  "archbook.mp4",
  "postremami.mp4",
];

export default function PortfolioPage() {
  return (
    <div className="bg-white h-[50vh] md:h-[45vh] max-w-7xl mx-auto pt-8 px-6 lg:px-0 tracking-tighter">
      <div className="flex flex-col justify-center items-center">
        <p>Showcasing My Skills, Projects, and Passion</p>
        <h1 className="text-4xl pt-2">My Portfolio</h1>
      </div>
      <div className="md:grid md:grid-cols-2 2xl:space-x-80 md:space-x-8 md:place-items-center 2xl:mt-32 px-4 md:mt-8">
        <div className="mt-8">
          <h2 className="lg:text-xl text-sm text-center md:text-start lg:px-32 xl:px-0">
            Here, you&apos;ll find a collection of my work, showcasing my
            skills, creativity, and dedication to delivering high-quality
            results. From innovative projects to collaborations, each piece
            reflects my passion for continuous learning and growth.{" "}
          </h2>
        </div>
        <div className="place-items-end mt-8 md:mt-0">
          <div>
            <CarouselPage>
              {slides.map((slide, index) => (
                <video key={index} controls muted loop>
                  <source src={slide} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </CarouselPage>
          </div>
        </div>
      </div>
    </div>
  );
}
