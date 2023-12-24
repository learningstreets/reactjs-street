import {Component, React} from 'react';
import appStructure from '../assets/images/appStructure.png';
import appComponent from '../assets/images/appComponent.png';
import appRendering from '../assets/images/appRendering.png';

export class HowReactWorksComponent extends Component{

    
    render(){
        
        
        return (
            <div>
                <p>We all know that <code> React </code> is all about  <code> JavaScript </code>.
                 Hence it works like  <code> JavaScript </code> only but there are few things that need to understand here like: 
                 How the application flow goes?, What are our root files? etc. Let's have a look into these things:
                 <br /><br />
                 <i>
                   <b> Note</b> : All below content is just an overview of the terminology, later will learn more about it.  
                </i>
                <br />

                </p>


                <h5 className="content-heading"> Building Blocks of React Application</h5>  
                <p> What creates a complete React Application? Below is the basic blocks which helps to create a React Application: </p>
                <center> 
                    <img src={appStructure} width='60%' alt="App Structure" />
                </center>
                <br />
                <p>
                <span className="code-cursor"> &#187; </span>  <b> Components</b> : Components are the basic and major block of React Application. We can say in React everything is Component only.
                    We will learn more things about Components as we proceed further.
                    </p>
                <p>
                <span className="code-cursor"> &#187; </span>  <b> Routing</b> : A web application is nothing without a routing. Routing helps us to navigate from one page to another.
                    </p>
                <p>
                <span className="code-cursor"> &#187; </span> <b> Metadata</b> : The necessary data which is required to build the application such as logo, app name, version etc. those we can store into the metadata file.
                    </p>
                 
                 
                <br />

                <h5 className="content-heading"> Components : The Basic Pillars</h5>  
                <p> No doubt in that, a Component is a major pillar of React Application. The logics which we do create to do some task wrapped as a Component only.
                    There are two types of Component in React as follows:  </p>
                <center> 
                    <img src={appComponent} width='60%' alt="App Structure" />
                </center>
                <br />
                <p>
                <span className="code-cursor"> &#187; </span>  <b> Function Component</b> : A Function Component holds the logic. These type of Component are very light weight and easy to implement as these are simple functions. 
                    We can create many function components to define some logic or a view also. As these are simple functions hence we can't use state management here using <code> state </code>   and <code> props </code>. 
                    Indeed there is very useful feature in React and that is <code> Hooks </code>; which works with Function Components only. Will learn all these things and terminology as we will go further.  
                    </p>
                <p>
                <span className="code-cursor"> &#187; </span>  <b> Class Component</b> : As name says, we can create a class here and that will bring <code> Object Oriented Programming </code> for us. Class Component could be more complex and helps to manage the state as well
                    but as thumb rule is we should keep our Component very light.
                 
                </p>

                <br />

                <h5 className="content-heading"> Rendering : How element gets viewed on UI?</h5>  
                <p> So far we learned about the basic things in React, also we saw the logic and view should be as Component but how all these things get rendered on UI?
                    To understand the working let's have a look into the below figure:  </p>
                <center> 
                    <img src={appRendering} width='60%' alt="App Structure" />
                </center>
                <br />
                <p>
                <span className="code-cursor"> &#187; </span>   <b> Rendering Component</b> : In the <code> index.js </code> file we use <code> render </code> method to assign our elements to the <code> div tag having root as id</code>.
                    <code> ReactDOM.render(,)  </code> method render the passed content(html+logic) on the specified(div with id root) tag.
                </p>
                <p>
                <span className="code-cursor"> &#187; </span>    <b> Html Root Component</b> : <br />
                        &#60;div id="root"&#62;   <br />
                        Inside this tag main component gets rendered and act as a parent component.  
                        In this example we have used “App” component as a parent component. <br />
                        &#60;/div&#62; 
                </p>
                <p>
                <span className="code-cursor"> &#187; </span>   <b> App Component</b> : App Component contains the things which we want to render. In case we want to execute our routing inside this Component then
                    we have to create a placeholder for the Routing and call the <code> Route Component </code> such that child Component cna gets rendered inside it. 
                    Here we have &#60;AppRoute /&#62; tag for Routing.
                </p>
                <p>
                <span className="code-cursor"> &#187; </span>   <b> AppRoute Component</b> :  In this Component we define the path and corresponding the Components such that we can render the content on the tag specified as above.
                </p>
                <p>
                <span className="code-cursor"> &#187; </span>   <b> Components</b> : These are the blocks which contains the view to render on the UI.
                </p>
                
                <br />

                
            </div>
        );
    }
}