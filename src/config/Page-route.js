import React from 'react';
import { Redirect } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const routes = [
    {
        path: '/react/',
        exact:true,
        component: () => <Redirect to="/react/Home" />
    }, 
    {
        path: '/react/Home',
        component: () => <Home />
    },
    {
        path: '/react/About',
        component: () => <About />
    },
    {
        path: '/react/Contact',
        component: () => <Contact />
    }
];

export default routes;