import React from "react";
import "tailwindcss/dist/base.css";
import "./componentes_principal/styles/globalStyles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//MIS COMPONENTES_PRINCIPAL
import Inicio from './componentes_principal/demos/Inicio';
import Contacto from './componentes_principal/demos/consultas';
import Alojamiento_Detalle from './componentes_principal/demos/alojamientoDetalles';
import Error from './componentes_principal/demos/error404';

//COMPONENTES UTILES
import Privacy from './componentes_principal/demos/PrivacyPolicy';
import Terms from './componentes_principal/demos/TermsOfService';

/* import Login from './componentes_principal/components/login_and_register/Login';
import Register from './componentes_principal/components/login_and_register/Register'; */

function App() {
  return (
    <>
      <Router>
        <Switch>

          {/* PAGINA PRINCIPAL */}
          <Route path='/elalgarrobo.com.ar/:path?' >

            <Switch>

              <Route path="/elalgarrobo.com.ar/terminos-y-condiciones" component={Terms} />

              <Route path="/elalgarrobo.com.ar/politica-de-privacidad" component={Privacy} />

              <Route path="/elalgarrobo.com.ar/alojamiento-detalle" component={Alojamiento_Detalle} />

              <Route path="/elalgarrobo.com.ar/consulta-y-contacto" component={Contacto} />

              <Route path="/elalgarrobo.com.ar/inicio" component={Inicio} />

              <Route component={Error} exact path='/elalgarrobo.com.ar/*' />
            </Switch>

          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
