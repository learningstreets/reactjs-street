import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { HomeComponent } from './components/homeComponent';
import { ReactDocsComponent } from './components/reactDocsComponent';
 import  PageNotFoundComponent  from './components/pageNotFoundComponent';
import { routePathPrefix } from './assets/constantFiles/appConstants';

export const AppRoute= () => {
    return (
      <Router>
        <Switch>   
            {/* default component */}
            {/* <Route exact path="/"   path='/ReactJsStreet' component={HomeComponent} />   */}
            {/* <Route exact  path='/ReactJsStreet' component={HomeComponent} />   */}

            <Route exact  path='/ReactJsStreet'>
                 <Redirect to={routePathPrefix + 'ReactDocs/GettingStarted'} />
            </Route>
  
            {/* ReactDocsDocs component */}
            <Route path={routePathPrefix + 'ReactDocs'} component={ReactDocsComponent} /> 

              {/* Page Not Found component */}
             <Route  path='*' component={PageNotFoundComponent} />   
        </Switch>
  </Router>
     
    );
}
