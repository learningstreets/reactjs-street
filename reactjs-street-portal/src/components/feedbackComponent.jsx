import {Component, React} from 'react';

// import the json data from json file
import  FeedBackData from '../assets/constantFiles/feedbackData.json';

export class FeedBackComponent extends Component{
  
    render(){
        const _template = (
            <div className="feedback-container"> 
               <center> <h2> <u> Thank you so much for your feedback </u> </h2><br /> </center> 
                {/* here we have to assign key to uniquely identification of the tag */}
                {FeedBackData.feedbackData.map(feedData => 
                <div className="feedback-div row col-md-12"  key={ feedData.feedbackCount}> 
                    <div className="col-md-2 feedback-heading"> {feedData.userName} </div>  
                    <div className="col-md-10 feedback-description"> {feedData.userFeedback}</div>
                </div>
                )}
            </div>
         )
         return _template;
    }
}