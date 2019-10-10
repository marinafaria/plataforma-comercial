import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './edit.css';

export default function Edit( { match } ) {
    const [lead, setLead] = useState([])
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

            console.log(response)
            setLead(response.data);
        }
        loadLead();
    }, [match.params._id]); 

    return(
        <div className="edit-container">
            <h1>Editar Lead</h1>
            <form>
                <label for="name">Nome</label>
                <input id="name" type="text" value={lead.name} />
                <label for="email">E-mail</label>
                <input id="email" type="text" value={lead.email} />
                <label for="phone">Telefone</label>
                <input id="phone" type="text" value={lead.phone} />
                <label for="projectArea">Área do Portfólio</label>
                <select 
                    value= { lead.projectArea }
                    name="projectArea"
                >
                    <option value={lead.projectArea} selected>{ lead.projectArea }</option>
                    {portfolio.map(portfolio => (
                        <option key={portfolio.id} value={portfolio.name}>
                            {portfolio.name}
                        </option>
                    ))}
                </select>	
                <label for="howItArrived">Como chegou</label>
                <select 
                    value= { lead.howItArrived }
                    name="howItArrived"
                >
                    <option value={ lead.howItArrived } selected>{ lead.howItArrived }</option>
                    {demandChannels.map(demandChannels => (
                        <option key={demandChannels.id} value={demandChannels.name}>
                            {demandChannels.name}
                        </option>
                    ))}
                </select>
                <label for="decisionMaker">Tomador de decisão?</label>
                <select 
                    value= { lead.decisionMaker }
                    name="decisionMaker"
                >
                    <option value= {lead.decisionMaker} selected>{ lead.decisionMaker }</option>
                    {boolean.map(boolean => (
                        <option key={boolean.id} value={boolean.id}>
                            {boolean.name}
                        </option>
                    ))}
                </select>
                <label for="knowAboutCPE">Conhece MEJ, EJ...?</label>
                <select 
                    value= { lead.knowsAboutCPE }
                    name="knowsAboutCPE"
                >
                    <option value={ lead.knowsAboutCPE } selected>{ lead.knowsAboutCPE }</option>
                    {boolean.map(boolean => (
                        <option key={boolean.id} value={boolean.id}>
                            {boolean.name}
                        </option>
                    ))}
                </select>
                {/* <label for="segment">Segmento</label>
                <input name="segment" type="text" value={ lead.segment }> { lead.segment } </input> */}
            </form>
        </div>
        );
}