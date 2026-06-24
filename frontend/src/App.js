import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { Ecosystem } from "@/components/site/Ecosystem";
import { WhoWeWorkWith } from "@/components/site/WhoWeWorkWith";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Consultation } from "@/components/site/Consultation";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const Home = () => {
  return (
    <main data-testid="home-page" className="min-h-screen bg-[#F2F6FB] text-[#0F2A47]">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Ecosystem />
      <WhoWeWorkWith />
      <WhyChooseUs />
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
