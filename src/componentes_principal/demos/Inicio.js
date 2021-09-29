import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage"; 
import Hero from "../components/hero/FullWidthWithImage"; 
import Imagen from "../components/hero/TwoColumnWithImage";
import SliderCard from "../components/cards/ThreeColSlider.js";
import Features from "../components/features/VerticalWithAlternateImageAndText.js";
import Testimonial from "../components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "../components/faqs/SimpleWithSideImage.js";
import Footer from "../components/footers/SimpleFiveColumn";

const Inicio = () => (
  <AnimationRevealPage>
    <Hero />
    <Imagen />
    <SliderCard />
    <Features />
    <Testimonial textOnLeft={true}/>
    <FAQ />
    <Footer />
  </AnimationRevealPage>
);
export default Inicio;