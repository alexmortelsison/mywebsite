import HeroPage from "./components/Hero";
import PortfolioPage from "./components/Portfolio";
import TechStack from "./components/TechStack";
import WhyMe from "./components/WhyMe";

export default function Home() {
  return (
    <div>
      <HeroPage />

      <WhyMe />

      <div>
        <PortfolioPage />
      </div>
      <div>
        <TechStack />
      </div>
    </div>
  );
}
