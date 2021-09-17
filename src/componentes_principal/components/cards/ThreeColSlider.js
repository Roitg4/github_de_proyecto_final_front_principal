import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as Wifi } from "feather-icons/dist/icons/wifi.svg";
import { ReactComponent as Users } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TV } from "feather-icons/dist/icons/tv.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

/* const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`; */

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-green-700 text-green-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-green-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
const Three = () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://fotos.alquilerargentina.com/v7/propiedades/hl34/o_hl34_Complejo_77TX7W2F.jpg?p=galeria_lg",
      title: "Cabaña Nº 4",
      description: "El alojamiento cuenta con 2 dormitorios, 1 baños, cochera. Para una estadía cómoda y confortable nuestro alojamiento El Algarrobo cuenta con Internet, Ropa Blanca, Ropa De Cama, Desayuno, Servicio De Limpieza y otros servicios.",
      userText: "2 a 4 Per.",
      rating: "4.8",
    },
    {
      imageSrc: "https://fotos.alquilerargentina.com/v7/propiedades/hl34/o_hl34_Complejo_3TN9LXHY.jpg?p=galeria_lg",
      title: "Cabaña Nº 8",
      description: "El alojamiento cuenta con 2 dormitorios, 1 baños, cochera. Para una estadía cómoda y confortable nuestro alojamiento El Algarrobo cuenta con Internet, Ropa Blanca, Ropa De Cama, Desayuno, Servicio De Limpieza y otros servicios.",
      userText: "4 a 6 Per.",
      rating: 4.9,
    },
    {
      imageSrc: "https://fotos.alquilerargentina.com/v7/propiedades/hl34/o_hl34_Complejo_WHWL54O1.jpg?p=galeria_lg",
      title: "Cabaña Nº 9",
      description: "El alojamiento cuenta con 2 dormitorios, 1 baños, cochera. Para una estadía cómoda y confortable nuestro alojamiento El Algarrobo cuenta con Internet, Ropa Blanca, Ropa De Cama, Desayuno, Servicio De Limpieza y otros servicios.",
      userText: "4 a 6 Per.",
      rating: "5.0",
    },
    {
      imageSrc: "https://fotos.alquilerargentina.com/v7/propiedades/hl34/o_hl34_Complejo_69LLLGS9.jpg?p=galeria_lg",
      title: "Departamento 11",
      description: "El alojamiento cuenta con 2 dormitorios, 1 baños, cochera. Para una estadía cómoda y confortable nuestro alojamiento El Algarrobo cuenta con Internet, Ropa Blanca, Ropa De Cama, Desayuno, Servicio De Limpieza y otros servicios.",
      userText: "4 a 5 Per.",
      rating: 4.5,
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Alojamientos Destacados</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon /></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon /></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <Wifi />
                    </IconContainer>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <TV />
                    </IconContainer>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <Users />
                    </IconContainer>
                    <Text>{card.userText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Consultar</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
export default Three;