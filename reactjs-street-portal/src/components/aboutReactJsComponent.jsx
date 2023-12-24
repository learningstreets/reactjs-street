import {Component,React} from 'react'

 
export class AboutReactJsComponent extends Component{
    render(){
        return(
          <div>
              {/* <h4 style={{ "text-align":'center' }} > This is the 'Hello React' application.  </h4> */}
                <h4 className="content-heading"> About ReactJs </h4> 
                <p> 
                <span className="code-cursor"> &#187; </span>  <code> React </code> is a JavaScript library for building user interface.   <br />
                <span className="code-cursor"> &#187; </span>  <code> React </code>  is used to build single page applications.   <br />  
                <span className="code-cursor"> &#187; </span>  <code> React </code>  is rich in terms of reusability.
                </p>
                <p>  Reference Link:  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> ReactJs</a>  <br />
                  <small> 
                    (check out the link to get more info about ReactJs and to learn basic concepts. Anyhow this site also covers some important concepts such that you can start with React.)
                  </small>
                </p>
                <br /> 

                <h4 className="content-heading"> Why ReactJs? </h4> 
                <p> 
                <code> React </code> is very beneficial in terms of rendering, understandability, performance and manageability.
                </p>

                <p> 
                <span className="code-cursor"> &#187; </span>  <code> Virtual DOM </code>:
                  What is DOM? DOM stands for <code> Document Object Model</code>. As name says; 
                  A Model which holds all the Objects of all the elements of an HTML document.
                  So, this DOM gives a power to JavaScript such that it can access and change all the HTML elements. 
                  Same logic is being used in <code> React </code>, but here we have Virtual DOM, which helps in fast rendering. 
                  How? As application loads, a DOM gets created, Traditionally if any changes happens to HTML element, accordingly full DOM gets updated but 
                  in the case of React it only updates the required portion rest of the DOM remains same.    <br />
                <span className="code-cursor"> &#187; </span>  <code> Reusable Components </code>:  <code> React </code> has a ability to have many small components which helps to modular programming and enhance the reusability.   <br />  
                <span className="code-cursor"> &#187; </span>  <code> Traditional JavaScript </code>: <code> React </code> uses traditional JavaScript hence it is easy to learn but its recommendable to use <code> JSX </code> which is advanced version of JavaScript.
                </p>
                <br /> <br />
          </div>
        )
    }
}