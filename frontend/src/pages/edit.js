import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './edit.css';

export default function Edit( { match } ) {
    const [values, setValues] = useState({});
    const id = match.params.id;

    const portfolio = [
        { id: 1, name: 'APP' },
        { id: 2, name: 'ELT' },
        { id: 3, name: 'FV' },
        { id: 4, name: 'PE' },
        { id: 5, name: 'WEB' },
      ];

    const demandChannels = [
        { id: 1, name: 'Desconhecido' },
        { id: 2, name: 'Google' },
        { id: 3, name: 'Instagram' },
        { id: 4, name: 'UFMG' },
        { id: 5, name: 'Cliente Antigo' },
        { id: 6, name: 'Indicação' },
        { id: 7, name: 'Prospecção ativa' },
        { id: 8, name: 'LinkedIn' },
        { id: 9, name: 'WhatsApp' },
        { id: 10, name: 'Facebook' },
    ];

    const boolean = [
        { id: true, name: 'Sim' },
        { id: false, name: 'Não' },
      ];

    useEffect(() => {
        async function loadLead() {
            const response = await api.put(`/update/${id}`);
            setValues(response.data);
        }
        loadLead();
    }, [match.params._id]); 

    function handleInputChange(event) {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event){
        try {
            event.preventDefault();
            const response = await api.post('/', { lead: values });
            // history.push(`/leads`);
        }
        catch(error){
            console.log('erro ao carregar a proxima pagina');
            console.log(error)
        }
    }

    return(
        <div className="edit-container">
            <h1>Editar Lead</h1>
            <form>
                <label for="name">Nome</label>
                <input 
                    id="name" 
                    type="text" 
                    defaultValue={values.name} 
                    onChange = {handleInputChange}   
                />
                <label for="email">E-mail</label>
                <input 
                    id="email" 
                    type="text" 
                    defaultValue={values.email} 
                    onChange = {handleInputChange}  
                />
                <label for="phone">Telefone</label>
                <input id="phone" type="text" defaultValue={values.phone} />
                <label for="projectArea">Área do Portfólio</label>
                <select 
                    defaultValue= { values.projectArea }
                    name="projectArea"
                >
                    <option defaultValue={values.projectArea} selected>{ values.projectArea }</option>
                    {portfolio.map(portfolio => (
                        <option key={portfolio.id} value={portfolio.name}>
                            {portfolio.name}
                        </option>
                    ))}
                </select>	
                <label for="howItArrived">Como chegou</label>
                <select 
                    defaultValue= { values.howItArrived }
                    name="howItArrived"
                >
                    <option value={ values.howItArrived } selected>{ values.howItArrived }</option>
                    {demandChannels.map(demandChannels => (
                        <option key={demandChannels.id} value={demandChannels.name}>
                            {demandChannels.name}
                        </option>
                    ))}
                </select>
                <label for="decisionMaker">Tomador de decisão?</label>
                <select 
                    defaultValue= { values.decisionMaker }
                    name="decisionMaker"
                >
                    <option value= {values.decisionMaker} selected>{ values.decisionMaker }</option>
                    {boolean.map(boolean => (
                        <option key={boolean.id} value={boolean.id}>
                            {boolean.name}
                        </option>
                    ))}
                </select>
                <label for="knowAboutCPE">Conhece MEJ, EJ...?</label>
                <select 
                    defaultValue= { values.knowsAboutCPE }
                    name="knowsAboutCPE"
                >
                    <option value={ values.knowsAboutCPE } selected>{ values.knowsAboutCPE }</option>
                    {boolean.map(boolean => (
                        <option key={boolean.id} value={boolean.id}>
                            {boolean.name}
                        </option>
                    ))}
                </select>
                <label for="segment">Segmento</label>
                {/* <input name="segment" type="text" defaultValye={ values.segment }> { values.segment } </input> */}
            </form>
        </div>
        );
}