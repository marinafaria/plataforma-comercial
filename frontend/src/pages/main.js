import React, { useEffect, useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import api from '../services/api';
import moment from 'moment'
import 'moment/locale/pt-br'
import StarIcon from '@material-ui/icons/Star';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function Main( history ) {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        async function loadLeads() {
            const response = await api.get('/attentionLeads', {
            })
            setLeads(response.data);
        }
        loadLeads();
    }); 
    
    return(
        <div className="main-container">
            <AppBar>
            <Tabs className="Tab">
                <Link to="/"><Tab label="Cadastro de Lead" ClassName="NavTabs" /></Link>
                {/* <Tab label="Responsável" />
                <Tab label="Lista de Leads" />
                <Tab label="Resultados" />*/}
            </Tabs>
            </AppBar>
            <h1>Leads saindo do forno</h1>
            <ul>
                {leads.map(lead => (
                    <li key={lead._id}>
                        <img src={lead.avatar} alt={lead.name} />
                        <footer>
                            <strong>{lead.name}</strong>
                            <p className="status-badge">{lead.status}</p>
                            { (lead.returnDate != null) 
                                    ? <p className="status-badge">{moment(lead.returnDate).calendar()}</p>
                                    : ''
                                }
                            <p>oi</p>
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
                            <button>
                                <Link to={`/edit/${lead._id}`} className="main-link">
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