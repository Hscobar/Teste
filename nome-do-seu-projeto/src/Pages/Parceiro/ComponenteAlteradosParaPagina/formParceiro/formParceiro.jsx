import React, { useState, useEffect } from "react";
import './formParceiro.css';

import facebookRoxo from '../../../../assets/facebookRoxo.svg'
import instagramRoxo from '../../../../assets/instagramRoxo.svg'

function isValidCNPJ (cnpj){
    // formato - XX.XXX.XXX/XXXX-XX ou apenas numeros
    // Expressão regular para validar CNPJ
    const cnpjRegex = /^(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/;
    return cnpjRegex.test(cnpj);
}

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

function isValidTelefone (telefone){
    // Expressão regular para validar telefone brasileiro
    // Aceita números no formato (XX) XXXXX-XXXX ou XXXXXXXXXX
    const telefoneRegex = /^(?:\(\d{2}\) \d{5}-\d{4}|\d{11})$/;
    return telefoneRegex.test(telefone);
}

function CadastroRealizado()
{
    return alert("Seu cadastro foi enviado com sucesso. Por favor aguarde a validação da conta via o e-mail cadastrado!");
}

function FormPartner()
{
    const [cpf, setCpf] = useState('');
    const [mei, setMei] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpfValido, setCpfValido] = useState(true);
    const [meiValido, setMeiValido] = useState(true);
    const [emailValido, setEmailValido] = useState(true);
    const [telefoneValido, setTelefoneValido] = useState(true);
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    
    useEffect(() => {
        setCpfValido(isValidCPF(cpf));
    }, [cpf]);

    useEffect(() => {
        setMeiValido(isValidCNPJ(mei));
    }, [mei]);

    useEffect(() => {
        setEmailValido(isValidEmail(email));
    }, [email]);

    useEffect(() => {
        setTelefoneValido(isValidTelefone(telefone));
    }, [telefone]);

    const handleCpfChange = (event) => {
        setCpf(event.target.value);
    };

    const handleMeiChange = (event) => {
        setMei(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleTelefoneChange = (event) => {
        setTelefone(event.target.value);
    };

    return(
        
       <div>
        

            {/*Centraliza o formulário no centro da tela.*/}
            <div id="form"> 
            
                <div id="formTitle">
                    <span>Cadastro Parceiro</span>
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
                                            size={22}
                                            placeholder="123.123.123-12"/> 
                                        <span className="invalidInput">
                                            {cpf !== '' && !cpfValido && <span className="error">CPF inválido</span>}
                                        </span>
                                    </div>
                                </div>
                            </div>
                    
                            {/*MEI*/}
                            <div className="optionalField">
                                <span className="nameField">MEI</span>
                                <div id="inputOptional">
                                    <input 
                                        type="text"  
                                        pattern="^(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$" 
                                        maxLength="18"
                                        value={mei}
                                        onChange={handleMeiChange}
                                        placeholder="12.345.678/0001-90"
                                        size={23}/>
                                    <span className="optional">Não é obrigatório</span>
                                    <span className="invalidInput">
                                        {mei !== '' && !meiValido && <span className="error">MEI inválido</span>}
                                    </span>
                                </div>
                            </div>
                        
                    </fieldset>
                

                    {/*Campos da localização do usuário*/}
                    <span id="alertLocationField">*Insira o endereo do seu estabelecimento, caso não tenha um estabelecumento comercial complete as informações com seu endereço privado.</span>
                    <fieldset className = "fieldSetConfig">
                        {/*UF*/}
                        <div className="fieldType2">
                            <span className="nameField">UF</span>
                            <input 
                            type="text"
                            required
                            size={4}/>
                        </div>

                        {/*CIDADE*/}
                        <div className="fieldType2">
                            <span className="nameField">Cidade</span>
                            <input 
                            type="text"
                            required
                            size={12}/>
                        </div>

                        {/*BAIRRO*/}
                        <div className="fieldType2">
                            <span className="nameField">Bairro</span>
                            <input 
                            type="text"
                            required
                            size={12}/>
                        </div>
                        
                        {/*LOGADOURO*/}
                        <div className="fieldType2">
                            <span className="nameField">Logadouro</span>
                            <input 
                            type="text"
                            required
                            size={34}/>
                        </div>

                        {/*NÚMERO DA CASA OU APARTAMENTO*/}
                        <div className="fieldType2">
                            <span className="nameField">N°</span>
                            <input 
                            type="number"
                            required
                            size={6}
                            max={99999}
                            min={0}/>
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
                            value={confirmarSenha} 
                            onChange={(e) => setConfirmarSenha(e.target.value)} 
                            minLength={8}
                            size={27}/>
                        </div>

                        {/*CONFIRMAR SENHA*/}
                        <div className="fieldType1">
                            <span className="nameField">Reescreva a Senha</span>
                            <input 
                                type="password"
                                required
                                value={senha} 
                                onChange={(e) =>{ setSenha(e.target.value);}}
                                minLength={8}
                                size={27.5}/>
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

                    </fieldset>

                    {/*CAMPO PROFISSIONAL*/}
                    <fieldset className = "fieldSetConfig">

                        {/*NICHO*/}
                        <div className="fieldType1">
                            <span className="nameField">Qual nicho seu de trabalho?</span>
                            <input 
                            type="text"
                            required
                            size={10}/>
                        </div>
                        
                        {/*MODALIDADE*/}
                        <div id="radioContainer">

                            <span className="nameField">Modalidade do serviço</span> <br/>

                            <div id="fieldRadio">
                        
                                <div className="radioOption">
                                    <input type="radio" name="modalidade"/> <span>Presencial</span>
                                </div>
                                <div className="radioOption">
                                    <input type="radio" name="modalidade"/> <span>Online</span>
                                </div>
                                <div className="radioOption">
                                    <input type="radio" name="modalidade"/> <span>Híbrido</span>
                                </div>
                            </div>

                        </div>
                        
                        {/*NOME DO EMPREENDIMENOT*/}
                        <div className="fieldType1">
                            <span className="nameField">Nome do Empreendimento</span>
                            <input 
                                type="text"
                                required
                                size={30}/>
                        </div>

                        {/*SITE DO NEGÓCIO*/}
                        <div className="fieldType1">
                            <span className="nameField">Site do seu negócio</span>
                            <input 
                                type="text"
                                required
                                size={24}/>
                        </div>
                    </fieldset>

                    {/*PLANO ESCOLHIDO*/}
                    <div id="selectField">
                        <label htmlFor="membership">Plano Escolhido</label>
                        <select id="membership" required>
                            <option value="">Selecione</option>
                            <option value="free">Gratuito</option>
                            <option value="bronze">Bronze</option>
                            <option value="diamond">Diamante</option>
                        </select>
                    </div>

                
                
                {/*CAMPO FORMAS DE CONTATO*/} 
                <h1 id="contactFormsH1">FORMAS DE CONTATO</h1>
                <fieldset className = "fieldSetConfig" id="contactFormsFields">
                    
                {/*NÚMERO DE TELEFONE*/}
                    <div className="fieldType1">
                        <span className="nameField">Número de Telefone</span>
                        <input 
                            type="tel"
                            value={telefone}
                            onChange={handleTelefoneChange}
                            required
                            pattern="(?:\(\d{2}\) \d{5}-\d{4}|\d{11})"
                            placeholder="(11) 92222-3333 ou só números"
                            title="(11) 92222-3333 ou apenas números"
                            size={17}/>
                            <span className="invalidInput">
                                {telefone !== '' && !telefoneValido && <span className="error">Telefone inválido</span>}
                            </span>
                            
                    </div>
                    
                    {/*EMAIL*/}
                    <div className="fieldType1">
                        <span className="nameField">Email</span>
                        <input 
                            type="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                            size={42.5}/>
                            <span className="invalidInput">
                                {email !== '' && !emailValido && <span className="error">Email inválido</span>}
                            </span>
                    </div>

                    {/*INSTAGRAM*/}
                    <div className="iconField">
                        <img src={instagramRoxo} alt="Icone do Instragram" />
                        <input 
                            type="text"
                            required
                            size={66}/>
                    </div>

                    {/*FACEBOOK*/}
                    <div className="iconField">
                        <img src={facebookRoxo} alt="Icone do facebook" />
                        <input 
                            type="text"
                            required
                            size={66}/>
                    </div>

                    <div id="buttonsForm">
                        <button id="cadastradoButton">JÁ POSSUO CADASTRO</button>
                        <button id="cadastrarButton" type="submit" onSubmit={CadastroRealizado}>CADASTRAR</button>
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

export default FormPartner;