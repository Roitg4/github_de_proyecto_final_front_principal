import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const TestimonialSliderContainer = tw.div`mt-10`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`bg-center md:flex sm:flex flex`} /* ml-2 md:mx-5 lg:mx-8 w-2/3 md:w-4/12 flex items-center max-w-xs md:max-w-none */
  img {
    ${tw`rounded-3xl`}
  }
`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw` text-green-600 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-6 h-6 text-gray-100`}
    }
  }
`;

const ControlButton = styled(PrimaryButtonBase)`
  ${tw`sm:mt-0 first:ml-0 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <NextButton><ChevronRightIcon /></NextButton>
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <PrevButton><ChevronLeftIcon /></PrevButton>
    </button>
  </SliderControlButtonContainer>
);

const Two = () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  const testimonials = [
    {
      imageSrc:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/116736420.jpg?k=81983cd9ea71a4172a515e609767fc1eea51f68deeb37a5daf16190b66424d40&o=&hp=1"
    },
    {
      imageSrc:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287008926.jpg?k=1a63cd4b6de7fcf34e20863b432ca5e536ad076076fb627d413e7f1518f995fd&o=&hp=1"
    },
    {
      imageSrc:
        "https://www.nubacabanias.com.ar/fotos/cabania.jpg"
    },
    {
      imageSrc:
        "https://www.demartis.com.ar/backend/pages/uploads/1603998276-1.jpg"
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Complejo Vacacional</HeadingTitle>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider
            nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <img src={testimonial.imageSrc} alt={testimonial.customerName} />
                </ImageContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
    </Container>
  );
};
export default Two;