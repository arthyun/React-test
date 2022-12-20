import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../config/Page-route';

function Content() {
return (
    <Switch>
    {
        routes.map((el, i) => (
            <Route key={i} path={el.path} exact={el.exact} component={el.component} />))
    }
    </Switch>      
);
} 

export default Content;