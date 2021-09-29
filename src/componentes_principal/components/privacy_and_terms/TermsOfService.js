import React from "react";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import { Container, ContentWithPaddingXl } from "../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../headers/light.js";
import Footer from "../footers/SimpleFiveColumn";
import { SectionHeading } from "../misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

const Terms = ({ headingText = "Términos y Condiciones" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>

            <p> Última actualización: 21 de abril de 2021 </p>

            <p> Lea estos términos y condiciones detenidamente antes de utilizar Nuestro servicio. </p>

            <h1> Interpretación y definiciones </h1>
            <h2> Interpretación </h2>
            <p>
              Las palabras cuya letra inicial está en mayúscula tienen significados definidos en las siguientes condiciones.
            </p>
            <p>
              Las siguientes definiciones tendrán el mismo significado independientemente de que aparezcan en singular o en
              plural.
            </p>

            <h2> Definiciones </h2>
            <p> A los efectos de estos Términos y condiciones: </p>
            <ul>
              <li>
                <strong> Afiliado </strong> hace referencia a una entidad que controla, está controlada por o está bajo control común
                con una parte, donde "control" significa la propiedad del 50% o más de las acciones, participación accionaria u otra
                valores con derecho a voto para la elección de directores u otra autoridad de gestión.
              </li>
              <li>
                <strong> Compañía </strong> (denominada "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo)
                se refiere a Treact Inc., Navi Mumbai.
              </li>
              <li>
                <strong> País </strong> se refiere a: Maharashtra, India.
              </li>
              <li>
                <strong> Servicio </strong> se refiere al sitio web.
              </li>
              <li>
                <strong> Términos y condiciones </strong> (también denominados "Términos") se refieren a estos Términos y condiciones que
                forman el acuerdo completo entre Usted y la Compañía con respecto al uso del Servicio.
              </li>
              <li>
                <strong> Servicio de redes sociales de terceros </strong> hace referencia a cualquier servicio o contenido (incluidos datos,
                información, productos o servicios) proporcionados por un tercero que pueden mostrarse, incluirse o
                disponible por el Servicio.
              </li>
              <li>
                <strong> Sitio web </strong> se refiere a Treact, accesible desde https://treact.com
              </li>
              <li>
                <strong> Usted </strong> hace referencia a la persona que accede al Servicio o lo utiliza, o la empresa u otra persona legal
                entidad en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.
              </li>
            </ul>

            <h1> Reconocimiento </h1>
            <p>
              Estos son los Términos y Condiciones que rigen el uso de este Servicio y el acuerdo que opera.
              entre usted y la empresa. Estos Términos y Condiciones establecen los derechos y obligaciones de todos los usuarios.
              con respecto al uso del Servicio.
            </p>
            <p>
              Su acceso y uso del Servicio está condicionado a su aceptación y cumplimiento de estos Términos.
              Y condiciones. Estos Términos y Condiciones se aplican a todos los visitantes, usuarios y otras personas que acceden o utilizan el
              Servicio.
            </p>
            <p>
              Al acceder o utilizar el Servicio, usted acepta estar sujeto a estos Términos y Condiciones. Si no estas de acuerdo
              con cualquier parte de estos Términos y condiciones, no podrá acceder al Servicio.
            </p>
            <p>
              Usted declara que es mayor de 18 años. La Compañía no permite que los menores de 18 años utilicen el
              Servicio.
            </p>
            <p>
              Su acceso y uso del Servicio también está condicionado a Su aceptación y cumplimiento de la
              Política de privacidad de la empresa. Nuestra Política de privacidad describe Nuestras políticas y procedimientos sobre la colección,
              uso y divulgación de su información personal cuando usa la aplicación o el sitio web y le dice
              sobre sus derechos de privacidad y cómo la ley lo protege. Lea nuestra Política de privacidad detenidamente antes
              utilizando Nuestro Servicio.
            </p>

            <h1> Vínculos a otros sitios web </h1>
            <p>
              Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por el
              Empresa.
            </p>
            <p>
              La Compañía no tiene control ni asume responsabilidad por el contenido, las políticas de privacidad o
              prácticas de sitios web o servicios de terceros. Además, reconoce y acepta que la Compañía
              no será responsable, directa o indirectamente, por cualquier daño o pérdida causados ​​o presuntamente
              causado por o en conexión con el uso o dependencia de dicho contenido, bienes o servicios disponibles en
              oa través de dichos sitios web o servicios.
            </p>
            <p>
              Le recomendamos encarecidamente que lea los términos y condiciones y las políticas de privacidad de los sitios web de terceros.
              o servicios que visita.
            </p>

            <h1> Terminación </h1>
            <p>
              Podemos rescindir o suspender su acceso de inmediato, sin previo aviso ni responsabilidad, por cualquier motivo.
              en cualquier caso, incluido, entre otros, si incumple estos Términos y condiciones.
            </p>
            <p> Tras la rescisión, su derecho a utilizar el Servicio cesará de inmediato. </p>

            <h1> Limitación de responsabilidad </h1>
            <p>
              Sin perjuicio de los daños en los que pueda incurrir, toda la responsabilidad de la Compañía y cualquiera de sus
              proveedores bajo cualquier disposición de estos Términos y Su recurso exclusivo para todo lo anterior será
              limitado a la cantidad realmente pagada por Usted a través del Servicio o 100 USD si no ha comprado
              cualquier cosa a través del Servicio.
            </p>
            <p>
              En la máxima medida permitida por la ley aplicable, en ningún caso la Compañía o sus proveedores serán
              responsable de cualquier daño especial, incidental, indirecto o consecuente (incluidos, pero no
              limitado a, daños por lucro cesante, pérdida de datos u otra información, por interrupción del negocio, por
              lesiones personales, pérdida de privacidad que surja de o de alguna manera relacionada con el uso o la incapacidad de usar
              el Servicio, software de terceros y / o hardware de terceros utilizado con el Servicio, o de otro modo en
              conexión con cualquier disposición de estos Términos), incluso si la Compañía o cualquier proveedor han sido informados de la
              posibilidad de tales daños e incluso si el recurso no cumple con su propósito esencial.
            </p>
            <p>
              Algunos estados no permiten la exclusión de garantías implícitas o la limitación de responsabilidad por incidentes o
              daños consecuentes, lo que significa que es posible que algunas de las limitaciones anteriores no se apliquen. En estos estados, cada
              La responsabilidad de las partes se limitará en la mayor medida permitida por la ley.
            </p>

            <h1> Renuncia de responsabilidad "TAL CUAL" y "SEGÚN DISPONIBILIDAD" </h1>
            <p>
              El Servicio se le proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD" y con todas las fallas y defectos sin garantía.
              de cualquier tipo. En la medida máxima permitida por la ley aplicable, la Compañía, en su propio nombre y en
              en nombre de sus Afiliados y sus respectivos otorgantes de licencias y proveedores de servicios, renuncia expresamente
              todas las garantías, ya sean expresas, implícitas, legales o de otro tipo, con respecto al Servicio, incluyendo
              todas las garantías implícitas de comerciabilidad, idoneidad para un propósito particular, título y no infracción,
              y garantías que puedan surgir del curso de la negociación, el curso del desempeño, el uso o la práctica comercial.
              Sin limitación a lo anterior, la Compañía no ofrece garantía ni compromiso, y no hace
              representación de cualquier tipo de que el Servicio cumplirá con Sus requisitos, logrará los resultados previstos,
              compatible o trabajar con cualquier otro software, aplicaciones, sistemas o servicios, operar sin
              interrupción, cumplir con los estándares de rendimiento o confiabilidad o estar libre de errores o que cualquier error o defecto
              puede o será corregido.
            </p>
            <p>
              Sin perjuicio de lo anterior, ni la Compañía ni ninguno de los proveedores de la compañía realiza
              representación o garantía de cualquier tipo, expresa o implícita: (i) en cuanto al funcionamiento o disponibilidad del
              Servicio, o la información, contenido y materiales o productos incluidos en el mismo; (ii) que el Servicio
              será ininterrumpido o sin errores; (iii) en cuanto a la exactitud, confiabilidad o vigencia de cualquier información
              o contenido proporcionado a través del Servicio; o (iv) que el Servicio, sus servidores, el contenido o los correos electrónicos
              enviados desde o en nombre de la Compañía están libres de virus, scripts, troyanos, gusanos, malware,
              bombas de tiempo u otros componentes dañinos.
            </p>
            <p>
              Algunas jurisdicciones no permiten la exclusión de ciertos tipos de garantías o limitaciones sobre los
              derechos legales de un consumidor, por lo que algunas o todas las exclusiones y limitaciones anteriores pueden no aplicarse a
              Usted. Pero en tal caso, las exclusiones y limitaciones establecidas en esta sección se aplicarán al
              en la mayor medida exigible según la ley aplicable.
            </p>

            <h1> Ley aplicable </h1>
            <p>
              Las leyes del País, excluyendo sus conflictos de reglas de leyes, regirán estos Términos y Su uso de los
              Servicio. Su uso de la Aplicación también puede estar sujeto a otras leyes locales, estatales, nacionales o internacionales.
              leyes.
            </p>

            <h1> Resolución de disputas </h1>
            <p>
              Si tiene alguna inquietud o disputa sobre el Servicio, acepta primero intentar resolver la disputa.
              informalmente poniéndose en contacto con la Compañía.
            </p>

            <h1> Para usuarios de la Unión Europea (UE) </h1>
            <p>
              Si es un consumidor de la Unión Europea, se beneficiará de las disposiciones obligatorias de la ley del
              país en el que reside.
            </p>

            <h1> Cumplimiento legal de Estados Unidos </h1>
            <p>
              Usted declara y garantiza que (i) no se encuentra en un país sujeto a las
              embargo gubernamental, o que haya sido designado por el gobierno de los Estados Unidos como "terrorista
              "país de apoyo", y (ii) no figura en ninguna lista del gobierno de los Estados Unidos de países prohibidos o
              Partes restringidas.
            </p>

            <h1> Divisibilidad y exención </h1>
            <h2> Divisibilidad </h2>
            <p>
              Si alguna disposición de estos Términos se considera inaplicable o inválida, dicha disposición se cambiará y
              interpretado para lograr los objetivos de dicha disposición en la mayor medida posible bajo
              la ley aplicable y las disposiciones restantes continuarán en pleno vigor y efecto.
            </p>

            <h2> Renuncia </h2>
            <p>
              Salvo lo dispuesto en el presente, la falta de ejercicio de un derecho o de exigir el cumplimiento de una obligación
              bajo estos Términos no afectará la capacidad de una de las partes para ejercer tal derecho o requerir tal desempeño en
              en cualquier momento posterior ni la renuncia a un incumplimiento constituirá una renuncia a cualquier incumplimiento posterior.
            </p>

            <h1> Interpretación de traducción </h1>
            <p>
              Estos Términos y condiciones pueden haberse traducido si los hemos puesto a su disposición en nuestro Servicio.
            </p>
            <p> Acepta que el texto original en inglés prevalecerá en caso de disputa. </p>

            <h1> Cambios en estos Términos y condiciones </h1>
            <p>
              Nos reservamos el derecho, a Nuestro exclusivo criterio, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión
              es material Haremos los esfuerzos razonables para proporcionar un aviso de al menos 30 días antes de cualquier nuevo término
              entrando en vigor. Lo que constituye un cambio material se determinará a Nuestro exclusivo criterio.
            </p>
            <p>
              Al continuar accediendo o utilizando Nuestro Servicio después de que esas revisiones entren en vigencia, usted acepta estar obligado
              por los términos revisados. Si no está de acuerdo con los nuevos términos, en su totalidad o en parte, deje de usar el
              sitio web y el Servicio.
            </p>

            <h1> Contáctenos </h1>
            <p> Si tiene alguna pregunta sobre estos Términos y condiciones, puede contactarnos: </p>

            <ul>
              <li> Por correo electrónico: support@example.com </li>
              <li> Por número de teléfono: 408.996.1010 </li>
            </ul>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
export default Terms;