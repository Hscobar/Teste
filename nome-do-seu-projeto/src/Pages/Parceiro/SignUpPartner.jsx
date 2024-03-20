import React from "react";
import Header from '../../components/header/header.jsx';
import FormParceiro from './ComponenteAlteradosParaPagina/formParceiro/formParceiro.jsx';
import Footer from './ComponenteAlteradosParaPagina/footer/footer.jsx';
import Buttons from "./ComponenteAlteradosParaPagina/buttonsPartnerUser/buttons.jsx"

function SignUpPartner()
{
    return(
        <div>
            <Header/>
            <Buttons/>
            <FormParceiro/>
            <Footer/>
        </div>
    );
}

export default SignUpPartner;