import CarouselPage from "../components/CarouselPage";
import Footer from "../components/Footer";
import Image from "next/image";

const slides = ["/a1.png", "/a2.png", "/a3.png", "/a4.png"];

export default function PortfolioPage() {
  return (
    <div className="h-[80vh] inset-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="max-w-7xl mx-auto flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center mt-16">
          <p>Showcasing My Skills, Projects, and Passion</p>
          <h1 className="text-4xl pt-2">My Portfolio</h1>
        </div>
        <div className="md:grid md:grid-cols-2 2xl:space-x-80 2xl:mt-32 px-4">
          <div className="mt-8">
            <h2 className="md:text-xl  text-center md:text-start">
              Here, you&apos;ll find a collection of my work, showcasing my
              skills, creativity, and dedication to delivering high-quality
              results. From innovative projects to collaborations, each piece
              reflects my passion for continuous learning and growth.{" "}
            </h2>
          </div>
          <div className="place-items-end mt-16 md:mt-0">
            <div>
              <CarouselPage>
                {slides.map((slide, index) => (
                  <Image
                    src={slide}
                    key={index}
                    alt="portfolio"
                    width={500}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                ))}
              </CarouselPage>
            </div>
          </div>
        </div>
      </div>

      <footer className="hidden lg:flex absolute -bottom-0 left-200 pt-32">
        <Footer />
      </footer>
    </div>
  );
}
