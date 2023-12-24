import {Component, React} from 'react';
import { bestPracticeContent } from '../assets/constantFiles/appDataConstants';

export class BestCodingPracticesComponent extends Component {

    render(){
        
         const _template = (

            <div className="card-container row col-md-12"> 
        
                {/* here we have to assign key to uniquely identification of the tag */}
                {bestPracticeContent.map(content => 
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