import {Component, React} from 'react';

import helloWorld_Code from '../assets/images/helloWorld_Code.png';
import helloWorld_UI from '../assets/images/helloWorld_UI.png';
import customApp from '../assets/downloadFiles/custom-app.zip';


export class HelloWorldComponent extends Component {

render() {

    return(

    <div>
        <h4 className="content-heading"> Hello World Application </h4> 
        <p> We can not start anything without legendary <code> Hello World</code> application. So here we are;
        A simple React Application requires majorly below elements:   <br />  
        <span className="code-cursor"> &#187; </span>  One <code> .js </code> file which will contain the basic <code> React Component </code>which will help to render the data. <br />
        <span className="code-cursor"> &#187; </span>  Another elements is <code> .html </code> file which will contain the basic html elements along with that a place where we do render the <code> React Component</code>.
        </p> 
        <i>
            <b> Note</b> : Here we have created a custom application where we are just having required files/folders.
        </i>
        <br /> <br />
        <div><strong> Below is the example of basic <code>Hello World Application. </code></strong>  
        Here we just need only two files <code> index.js </code> and  <code> index.html </code> <br/>  
        <span className="code-cursor"> &#187; </span>   <code> index.html :</code> In this file we are having are metadata and one <code> div </code> with id="root"; we need this to render our content in it. <br />
        <span className="code-cursor"> &#187; </span>  <code> index.js :</code> In this file we are having basic structure of <code> React Elements</code>. Elaborating further:
                    <ul> 
                        <li>
                            We are importing <code> React </code> from 'react' package such that we can make this as  <code> React Compatible</code>
                        </li>
                        <li>
                            Importing <code> ReactDom </code> from 'react-dom' will help to create a <code> Document Object Model</code> which helps to render the content. 
                        </li>
                        <li>
                            Creating a constant with name <code> element </code> and assigning <code>  html content </code> along with <code> JavaScript elements</code>; called <code>JSX</code>.
                        </li>
                        <li>
                            Finally calling <code> ReactDOM.render() </code> method to tell the React that we want to render the passed <code> element </code> inside passed <code> elementId ("root") </code>.
                            As a result React will create a DOM for the passed parameters and display the content on browser. (Refer second screenshot)
                        </li>
                    </ul>
        </div>
        <div className="helloWorldPage"> 
        <div> 
            <img src={helloWorld_Code} alt="Hello World Code" /> 
        </div>
        
        <p><strong> Below is the UI of above code along with the inspection there we can see how DOM looks like:</strong> <br /> </p>
        <p> You can download the sample code from here:  &nbsp; 
        <a href={customApp} target="_blank" rel="noreferrer" download> 
            <i className="bi bi-download" /> 
        </a>  <br />
        <small>  (Kindly run <code>npm install</code> first to install all packages and then <code> npm start</code> to view the app on browser)  </small>
        </p>


        <div>  
            <img src={helloWorld_UI} alt="Hello World UI" /> 
        </div> 
        </div>
    </div> 


    ); 
 }
}
