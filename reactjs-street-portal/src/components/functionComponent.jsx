import { React} from 'react';

function FunctionComponent(){

 const _htmlString = ( 
 `      import { React } from 'react'; 

            function FunctionComponent() {
                const _template = (
                <div > This is code snippet for function component</div>
                )
                return _template;
            }
        export default FunctionComponent`
 )


const _template = (
    <div>  
        <h4 className="content-heading"> Function Component Code Snippet </h4> 
        <p> Function component is component which contains functions. The name should start from capital letter otherwise we can not use it as a react tag</p>

        <h5 className="content-heading"> Code Snippet </h5>  
        <textarea className="code-snippet-textarea"  readOnly value={_htmlString} /> <br /> <br /> 

        <h5 className="content-heading"> Code Explanation </h5>  
        <p> <span className="code-cursor"> &#187; </span>  <code>  import &#123; React &#125;  from 'react';  </code>: We have to import this and this will help to render the dom.</p>
        <p> <span className="code-cursor"> &#187; </span>  <code>  function FunctionComponent() &#123; ..... &#125;   </code>: Function </p>
        <p> <span className="code-cursor"> &#187; </span>  <code>  const _template = ( ..... )  </code>: constant that is holding the html tag along with js</p>
        <p> <span className="code-cursor"> &#187; </span>  <code> export default FunctionComponent  </code>: Exporting</p>
    </div>

)
     return  _template ; 
}



export default FunctionComponent  

 