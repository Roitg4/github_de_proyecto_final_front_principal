import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage"; 
import Hero from "../components/headers/light"; 
import Error from "../components/error404/error404";

const Error404 = () => (
  <AnimationRevealPage>
    <Hero />
    <Error />
  </AnimationRevealPage>
);
export default Error404;