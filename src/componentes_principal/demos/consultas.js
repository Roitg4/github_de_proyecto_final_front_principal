import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../components/headers/light";
import Footer from "../components/footers/SimpleFiveColumn";
import ContactUsForm from "../components/forms/TwoColContactUsWithIllustrationFullForm";
import ContactDetails from "../components/cards/ThreeColContactDetails";
import Whatsapp from "../components/whatsapp/whatsapp";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

const Contact = () => {
    return (
        <AnimationRevealPage>
            <Whatsapp />
            <Header />
            <ContactUsForm />
            <ContactDetails
                cards={[
                    {
                        title: "Oficina",
                        description: (
                            <>
                                <Address>
                                    <AddressLine>Atención al cliente</AddressLine>
                                    <AddressLine>De 8:00 a 20:00</AddressLine>
                                </Address>
                                <Email>info@algarrobo.com.ar</Email>
                                <Phone>+54 03546 996988</Phone>
                            </>
                        )
                    },
                    {
                        title: "Administrador",
                        description: (
                            <>
                                <Address>
                                    <AddressLine>Atención al cliente</AddressLine>
                                    <AddressLine>De 16:00 a 20:00</AddressLine>
                                </Address>
                                <Email>admininfo@gmail.com</Email>
                                <Phone>+54 03546 849237</Phone>
                            </>
                        )
                    },
                ]}
            />
            <Footer />
        </AnimationRevealPage>
    );
};
export default Contact;