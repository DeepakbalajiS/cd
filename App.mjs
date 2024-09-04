import React from "react";
import { Navbar } from "./src/components/Navbar";
import { Hero } from "./src/components/Hero";
import Anime from "./src/components/Anime";
import Engagement from "./src/components/Engagement";
import Cards from "./src/components/Cards";
import Newsletter from "./src/components/Newsletter";
import Career from "./src/components/Career";
import Inc from "./src/components/Inc";
import Job from "./src/components/Job";
import Footer from "./src/components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Anime />
      <Engagement />
      <Cards />
      <Newsletter />
      <Career />
      <Inc />
      <Job />
      <Footer />
    </div>
  );
}

export default App;
