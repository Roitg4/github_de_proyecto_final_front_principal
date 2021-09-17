import React from "react";
import "tailwindcss/dist/base.css";
import "./componentes_principal/styles/globalStyles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//MIS COMPONENTES_PRINCIPAL
import Inicio from './componentes_principal/demos/HotelTravelLandingPage';

function App() {
  return (
    <>
      <Router>
        <Switch>

          {/* PAGINA PRINCIPAL */}
          <Route path='/elalgarrobo.com.ar/:path?' >

            <Switch>
              <Route path="/elalgarrobo.com.ar/inicio" component={Inicio} />

              <Route component={() => (<div>404 Main El Algarrobo</div>)} exact path='/elalgarrobo.com.ar/*' />
            </Switch>

          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
