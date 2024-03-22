

import React, { useState, useEffect } from "react";
import './formUser.css';

function isValidCPF(cpf) {
    // Remover caracteres não numéricos
    const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
    return cpfRegex.test(cpf);
}

function isValidEmail(email){
    // Expressão regular para validar e-mail simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function CadastroRealizado()
{
    return alert("Seu cadastro foi enviado com sucesso. Por favor aguarde a validação da conta via o e-mail cadastrado!");
}

function FormUser()
{
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [cpfValido, setCpfValido] = useState(true);
    const [emailValido, setEmailValido] = useState(true);
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    useEffect(() => {
        setCpfValido(isValidCPF(cpf));
    }, [cpf]);

    useEffect(() => {
        setEmailValido(isValidEmail(email));
    }, [email]);


    const handleCpfChange = (event) => {
        setCpf(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return(
        
       <div>
        

            {/*Centraliza o formulário no centro da tela.*/}
            <div id="form"> 
            
                <div id="formTitle">
                    <span>Cadastro</span>
                </div>
                {/*Contém todo o formulário e seus campos*/}
                <form id="formContainer" onSubmit={CadastroRealizado}>

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
                            <div className="fieldTypeEspecial, textCentralize">
                                <div id="centralizeCpfField">
                                    <span className="nameField">CPF</span>
                                    <div className="especialCase">
                                        <input 
                                            type="text"
                                            pattern="^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$"   
                                            maxLength="14" 
                                            required
                                            value={cpf}
                                            onChange={handleCpfChange}
                                            size={15}
                                            placeholder="123.123.123-12"/> 
                                        <span className="invalidInput">
                                            {cpf !== '' && !cpfValido && <span className="error">CPF inválido</span>}
                                        </span>  
                                    </div>
                                </div>  
                            </div>
                            
                            {/*EMAIL*/}
                            <div className="fieldType2">
                                <span className="nameField">Email</span>
                                <input 
                                    type="email"
                                    required
                                    size={29}
                                    value={email}
                                    onChange={handleEmailChange}/>
                                 <span className="invalidInput">
                                    {email !== '' && !emailValido && <span className="error">Email inválido</span>}
                                 </span>
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
                            size={27}
                            value={confirmarSenha} 
                            onChange={(e) => setConfirmarSenha(e.target.value)} 
                            minLength={8}/>
                        </div>

                        {/*CONFIRMAR SENHA*/}
                        <div className="fieldType1">
                            <span className="nameField">Reescreva a Senha</span>
                            <input 
                            type="password"
                            required
                            size={28}
                            value={senha} 
                            onChange={(e) =>{ setSenha(e.target.value);}}
                            minLength={8}/>
                            <span>
                                {/* Exibir mensagem de sucesso se as senhas forem compatíveis */}
                                {(senha !== '' && confirmarSenha !== '') && senha === confirmarSenha && (
                                <span className="validInput">As senhas são compatíveis!</span>
                                )}
                            </span>
                            
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
                            <button id="cadastrarButton" type="submit" >CADASTRAR</button>
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


export default FormUser;