import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Link } from "react-router-dom";

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "../headers/light";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw.span(NavLinkBase)`
  sm:text-sm sm:mx-6
`; //Menu

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`; //Fondo gris
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url("https://fotos.alquilerargentina.com/v7/propiedades/hl34/o_hl34_unidad_IWKPH49A.jpg?p=galeria_lgg");
  ${tw`bg-gray-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`; //Titulo
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-green-600 text-gray-100 hover:bg-green-800`} { /* Iniciar Sesion*/}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700`}
  }
`;

const Full = ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink><Link to="/elalgarrobo.com.ar/inicio">Inicio</Link></NavLink>
      <NavLink><Link to="/elalgarrobo.com.ar/alojamientos">Alojamientos</Link></NavLink>
      <NavLink><Link to="#">Consulta</Link></NavLink>
    </NavLinks>
  ],
  heading = (
    <>
      Bienvenidos al complejo
      <wbr />
      <br />
      <span tw="text-green-600"> El Algarrobo</span>
    </>
  ),
  description = "Un lugar único que hará de su estadía un recuerdo inolvidable. ¡Descubra Calamuchita, descubra El Algarrobo!.",
  primaryActionUrl = "/elalgarrobo.com.ar/login",
  primaryActionText = "Iniciar Sesión",
  secondaryActionUrl = "/elalgarrobo.com.ar/register",
  secondaryActionText = "Registrarse"
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <Link to={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </Link>
              <Link to={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </Link>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
  );
};
export default Full;