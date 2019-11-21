import React, { useEffect, useState } from 'react';
import './auth.css';
import api from '../services/api';

export default function Auth() {

    return(
        <div className="auth-container">
            <form>
                <input 
                    type="text" 
                    placeholder="usuario" />
                <input 
                    type="password" 
                    placeholder="senha" />
            </form>
        </div>
    );
}