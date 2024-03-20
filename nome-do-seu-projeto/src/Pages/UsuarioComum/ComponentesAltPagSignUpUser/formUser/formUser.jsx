

import React from "react";
import './formUser.css';

function Form()
{
    return(
        
       <div>
        

            {/*Centraliza o formulário no centro da tela.*/}
            <div id="form"> 
            
                <div id="formTitle">
                    <span>Cadastro</span>
                </div>
                {/*Contém todo o formulário e seus campos*/}
                <form id="formContainer">

                {/*Campo das informações pessoais*/}
                <fieldset className = "fieldSetConfig">
                            {/*NOME COMPLETO*/}
                            <div className="fieldType1">
                                <span className="nameField">Nome Completo</span>
                                <input 
                                    type="text" 
                                    size={43} 
                                    required/>
                            </div>

                            {/*DATA DE NASCIMENTO*/}
                            <div className="fieldType1">
                                <span className="nameField">Data de Nascimento</span>
                                <input 
                                type="date"
                                size={6}
                                required/>
                            </div> 

                            {/*CPF*/}
                            <div className="fieldType2">
                                <span className="nameField">CPF</span>
                                <input 
                                    type="text"
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"  
                                    maxLength="14" 
                                    required
                                    size={15}/> 
                            </div>
                            
                            {/*EMAIL*/}
                            <div className="fieldType2">
                                <span className="nameField">Email</span>
                                <input 
                                    type="email"
                                    required
                                    size={29}/>
                            </div>
                        
                    </fieldset>
                    
                    {/*CAMPO DA SENHA*/}
                    <fieldset className="fieldSetConfig">

                        {/*SENHA*/}
                        <div className="fieldType1">
                            <span className="nameField">Senha</span>
                            <input 
                            type="password"
                            required
                            size={27}/>
                        </div>

                        {/*CONFIRMAR SENHA*/}
                        <div className="fieldType1">
                            <span className="nameField">Reescreva a Senha</span>
                            <input 
                            type="password"
                            required
                            size={28}
                            />
                        </div>

                        {/*Orientação de preenchimento de senha*/}
                        <div id="passwordRequery">
                            <span>*Mínimo de 8 caracteres</span>
                            <span>*Letras minusculas</span>
                            <span>*Letras Maiúsculas</span>
                            <span>*Números</span>
                            <span>*Caracteres especiais</span>
                        </div>

                        <div id="buttonsForm">
                            <button id="cadastradoButton">JÁ POSSUO CADASTRO</button>
                            <button id="cadastrarButton">CADASTRAR</button>
                        </div>

                    </fieldset>

            </form>

        </div>

         {/*Abrindo um espaço entre o footer e o formulário.*/}
        <div id="beforeFooter">

        </div>
       </div> 
    

    );
}


export default Form;