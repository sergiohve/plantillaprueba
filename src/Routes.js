import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ListadoVehiculo from "./Views/ListadoVehiculo";


import VistaExtra from "./Views/VistaExtra";



const Routes = () => {
    return (
           <BrowserRouter>
            <Route path="/" exact component={ListadoVehiculo} />
             <Route path="/vistaextra" exact component={VistaExtra} />
          </BrowserRouter>
    );
};

export default Routes;
                                                                                                                                         