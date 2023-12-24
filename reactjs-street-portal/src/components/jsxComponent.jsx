import {Component, React} from 'react'; 


export class JSXComponent extends Component{
  
    render(){
        return (

        <div> 
             <h4 className="content-heading"> What is JSX? </h4> 
                <p> JSX is JSX  </p> 
        
                <h5 className="content-heading"> Code Snippet </h5>  
                <textarea className="code-snippet-textarea"  readOnly value={""} /> <br /> <br /> 
        
                <h5 className="content-heading"> Code Explanation </h5>  
                <p> <span className="code-cursor"> &#187; </span>  <code>    state =  &#123; ...... &#125;   </code>: This is the declaration of state property inside the class. We can add n number of properties inside this state.
                It helps to store any property-value which get used into the current component.</p>
                <p> <span className="code-cursor"> &#187; </span>  <code>   &#123; this.state.msg &#125;   </code>: This is one type of expression to read the value of any property from state property.  </p>
                <p> <span className="code-cursor"> &#187; </span>  <code>  const &#123; msg &#125;  = this.state;  </code>: An alternate way to extract the value of a property. 
                Create a constant with the same name of the property which is declared inside the state property and store the data into it.
                To use of the const we can directly use like this: <code>  &#123; msg &#125;  </code> </p>
                <br />
                <br />
                <br />
 
        </div>
        );
    }
}