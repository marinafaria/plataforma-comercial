import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './pages/form';
import Main from './pages/main';
import Edit from './pages/edit';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={ Form } />
            <Route path="/leads" exact component={ Main } /> 
            <Route path="/edit/:id" component={ Edit } /> 
        </BrowserRouter>
    );
}