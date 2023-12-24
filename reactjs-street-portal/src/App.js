import React, { Component } from 'react';
import {AppRoute} from './Route';
import AppFooterComponent from './components/appFooterComponent';
import {AppHeaderComponent} from './components/appHeaderComponent';


class App extends Component{

  render() 
  {
    
    return (
      <div>
          <div id="thisSiteContentDiv"> 

              {/* Header: Displaying app header */}
            <AppHeaderComponent /> 
            
             {/* Route Content: Displaying app header */}
            <div className="col-md-12 pd0">
                <div className="router-container"> 
                  {/* here the content of other page will get displayed */}
                  <AppRoute />
                </div>
            </div> 
          
            {/* Footer: displaying app footer */}
            <AppFooterComponent className="content-width" /> 
          </div>
         
      </div>
         
      ); 
  }
}
 export default App;



