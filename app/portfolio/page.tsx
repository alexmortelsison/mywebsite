import Footer from "../components/Footer";
import PortfolioCard from "../components/PortfolioCard";

export default function PortfolioPage() {
  return (
    <div className="h-[80vh] inset-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="max-w-7xl mx-auto flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center mt-16">
          <p>Showcasing My Skills, Projects, and Passion</p>
          <h1 className="text-4xl pt-2">My Portfolio</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 px-4 lg:px-16 2xl:px-0 my-8 space-y-8 lg:space-x-12 lg:pt-8 lg:max-w-7xl lg:mx-auto">
        <PortfolioCard
          image={"/a1.png"}
          name={"Ally Music"}
          description="A landing page for Ally Music Production showcasing famous Filipino
          artists to the US."
          href={"https://allymusicnyc.com/"}
        />
        <PortfolioCard
          image={"/a2.png"}
          name={"Next Pixel Studio Labs"}
          description="Highlighting Next Pixel Studio Labs' services. Has a push email function for inquiries."
          href={"https://nextpixelstudiolabs.vercel.app/"}
        />
        <PortfolioCard
          image={"/a3.png"}
          name={"TechHub"}
          description="A mock ecommerce website for shopping gadgets. It has like and search functions. I used NextAuth for authentication, Redux for state management and Stripe for payment."
          href={"https://techhub-snowy.vercel.app/"}
        />
      </div>
    </div>
  );
}
