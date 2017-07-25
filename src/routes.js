import React, {PureComponent} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Nav, Main, List, Form} from './components';


class routes extends PureComponent{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={Nav}>
                    <IndexRoute component={Main} />
                    <Route path='form' component={Form} />
                    <Route path='about' component={Form} />
                </Route>
            </Router>
        );
    }
}

export default routes;
