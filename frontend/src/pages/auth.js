import React, { useEffect, useState } from 'react';
import './auth.css';
import api from '../services/api';
import { Link } from 'react-router-dom';

export default function Auth() {

    return(
        <div className="auth-container">
            <Link to="/new" className="main-link">oi</Link>
        </div>
    );
}