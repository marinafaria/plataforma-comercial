import React, { useEffect, useState } from 'react';
import './index.css';
import moment from 'moment'
import 'moment/locale/pt-br'
import { Link } from 'react-router-dom';
import api from '../services/api';


export default function Index( history ) {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        async function loadLeads() {
            const response = await api.get('/index', {
            })
            setLeads(response.data);
        }
        loadLeads();
    });
    
    return(
        <div className="index-container">
            <h1>Lista de Leads</h1>
            <ul>
                {leads.map(lead => ( /* map:serve pra percorrer um array e retornar algo */
                    <li key={lead._id}>
                        <img src={lead.avatar} alt={lead.name} />
                        <footer>
                            <strong>{lead.name}</strong>
                            <p className="status-badge">{lead.status}</p>
                            { (lead.returnDate != null) 
                                    ? <p className="status-badge">{moment(lead.returnDate).calendar()}</p>
                                    : ''
                                }
                            <p>{lead.details}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button">
                                Qualificação: <p>
                                { lead.decisionMaker 
                                    ? 'i'
                                    : ''
                                }
                                { (lead.numberOfEmployees < 10)
                                    ? 'i'
                                    : ''
                                }
                                { lead.knowsAboutCPE
                                    ? 'i'
                                    : ''
                                }
                                </p>
                            </button>
                            <button>
                                <Link to={`/edit/${lead._id}`} className="index-link">
                                    Editar
                                </Link>
                            </button>
                        </div>
                    </li>
                ))} 
            </ul>  
        </div>
    );
}