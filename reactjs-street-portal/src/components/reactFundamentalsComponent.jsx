import {Component, React} from 'react';
import { reactFundamentalsContent } from '../assets/constantFiles/appDataConstants';

export class ReactFundamentalsComponent extends Component {

    render(){
        
         const _template = (

            <div className="card-container row col-md-12"> 
        
                {/* here we have to assign key to uniquely identification of the tag */}
                {reactFundamentalsContent.map(content => 
                <div className="card-div col-md-3"  key={content.Heading}> 
                    <div className="card-heading"> { content.Heading } </div> 
                    <div className="card-description"> { content.Description }</div>
                
                </div>
                )}
            
            </div>
         )
         
         return _template;
        
    }
}