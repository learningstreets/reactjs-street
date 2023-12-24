import { Component, React} from 'react';


class ClassComponent extends Component{
    render() {
        const _htmlString = (
`        import { Component, React } from 'react';
        import logo from '../logo.svg';
        
        class ClassComponent extends Component {
            render() {
                const _template = ( <div > This is code snippet for class component</div> )
                return _template;
            }
        }
            `
        )


const _template = (
    <div> 
        <h4 className="content-heading"> Class Component Code Snippet </h4> 
        <p> Class component is component which contains functions.</p>

        <h5 className="content-heading"> Code Snippet </h5>  
        <textarea className="code-snippet-textarea"  readOnly value={_htmlString} /> <br /> <br /> 

        <h5 className="content-heading"> Code Explanation </h5>  
        <p> <span className="code-cursor"> &#187; </span>  <code>  import &#123; Component, React &#125;  from 'react';  </code>: We have to import this and this will help to render the dom.</p>
        <p> <span className="code-cursor"> &#187; </span>  <code>  class ClassComponent extends Component &#123; ..... &#125;   </code>: Function </p>
        <p> <span className="code-cursor"> &#187; </span>  <code>  const _template = ( ..... )  </code>: constant that is holding the html tag along with js</p>
        <p> <span className="code-cursor"> &#187; </span>  <code> export default ClassComponent  </code>: Exporting</p>
    </div>

)

     return  _template ; 
}
}

export default ClassComponent

 