import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhoWeWorkWith } from "@/components/site/WhoWeWorkWith";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Results } from "@/components/site/Results";
import { Consultation } from "@/components/site/Consultation";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const Home = () => {
  return (
    <main data-testid="home-page" className="min-h-screen bg-[#F9F7F4] text-[#2C2420]">
      <Navigation />
      <Hero />
      <HowItWorks />
      <WhoWeWorkWith />
      <WhyChooseUs />
      <Results />
      <Consultation />
      <FinalCTA />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
