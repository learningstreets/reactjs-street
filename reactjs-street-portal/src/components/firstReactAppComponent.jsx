import {Component,React} from 'react';

import folderAndFileStructureImage from '../assets/images/folderAndFileStructure.png';
import createReactAppCommand from '../assets/images/createReactAppCommand.png';
import myFirstReactAppNpmStartCommand from '../assets/images/myFirstReactAppNpmStartCommand.png';
import myFirstReactAppUI from  '../assets/images/myFirstReactAppUI.png';
 
 
export class FirstReactAppComponent extends Component{

    render(){

        return(
      
        <div>  
            <div>

                <h4 className="content-heading"> Prerequisites </h4> 
                <p> Before stepping into React there are some prerequisites that needs to be done prior.</p> 

                <p><span className="code-cursor"> &#187; </span> <b> NodeJs and npm :  </b>
                 Basically we need only <code> npm (Node Package Manager)</code> or any other package manager. NodeJs is required when we do work with Server side coding.
                 But no harm to install NodeJs as this contains NPM too which we are actually looking for.
                </p>
                <p>  Check out this link to get more about nodejs and installation setup :
                 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> nodejs</a> <br />
                </p>

                <p>  <code> npm (Node Package Manager)</code> is repository for react packages. These packages helps to build the React Application.</p>
                
                
                <p>  <span className="code-cursor"> &#187; </span> <b> IDE (Integrated Development Environment) :  </b> We can use any IDE which supports reactJs development. Here we are using light weighted IDE <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code</a>.
                <br /><small> (Once you install the VS Code, do add these extensions: Simple React Snippets, Prettier - Code formatter) </small>
                 </p> 

                <p>  <span className="code-cursor"> &#187; </span> <b> Code Repository :  </b> Although it's an optional but we would recommend to use it. Any code repo will work with VS Code. 
                     Code repositories literally help us to do track the work and secure the storage damage.
                 </p>
                <br /> 
                
                
                <h4 className="content-heading"> Let's begin with 'First React Application' </h4> 
                
                <p> Once you have done all the prerequisites then we are good to start with creating our 'First React Application'. <br />
                <strong className="theme-color-text">  As we are new in the React so we will use one helper npm package which will help us to create a basic React Application along with all the required elements. 
                Once will get to know about the basic requirements of React App then we should be able to create it without help of this package.
                </strong>
                </p>

                <p> <span className="code-cursor"> &#187; </span> Let's install <a href="https://www.npmjs.com/package/create-react-app" target="_blank" rel="noreferrer"> create-react-app</a>  package : 
                  Simply open cmd and type - <code> npm install -g create-react-app</code> 
                  <small> (visit for any guidance : <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noreferrer"> create-a-new-react-app</a>) </small>
                </p>

                <p>  <span className="code-cursor"> &#187; </span>  Once above package is installed we are good to start with our first application.
                Go to the directory where you want to create the new application and open the cmd for the same directory and execute below commands one by one:
                <br /> <br />
                  <span>
                    <code> create-react-app my-first-react-app</code>  <br />
                    <code> cd my-first-react-app</code>  <br />
                    <code> npm start</code>  <br /> <br />
                  </span>

                  <span className="code-cursor"> &#187; </span>  That is it! Now newly created react app (my-first-react-app) would start running on the 3000 port. <a href="http://localhost:3000" target="_blank" rel="noreferrer"> localhost:3000</a> 
                 </p>
               

                <h5 className="content-heading"> Executing Commands: </h5> 

                Creating 'my-first-react-app' app using <code> create-react-app </code> package:  <br /> 
                <img src={createReactAppCommand} width="60%" alt="Create React App Command" /> <br /> <br /> 

                Running 'my-first-react-app' app using <code> npm start </code> <br /> 
                <img src={myFirstReactAppNpmStartCommand} width="60%" alt="My First React App Npm Start Command" />
                
                <br /> <br /> 
                <h5 className="content-heading"> App UI: <a href="http://localhost:3000" target="_blank" rel="noreferrer"> localhost:3000</a>  </h5> 
                <img src={myFirstReactAppUI} width="60%" alt="My First React App UI" /> 
                

                <br /> <br /> <br /> 
                <h4 className="content-heading"> Useful Commands </h4> 
                <p>  
                  <span className="code-cursor"> &#187; </span> 
                  <code> node -v </code> and  <code> npm -v </code> :
                  To check the version of installed node and npm on your machine. 

                  <br />
                  <span className="code-cursor"> &#187; </span> 
                  <code> create-react-app my-first-react-app</code> :
                  This command will create the new application with the name 'my-first-react-app' on the executed directory.

                  <br />
                  <span className="code-cursor"> &#187; </span> 
                  <code> npm install</code> :
                  This command helps to install all the packages on the executed directory. It does install all those packages which are mentioned in the respective <code> package.json </code> file.

                  <br />
                  <span className="code-cursor"> &#187; </span> 
                  <code> npm start</code> :
                  To run the application we use this command and execute on the solution root directory.
                </p> 
 
                <i>  <b> Note : </b> We can also create ReactJs app without  <code> create-react-app </code>  package and for that we have to manually add all the required files.</i>
                <br />  <br />  <br /> 
            </div>

          
            <h4 className="content-heading"> File and Folder Structure</h4> 
            <p> Once you create an app with the help of  <code> create-react-app </code>  package and open that folder in IDE you will see this file and folder structure. 
              <br /><small>  (This screenshot also includes some custom folders for better code management.) </small>
            </p>
          <div className="row col-md-12"> 
            <div className="col-md-4">
              <img className="folderAndFileStructureImage" src={folderAndFileStructureImage} alt="folder and file structure" />
              </div>
            <div className="col-md-8 "> 
               
                <div> 
                  <span className="code-cursor"> &#187; </span>
                  <b className="theme-color-text"> build: </b> This is predefined folder which holds various combined bundles for all js/html/css files.
                  This folder gets created once we execute <code>npm build / npm run build / npm run deploy</code> etc. The generated code from build  command 
                  gets saved into this build folder and for production deployment we can use this folder. <br />  
                  
                  <span className="code-cursor"> &#187; </span>
                  <b className="theme-color-text"> node_modules: </b> This is the folder which holds all the packages. This folder gets created once we run 
                  <code> npm install</code> command. As you would be knowing that <code> npm install</code> does install the all packages/references which are 
                  mentioned in the <code> package.json</code> file of the solution and stores package's data into this node_modules folder. <br />    

                  <span className="code-cursor"> &#187; </span>    
                  <b className="theme-color-text"> public: </b>  This is being used to store meta data for the application along with the main 
                  <code>index.html</code> file.  <br />
                  
                  <div className="pd2rem-left"> 
                    <span className="code-cursor"> &#187; </span>    
                    <b> favicon.ico: </b>  This is the icon file which gets renders in left side of title bar of the browser. We can change it with custom icon file.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> index.html: </b>  This is the main file which holds all the nested pages inside it. 
                    The <b>Single Page Application</b> concept begins with this file. In this file we do have one container (div with id "root"), where 
                    all the react components gets rendered with the help of routing.   <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> manifest.json: </b>  manifest.json provides metadata for the application.  <br />
                  </div>

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> src: </b>  As name says src is a main root folder we can say where all the other components resides. 
                  Our whole application resides inside this folder. <br /> 

                  <div className="pd2rem-left">  
                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> assets: </b>  This is the custom folder which we have created to hold some files for our application. 
                    Like images which are being used in this application.   <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> components: </b>  This is also a custom folder which holds the all logical components (class or function) for the application.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> App.js: </b>  This file gets created by default which works as a first component of React. We can customized it according to our need.   <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> App.css: </b>  This file holds the styles for respective .js file. We can also use external css files by importing them into components.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> App.test.js: </b>  Test cases file for <code>App.js</code> file. Like this we can create many test cases as per our logic and component.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> index.css: </b>  We can use this file as main css file for the application. All defined classes would be accessible 
                    across all the application as this being imported at root level(index.js). <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> index.js: </b>  This file helps to render the content/element into the html element("root") with the help of 
                    <code> ReactDOM.render()</code>.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> logo.svg: </b>  This is the logo of your application.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> reportWebVitals.js: </b>  This is the built-in tool for measuring the real life performance of our application.   <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> Route.js: </b>  Web application needs routing to navigate from one page to another and to achieve 
                    this we should create some configuration such that we land onto the right place. For the same purpose we are using this file to config all the path and destination.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> setupTests.js: </b>  We do get <code> Jest </code> framework to test our application and to get it setup this file helps to achieve this.  <br />
                  </div>

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> .gitignore: </b>  Most popular file while working with code repositories. It helps to avoid 
                  unnecessary files/folder from being checked in.  <br />              

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> package.json: </b>  <code>React</code> uses packages to build the application. This file work as a entry point 
                  of those packages and helps to get it installed via <code>npm install</code> for our application.  <br />

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> package-lock.json: </b>  This file holds the drill down details for the all packages.  <br />

                  <span className="code-cursor"> &#187; </span>   
                  <b> README.md: </b>  If we want to keep some instructions or a basic info about application then we can use this file to do so. <br />
                  
                  
                </div>
            
            </div>
        
          </div>
        
        </div>
        )
    }
}