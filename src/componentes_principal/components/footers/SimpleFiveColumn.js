import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logohoja.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-green-500 hocus:border-green-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-green-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-green-700 text-green-100 hover:bg-green-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const Footer = () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>El Algarrobo.</LogoText>
          </LogoContainer>
          <CompanyDescription>
            El Algarrobo es una empresa S.R.L de un Complejo Vacacional que ofrece a sus huespedes los mejores servicios .
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Enlaces rápidos</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Inicio</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Alojamientos</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Contacto</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Acciones</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Iniciar Sesión</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Registrarse</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Legal</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">SGC</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Política de Privacidad</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Terminos y Condiciones</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
export default Footer;