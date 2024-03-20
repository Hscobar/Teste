import React from "react";
import "./buttons.css";

        
function GoSignUpPartner()
{
    window.location.href = '/SignUpPartner';
}

function GoSignUpUser()
{
    window.location.href = '/SignUpUser';
}

function ButtonsPartnerUser()
{
    return(
        // centralizando e botando fundo
        <div id="buttonCentralize">
            <button id="partnerButton" onClick={GoSignUpPartner}>PARCEIRO</button>
            <button id="userButton" onClick={GoSignUpUser}>USUÁRIO</button>
        </div>
    );
}

export default ButtonsPartnerUser;