import HeroPage from "./components/Hero";
import TechStack from "./components/TechStack";
import WhyMe from "./components/WhyMe";

export default function Home() {
  return (
    <div>
      <HeroPage />

      <WhyMe />

      <div>
        <TechStack />
      </div>
    </div>
  );
}
