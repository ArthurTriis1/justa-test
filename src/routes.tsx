import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import NotFound from './pages/NotFound';

const Routes = () => {
    return (

            <Switch>
                <Route path='/' exact={true} component={HomePage} />
                <Route path='/movie/:id' exact={true} component={MoviePage} />
                <Route component={NotFound} />
            </Switch>
        
    )
}

export default Routes