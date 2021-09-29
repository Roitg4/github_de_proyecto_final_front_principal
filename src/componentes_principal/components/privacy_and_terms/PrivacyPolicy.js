import React from "react";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
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
const Privacy = ({ headingText = "Política de privacidad" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>
              Última actualización: 21 de abril de 2021</p>

            <p>
              Esta Política de privacidad describe Nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de Su
              información cuando usa el Servicio y le informa sobre sus derechos de privacidad y cómo la ley lo protege.
            </p>

            <p>
              Usamos sus datos personales para proporcionar y mejorar el servicio. Al utilizar el Servicio, acepta las
              recopilación y uso de información de acuerdo con esta Política de privacidad.
            </p>

            <h1> Interpretación y definiciones </h1>
            <h2> Interpretación </h2>
            <p>
              Las palabras cuya letra inicial está en mayúscula tienen significados definidos en las siguientes condiciones.
            </p>
            <p>

              Las siguientes definiciones tendrán el mismo significado independientemente de que aparezcan en singular o en
              plural.
            </p>

            <h2>
              Definiciones</h2>
            <p>A los efectos de esta Política de privacidad:</p>
            <ul>
              <li>
                <p>

                  <strong> Usted </strong> hace referencia a la persona que accede o utiliza el Servicio, o la empresa u otra
                  entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.
                </p>
              </li>
              <li>
                <p>

                  <strong> Compañía </strong> (denominada "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo)
                  se refiere a Treact.
                </p>
              </li>
              <li>
                <strong> Afiliado </strong> hace referencia a una entidad que controla, está controlada por o está bajo control común
                con una parte, donde "control" significa la propiedad del 50% o más de las acciones, participación accionaria u otra
                valores con derecho a voto para la elección de directores u otra autoridad de gestión.
              </li>
              <li>
                <strong> Cuenta </strong> significa una cuenta única creada para que usted acceda a nuestro Servicio o partes de nuestro
                Servicio.
              </li>
              <li>
                <strong> Sitio web </strong> se refiere a Treact, accesible desde https://treact.com
              </li>{" "}

              <li>
                <strong> Servicio </strong> se refiere al sitio web.
              </li>
              <li>
                <strong> País </strong> se refiere a: Maharashtra, India.
              </li>
              <li>
                <p>
                  <strong> Proveedor de servicios </strong> se refiere a cualquier persona física o jurídica que procese los datos en nombre.
                  de la compañia. Se refiere a empresas de terceros o personas empleadas por la Compañía para
                  facilitar el Servicio, proporcionar el Servicio en nombre de la Compañía, realizar servicios relacionados
                  al Servicio o para ayudar a la Compañía a analizar cómo se utiliza el Servicio.
                </p>
              </li>
              <li>
                <strong> Servicio de redes sociales de terceros </strong> se refiere a cualquier sitio web o cualquier sitio web de red social.
                a través del cual un Usuario puede iniciar sesión o crear una cuenta para usar el Servicio.
              </li>
              <li>
                <p>
                  <strong> Datos personales </strong> es cualquier información que se relacione con un elemento identificado o identificable.
                  individual.
                </p>
              </li>
              <li>
                Las <strong> cookies </strong> son pequeños archivos que se colocan en su computadora, dispositivo móvil o cualquier otro
                dispositivo por un sitio web, que contiene los detalles de su historial de navegación en ese sitio web entre sus muchos
                usos.
              </li> {""}
              <li>
                <strong> Datos de uso </strong> se refiere a los datos recopilados automáticamente, ya sea generados por el uso de
                Servicio o desde la propia infraestructura del Servicio (por ejemplo, la duración de una visita a la página).
              </li>
            </ul>

            <h1> Recopilación y uso de sus datos personales </h1>
            <h2> Tipos de datos recopilados </h2>
            <h3>Personal Data</h3>
            <p>
              Al usar nuestro servicio, podemos pedirle que nos proporcione cierta información de identificación personal.
              que se puede utilizar para contactarlo o identificarlo. La información de identificación personal puede incluir, pero no es
              limitado a:
            </p>
            <ul>
              <li> Dirección de correo electrónico </li> <li> Nombre y apellido </li> <li> Número de teléfono </li> {""}
              <li> Dirección, estado, provincia, código postal, ciudad </li> <li> Datos de uso </li>
            </ul>

            <h3> Datos de uso </h3>
            <p> Los datos de uso se recopilan automáticamente cuando se utiliza el servicio. </p>
            <p>
              Los datos de uso pueden incluir información como la dirección de protocolo de Internet de su dispositivo (por ejemplo, dirección IP),
              tipo de navegador, versión del navegador, las páginas de nuestro Servicio que visita, la hora y la fecha de su visita,
              el tiempo dedicado a esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.
            </p>
            <p>
              Cuando accede al Servicio a través de un dispositivo móvil, podemos recopilar cierta información
              automáticamente, incluido, entre otros, el tipo de dispositivo móvil que utiliza, su dispositivo móvil único
              ID, la dirección IP de su dispositivo móvil, su sistema operativo móvil, el tipo de Internet móvil
              navegador que utiliza, identificadores de dispositivo únicos y otros datos de diagnóstico.
            </p>
            <p>
              También podemos recopilar información que su navegador envía cada vez que visita nuestro Servicio o cuando accede
              el Servicio por oa través de un dispositivo móvil.
            </p>

            <h3> Tecnologías de seguimiento y cookies </h3>
            <p>
              Usamos Cookies y tecnologías de seguimiento similares para rastrear la actividad en Nuestro Servicio y almacenar ciertos
              información. Las tecnologías de seguimiento utilizadas son balizas, etiquetas y scripts para recopilar y rastrear información.
              y para mejorar y analizar Nuestro Servicio.
            </p>
            <p>
              Puede indicarle a su navegador que rechace todas las cookies o que indique cuándo se está enviando una cookie. Sin embargo,
              Si no acepta las cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio.
            </p>
            <p>
              Las cookies pueden ser cookies "persistentes" o de "sesión". Las cookies persistentes permanecen en su computadora personal o
              dispositivo móvil cuando se desconecta, mientras que las cookies de sesión se eliminan tan pronto como cierra su sitio web
              navegador. Obtenga más información sobre las cookies: <a href="https://www.termsfeed.com/blog/cookies/"> Todo sobre las cookies </a>
              .
            </p>
            <p> Utilizamos cookies de sesión y persistentes para los fines que se establecen a continuación: </p>
            <ul>
              <li>
                <p>
                  <strong> Cookies necesarias / esenciales </strong>
                </p>
                <p> Tipo: Cookies de sesión </p>
                <p> Administrado por: Nosotros </p>
                <p>
                  Propósito: estas cookies son esenciales para brindarle los servicios disponibles a través del sitio web y para
                  Permitirle utilizar algunas de sus funciones. Ayudan a autenticar a los usuarios y a prevenir el uso fraudulento de
                  cuentas de usuario. Sin estas cookies, los servicios que ha solicitado no se pueden proporcionar, y nosotros
                  solo use estas cookies para brindarle esos servicios.
                </p>
              </li>
              <li>
                <p>
                  <strong> Política de cookies / Cookies de aceptación de avisos </strong>
                </p>
                <p> Tipo: cookies persistentes </p>
                <p> Administrado por: Nosotros </p>
                <p> Finalidad: estas cookies identifican si los usuarios han aceptado el uso de cookies en el sitio web. </p>
              </li>
              <li>
                <p>
                  <strong> Cookies de funcionalidad </strong>
                </p>
                <p> Tipo: cookies persistentes </p>
                <p> Administrado por: Nosotros </p>
                <p>
                  Propósito: estas cookies nos permiten recordar las elecciones que realiza cuando utiliza el sitio web, como
                  recordando sus datos de inicio de sesión o preferencia de idioma. El propósito de estas cookies es proporcionarle
                  con una experiencia más personal y para evitar que tenga que volver a ingresar sus preferencias cada vez que
                  utilizar el sitio web.
                </p>
              </li>
            </ul>
            <p>
              Para obtener más información sobre las cookies que utilizamos y sus opciones con respecto a las cookies, visite nuestra página de Cookies.
              Política.
            </p>

            <h2> Uso de sus datos personales </h2>
            <p> La Compañía puede usar Datos Personales para los siguientes propósitos: </p>
            <ul>
              <li>
                <strong> Para proporcionar y mantener nuestro Servicio </strong>, incluso para supervisar el uso de nuestro Servicio.
              </li>
              <li>
                <strong> Para administrar su cuenta: </strong> para administrar su registro como usuario del servicio. los
                Los Datos Personales que proporcione pueden darle acceso a diferentes funcionalidades del Servicio que son
                disponible para usted como usuario registrado.
              </li>
              <li>
                <strong> Para la ejecución de un contrato: </strong> el desarrollo, cumplimiento y realización del
                contrato de compra de los productos, artículos o servicios que ha comprado o de cualquier otro contrato con
                Nosotros a través del Servicio.
              </li>
              <li>
                <strong> Para contactarlo: </strong> Para contactarlo por correo electrónico, llamadas telefónicas, SMS u otro equivalente.
                formas de comunicación electrónica, como las notificaciones automáticas de una aplicación móvil con respecto a las actualizaciones
                o comunicaciones informativas relacionadas con las funcionalidades, productos o servicios contratados, incluyendo
                las actualizaciones de seguridad, cuando sea necesario o razonable para su implementación.
              </li>
              <li>
                <strong> Para proporcionarle </strong> noticias, ofertas especiales e información general sobre otros productos,
                servicios y eventos que ofrecemos que son similares a los que ya ha comprado o solicitado
                sobre a menos que haya optado por no recibir dicha información.
              </li>
              <li>
                <strong> Para gestionar sus solicitudes: </strong> para atender y gestionar sus solicitudes para nosotros.
              </li>
            </ul>

            <p> Podemos compartir su información personal en las siguientes situaciones: </p>

            <ul>
              <li>
                <strong> Con proveedores de servicios: </strong> podemos compartir su información personal con proveedores de servicios.
                para monitorear y analizar el uso de nuestro Servicio, para contactarlo.
              </li>
              <li>
                <strong> Para transferencias comerciales: </strong> podemos compartir o transferir su información personal en
                conexión con, o durante las negociaciones de, cualquier fusión, venta de activos de la Compañía, financiamiento o
                adquisición de la totalidad o una parte de nuestro negocio a otra empresa.
              </li>
              <li>
                <strong> Con afiliados: </strong> podemos compartir su información con nuestros afiliados, en cuyo caso
                requerirá que esos afiliados cumplan con esta Política de privacidad. Los afiliados incluyen nuestra empresa matriz y
                cualquier otra subsidiaria, socios de empresas conjuntas u otras compañías que controlemos o que estén bajo
                control común con Nosotros.
              </li>
              <li>
                <strong> Con socios comerciales: </strong> podemos compartir su información con nuestros socios comerciales para
                ofrecerle determinados productos, servicios o promociones.
              </li>
              <li>
                <strong> Con otros usuarios: </strong> cuando comparte información personal o interactúa de otra manera en el
                áreas públicas con otros usuarios, dicha información puede ser vista por todos los usuarios y puede ser públicamente
                distribuido al exterior. Si interactúa con otros usuarios o se registra a través de una red social de terceros
                Servicio, sus contactos en el servicio de redes sociales de terceros pueden ver su nombre, perfil, imágenes y
                descripción de su actividad. Del mismo modo, otros usuarios podrán ver descripciones de su actividad,
                comunicarse contigo y ver tu perfil.
              </li>
            </ul>

            <h2> Conservación de sus datos personales </h2>
            <p>
              La Compañía retendrá sus datos personales solo durante el tiempo que sea necesario para los fines establecidos en
              esta Política de privacidad. Retendremos y utilizaremos sus datos personales en la medida necesaria para cumplir con nuestra
              obligaciones legales (por ejemplo, si estamos obligados a conservar sus datos para cumplir con las leyes aplicables),
              resolver disputas y hacer cumplir nuestras políticas y acuerdos legales.
            </p>
            <p>
              La Compañía también retendrá los Datos de uso con fines de análisis interno. Los datos de uso generalmente se conservan
              por un período de tiempo más corto, excepto cuando estos datos se utilizan para fortalecer la seguridad o para mejorar la
              funcionalidad de Nuestro Servicio, o estamos legalmente obligados a conservar estos datos durante períodos de tiempo más prolongados.
            </p>

            <h2> Transferencia de sus datos personales </h2>
            <p>
              Su información, incluidos los Datos personales, se procesa en las oficinas operativas de la Compañía y en cualquier
              otros lugares donde se encuentran las partes involucradas en el procesamiento. Significa que esta información puede
              ser transferidos y mantenidos en computadoras ubicadas fuera de Su estado, provincia, país o
              otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de Su
              jurisdicción.
            </p>
            <p>
              Su consentimiento a esta Política de privacidad seguido por el envío de dicha información representa Su
              acuerdo a esa transferencia.
            </p>
            <p>
              La Compañía tomará todas las medidas razonablemente necesarias para garantizar que sus datos se traten de forma segura y en
              de acuerdo con esta Política de Privacidad y no se realizará ninguna transferencia de Sus Datos Personales a un
              organización o un país, a menos que existan controles adecuados, incluida la seguridad de sus datos
              y otra información personal.
            </p>

            <h2> Divulgación de sus datos personales </h2>
            <h3> Transacciones comerciales </h3>
            <p>
              Si la Compañía está involucrada en una fusión, adquisición o venta de activos, sus datos personales pueden ser transferidos.
              Le enviaremos un aviso antes de que sus datos personales se transfieran y estén sujetos a una privacidad diferente.
              Política.
            </p>
            <h3> Aplicación de la ley </h3>
            <p>
              En determinadas circunstancias, es posible que se le solicite a la Compañía que revele sus datos personales si es necesario
              así por ley o en respuesta a solicitudes válidas de autoridades públicas (por ejemplo, un tribunal o una agencia gubernamental).
            </p>
            <h3> Otros requisitos legales </h3>
            <p>
              La Compañía puede divulgar sus datos personales si cree de buena fe que dicha acción es necesaria para:
            </p>
            <ul>
              <li> Cumplir con una obligación legal </li>
              <li> Proteger y defender los derechos o la propiedad de la Compañía </li>
              <li> Prevenir o investigar posibles irregularidades en relación con el Servicio </li>
              <li> Proteger la seguridad personal de los Usuarios del Servicio o del público </li>
              <li> Protéjase contra la responsabilidad legal </li>
            </ul>

            <h2> Seguridad de sus datos personales </h2>
            <p>
              La seguridad de sus datos personales es importante para nosotros, pero recuerde que ningún método de transmisión
              Internet, o método de almacenamiento electrónico, es 100% seguro. Si bien nos esforzamos por utilizar comercialmente
              medios aceptables para proteger sus datos personales, no podemos garantizar su seguridad absoluta.
            </p>

            <h1> Privacidad de los niños </h1>
            <p>
              Nuestro Servicio no se dirige a ninguna persona menor de 13 años. No recopilamos a sabiendas personalmente
              información identificable de cualquier persona menor de 13 años. Si es padre o tutor y es
              consciente de que su hijo nos ha proporcionado datos personales, comuníquese con nosotros. Si nos damos cuenta de que
              hemos recopilado Datos personales de cualquier persona menor de 13 años sin verificación del consentimiento de los padres, Nosotros
              tomar medidas para eliminar esa información de Nuestros servidores.
            </p>
            <p>
              Si necesitamos confiar en el consentimiento como base legal para procesar su información y su país requiere
              consentimiento de uno de los padres, es posible que necesitemos el consentimiento de sus padres antes de recopilar y utilizar esa información.
            </p>

            <h1> Vínculos a otros sitios web </h1>
            <p>
              Nuestro Servicio puede contener enlaces a otros sitios web que no son operados por Nosotros. Si hace clic en un tercero
              enlace, se le dirigirá al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de privacidad.
              de cada sitio que visite.
            </p>
            <p>
              No tenemos control ni asumimos ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de cualquier
              sitios o servicios de terceros.
            </p>

            <h1> Cambios en esta Política de privacidad </h1>
            <p>
              Es posible que actualicemos nuestra Política de privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando el nuevo
              Política de privacidad en esta página.
            </p>
            <p>
              Le informaremos por correo electrónico y / o un aviso destacado en Nuestro Servicio, antes de que el cambio se convierta en
              vigente y actualice la fecha de "Última actualización" en la parte superior de esta Política de privacidad.
            </p>
            <p>
              Se le recomienda que revise esta Política de privacidad periódicamente para ver si hay cambios. Cambios a esta política de privacidad
              son efectivos cuando se publican en esta página.
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
export default Privacy;