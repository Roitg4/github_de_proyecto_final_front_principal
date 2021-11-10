import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Hero from "../components/headers/light";
import Whatsapp from "../components/whatsapp/whatsapp";
import Alojamientos from "../components/cards/alojamiento_detalle";
import Footer from "../components/footers/SimpleFiveColumn";

const Error404 = () => (
  <AnimationRevealPage>
    <Whatsapp />
    <Hero />
    <Alojamientos/>
    <Footer />
  </AnimationRevealPage>
);
export default Error404;