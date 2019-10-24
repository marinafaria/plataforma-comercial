import React, { useEffect, useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import api from '../services/api';
import StarIcon from '@material-ui/icons/Star';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function Main() {
    const [leads, setLeads] = useState([]);
    useEffect(() => {
        async function loadLeads() {
            const response = await api.get('/leads', {
            })
            setLeads(response.data);
        }
        loadLeads();
    });

    return(
        <div className="main-container">
        <AppBar position="static">
          <Tabs>
            <Link to="/"><Tab label="Cadastro de Lead"/></Link>
            <Tab label="Responsável" />
            <Tab label="Lista de Leads" />
            <Tab label="Resultados" />
          </Tabs>
        </AppBar>

            // <Link to="/">
            //     <button>Cadastro de Lead</button>
            // </Link>
            <ul>
                {leads.map(lead => ( /* map:serve pra percorrer um array e retornar algo */
                    <li key={lead._id}>
                        <img src={lead.avatar} alt={lead.name} />
                        <footer>
                            <strong>{lead.name}</strong>
                            <p className="status-badge">{lead.status}</p>
                            { (lead.returnDate != null)
                                    ? <p className="status-badge">{lead.returnDate}</p>
                                    : ''
                                }
                            <p>{lead._id}</p>
                            <p>{lead.details}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button">
                                Qualificação: <p>
                                { lead.decisionMaker
                                    ? <StarIcon />
                                    : ''
                                }
                                { (lead.numberOfEmployees < 10)
                                    ? <StarIcon />
                                    : ''
                                }
                                { lead.knowsAboutCPE
                                    ? <StarIcon />
                                    : ''
                                }
                                </p>
                            </button>
                                <button>Editar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
