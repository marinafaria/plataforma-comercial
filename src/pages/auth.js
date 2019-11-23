import React, { useState } from 'react';
import './auth.css';
import api from '../services/api';
import { Link } from 'react-router-dom';

export default function Auth( { history } ) {

    const [password, setPassword] = useState();

    // function handleInputChange(event) {
    //     event.persist();
    //     setPassword(
    //         event.target.name = event.target.value;
    //     )
    // }
    
    async function handleSubmit(event){
        try {
            event.preventDefault();
            if (password === "cpejr123"){
                history.push(`/main`);
            }
            else{
                history.push(`/`);
            }
        }
        catch(error){
            console.log('erro ao carregar a proxima pagina');
            console.log(error)
        }
    }

    return(
        <div className="auth-container">
            <form onSubmit={ handleSubmit }>
                <input 
                type="password"
                name="password"
                value= { password }
                onChange = {e => setPassword(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            {/* <Link to="/new" className="main-link">oi</Link> */}
        </div>
    );
}