import React, { useEffect, useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function Main() {
    const [leads, setLeads] = useState([]);
    useEffect(() => {
        async function loadLeads() {
            const response = await api.get('/leads', {
            })
            setLeads(response.data);
        }
        loadLeads();
    }, 
    // [match.params.id]
    );  
    
    return(
        <div className="main-container">
            <Link to="/">
                <button>Cadastro de Lead</button>
            </Link> 
            <ul>
                {leads.map(lead => ( /* map:serve pra percorrer um array e retornar algo */
                    <li key={lead._id}>
                        <img src={lead.avatar} alt={lead.name} />
                        <footer>
                            <strong>{lead.name}</strong>
                            <p>{lead.status}</p>
                            <p>{lead.details}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button">
                                Qualificação:
                            </button>
                            <button type="button">
                                Editar
                            </button>
                        </div>
                    </li>
                ))} 
            </ul>  
        </div>
    );
}