import logo from "./logo.svg";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedLogos from "./components/Featured";
import HowItWorks from "./components/HowTo";
import MealsSection from "./components/MealsSection";
import TestimonialsSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import MemberInfoSection from "./components/MemberInfo";
import SubscribeSection from "./components/Subscribe";
import Footer from "./components/Footer";
import DevCredits from "./components/Credits";
import "./App.css";
import "./Queries.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturedLogos />
      <HowItWorks />
      <MealsSection />
      <TestimonialsSection />
      <PricingSection />
      <MemberInfoSection />
      <SubscribeSection />
      <Footer />
      <DevCredits />
    </div>
  );
}

export default App;
