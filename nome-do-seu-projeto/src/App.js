

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPartner from "./Pages/Parceiro/SignUpPartner.jsx";
import SignUpUser from "./Pages/UsuarioComum/SignUpUser.jsx";

const App = () => {
   return(
     
        <Router>
          <Routes>
              <Route path="/SignUpUser" element={<SignUpUser />} />
              <Route path="/SignUpPartner" element={<SignUpPartner />} />
          </Routes>
      </Router>
   )
}

export default App;