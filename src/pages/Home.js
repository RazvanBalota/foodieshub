import ChefSection from "../components/ChefSection";
import QuoteSection from "../components/QuoteSection";
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImproveSkills />
      <QuoteSection />
      <ChefSection />
    </div>
  );
}
