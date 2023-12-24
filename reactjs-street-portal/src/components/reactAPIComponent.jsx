
import React from 'react';

import { googlePublicAPI } from '../assets/constantFiles/appConstants';

export class ReactAPIComponent extends React.Component{

    state= {
         apiData :{
            baseUrl : "",
            description: "",
            ownerName:"",
            title:""
          }
    }
     

render(){
  
    
    // const {apiData} = this.state;
    return(
    <div> 

        <h1> Here we will create API calls</h1> <br />
        <h2> Get call alone can be done via below feature but to intercepts http requests we have to use 
            another package will discuss a bit later. Let's have a look into basic Get operation as below:</h2> <br />
        {/* {apiData.map(_data => 
            <div className="col-md-2" key={_data._id}> 
                <strong> User Id:</strong>  {_data.userID} <br/> 
                <strong> User Name:</strong>  {_data.userName} <br/>  
                <strong> User Contact:</strong>  {_data.userContact} <br/> <br/> 
            </div>
        )} */}

        <br />
        <button type="button" onClick={this.callPublicAPI}> Call Public API </button>
        <h4> Once you clicked on above button check the console menu for more info</h4>

        <h5> Basic Info</h5>
        <h6><strong>OwnerName: </strong> {this.state.apiData.ownerName}</h6>
        <h6><strong>Title: </strong> {this.state.apiData.title}</h6>
        <h6><strong>Base Url: </strong> {this.state.apiData.baseUrl}</h6>
        <h6><strong>Description: </strong> {this.state.apiData.description}</h6>

        <br /><br />
        <h3> PUT/POST/PATCH Calls</h3>
        <h4> To do various HTTP calls we have to do with 'Axios' package: Let's installed it with 'npm install Axios'</h4> <br />


    </div>

    )
}



// componentDidMount(){

    
//     fetch('http://localhost:3005/api/users')
//     .then(res => res.json())
//     .then((_data) => {
//         console.log(_data);
//         this.setState({apiData:_data});
//     },
//     (error) => {
//         console.log("Some error has occurred");
//     });
// }

// method will call the public api
callPublicAPI =() => {
    
    fetch(googlePublicAPI)
    .then(res => res.json())
    .then((_data) => {
        this.setState({apiData: _data}) ;
            console.log("Google Public API ", _data);
            console.log("APp Data",    this.state.apiData )

    });
 
}

}



