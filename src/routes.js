import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './pages/form';
import Main from './pages/main';
import Edit from './pages/edit';
import Index from './pages/index';
import Auth from './pages/auth';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={ Auth } />
            <Route path="/new" component={ Form } />
            <Route path="/main" component={ Main } /> 
            <Route path="/leads" component={ Index } />
            <Route path={"/edit/:id"} component={ Edit } /> 
        </BrowserRouter>
    );
}