import { Component, React} from 'react';

 

class  PassingDataBetweenComponent extends Component {   

    render() { 

 const _p2cUsingFCHtmlString = ( 
`// Creating function component for parent and passing text to child FunctionComponent
function ParentFunctionComponent() {
    const _parentTemplate = (
       <div style={{'border':'1px solid purple', 'padding':'1rem'}}> 
           <h3> This is Parent Component</h3>
           <ChildComponent parentText="This is the text from Parent Function Component" />
       </div> 
    )
    return _parentTemplate;
   }
   
   // Creating function component for child and printing text from parent function component
   function ChildFunctionComponent({parentText}) {
       const _childTemplate = ( 
           <div style={{'border':'1px solid orange', 'padding':'1rem'}}> 
               <h4> This is Child Component</h4>
               <h5> Got this text from parent component:  <strong> {parentText}  </strong> </h5>
           </div> 
        )
   
    return _childTemplate;
   }
`
)

const _p2cUsingCCHtmlString = ( 
 `// Creating class component for parent and passing text to child class component
class ParentClassComponent extends Component{
    render() {
        const _parentTemplate = (
        <div style={{'border':'1px solid purple', 'padding':'1rem'}}> 
            <h3> This is Parent Component</h3>
            <ChildClassComponent parentText="This is the text from Parent Class Component" />
        </div> 
        )
        return _parentTemplate;
    }
}
   
// Creating class component for child and printing text from parent class component
class ChildClassComponent extends Component {

    render() {
        const _childTemplate = ( 
            <div style={{'border':'1px solid orange', 'padding':'1rem'}}> 
                <h4> This is Child Component</h4>
                <h5> Got this text from parent component: <strong> {this.props.parentText}  </strong></h5>
            </div> 
        )
    
        return _childTemplate;
    }
}

 `
 )    
 
 
 const _p2NcUsingCCHtmlString = ( 
` // Try adding any tag as a nested child
<ChildClassComponent parentText="This is the text from Parent Class Component" >
    <strong> I am nested children </strong>
</ChildClassComponent>


// In the Child component add below line, 'this.props.children' here children is a default property
<h5> Nested Child: <strong> {this.props.children}  </strong></h5>
`
 )    


 const _c2PUsingClassComponent = (

`// Creating class component for parent and passing text to child class component
class C2PParentClassComponent extends Component{
    // Let's create a variable to store the data from child component
    state={
        dataFromChild : "Default text in parent component itself"
    }

    // we have to create a call back function here such that we can retrieve data from child via that function
    getDataFromChildCallBackFunction = (dtFromChild) => {
        // update the state variable
        this.setState({dataFromChild : dtFromChild});
    }

    render() {
        const _parentTemplate = (
        <div style={{'border':'1px solid purple', 'padding':'1rem'}}> 
            <h3> This is Parent Component</h3>
            <C2PChildClassComponent 
            parentText="This is the text from Parent Class Component" 
            parentCallBack={this.getDataFromChildCallBackFunction} /> <br/>
            Data received from child component: <strong> {this.state.dataFromChild}</strong>
        </div> 
        )
        return _parentTemplate;
    }
}
   
// Creating class component for child and printing text from parent class component
class C2PChildClassComponent extends Component {

    sendDataToParent = ()=>{
        // assigning value to the call back function
        this.props.parentCallBack("Sending data from child component");
    }

    render() {
        const _childTemplate = ( 
            <div style={{'border':'1px solid orange', 'padding':'1rem'}}>   
                <h4> This is Child Component</h4>
                <h5> Got this text from parent component: <strong> {this.props.parentText}  </strong></h5> 
                <button className="btn btn-primary" onClick={this.sendDataToParent} > Send data to parent component</button> 
            </div> 
        )
    
        return _childTemplate;
    }
}

`
 )
 
 
        const _template = (
            <div> 
                <h4 className="content-heading"> Passing Data From Parent To Child </h4> 
                <p> There are two approaches to achieve this</p>
                <p> 1. Passing the property using <code> Function Components</code> </p>
                <p> 2. Using <code>props</code> (works with <code>Class Components</code>) </p>
               
                
                <h4 className="content-heading"> Parent To Child: Using Function Component </h4>  
                <div> 
                   <ParentFunctionComponent  />
                </div> <br /> 
                <textarea className="code-snippet-textarea"  readOnly value={_p2cUsingFCHtmlString} /> <br /> <br /> 
        
                <h5 className="content-heading"> Code Explanation </h5>  
                <p> <span className="code-cursor"> &#187; </span>  
                <code>  &#60;ChildComponent parentText="This is the text from parent" /&#62;  </code>: 
                Passing the data from parent to child components</p>
                <p> <span className="code-cursor"> &#187; </span>  
                <code>  function ChildComponent(&#123; parentText  &#125;)  &#125;   </code>: 
                Passing property to child component </p>
                <p> <span className="code-cursor"> &#187; </span>
                <code>  This is the text from parent: &#123; parentText  &#125; </code>: 
                Using property to show case the value </p>


                <br />
                <h4 className="content-heading"> Parent To Child: Using Class Component </h4>  
                <div> 
                   <ParentClassComponent  />
                </div> <br /> 
                <textarea className="code-snippet-textarea"  readOnly value={_p2cUsingCCHtmlString} /> <br /> <br /> 
        
                <h5 className="content-heading"> Code Explanation </h5>  
                <p> <span className="code-cursor"> &#187; </span>  
                <code>  &#60;ChildComponent parentText="This is the text from parent" /&#62;  </code>: 
                Passing the data from parent to child components</p>
                <p> <span className="code-cursor"> &#187; </span>  
                <code>  function ChildComponent(&#123; parentText  &#125;)  &#125;   </code>: 
                Passing property to child component </p>
                <p> <span className="code-cursor"> &#187; </span>
                <code>  This is the text from parent: &#123; parentText  &#125; </code>: 
                Using property to show case the value </p>

                <br />
                <h4 className="content-heading"> Parent To Child: Using Class Component - Passing Complex Object/ Additional Children</h4>  
                 
                <textarea className="code-snippet-textarea"  readOnly value={_p2NcUsingCCHtmlString} /> <br /> <br />




                <h4 className="content-heading"> Passing Data From Child To Parent </h4> 
                <p> 1. We need to create a callback function in the parent component. This callback function will get the data from the child component. </p> 
                <p> 2. Pass the callback function in the parent as a prop to the child component. </p> 
                <p> t3. The child component calls the parent callback function using props. </p> 
               
                
                <h5 className="content-heading"> Code Snippet </h5>  
                <div> 
                   <C2PParentClassComponent  />
                </div> <br /> 
                <textarea className="code-snippet-textarea"  readOnly value={_c2PUsingClassComponent} /> <br /> <br />  
        
                <h5 className="content-heading"> Code Explanation </h5>  
                <p> <span className="code-cursor"> &#187; </span>  
                <code>  parentCallBack= &#123; this.getDataFromChildCallBackFunction &#125;   </code>: 
                Creating CallBack function <code> getDataFromChildCallBackFunction </code> to receive the data from child component.
                Also creating a property <code> parentCallBack </code> to send the data from child component.</p>
                <p>   
                <code> getDataFromChildCallBackFunction = (dtFromChild) =&#62; &#123; <br />
                       &#47;&#47; update the state variable <br />
                        this.setState(&#125;dataFromChild : dtFromChild &#125;);  &#125;  </code>: 
                Creating a body of the method <code>getDataFromChildCallBackFunction </code>. Simply assigning new value to the another property to display in parent component </p>
                <p> <span className="code-cursor"> &#187; </span>
                <code> onClick=&#123;this.sendDataToParent&#125;   </code>: 
                Added a button in the child component and created it's event <code> </code> </p>

                <p> <span className="code-cursor"> &#187; </span>
                <code>sendDataToParent = ()=&#62; &#125; <br />
                &#47;&#47; assigning value to the call back function <br />
                    this.props.parentCallBack("Sending data from child component");  &#125;  </code>: 
                Body of the <code> sendDataToParent </code> method where we are setting a new text to the CallBack function. As soon as we will set the value,
                this value will get assigned to the parent component.</p> 
                

                <br />
            </div>
        )
                return  _template ; 
    }
}

// Passing data from Parent to Child
// ****************************************** 1. Function Component
// Creating function component for parent and passing text to child function component
function ParentFunctionComponent() {
 
    const _parentTemplate = (
       <div style={{'border':'1px solid purple', 'padding':'1rem'}}> 
           <h3> This is Parent Component</h3>
           <ChildFunctionComponent parentText={"This is the text from Parent Function Component"} />
       </div> 
    )
    return _parentTemplate;
}
   
// Creating function component for child and printing text from parent function component
function ChildFunctionComponent({parentText}) {
    const _childTemplate = ( 
        <div style={{'border':'1px solid orange', 'padding':'1rem'}}> 
            <h4> This is Child Component</h4>
            <h5> Got this text from parent component: <strong> {parentText}  </strong></h5>
        </div> 
    )
   
    return _childTemplate;
}

// ****************************************** 2. Class Component
// Creating class component for parent and passing text to child class component
class ParentClassComponent extends Component{
    render() {
        const _parentTemplate = (
        <div style={{'border':'1px solid purple', 'padding':'1rem'}}> 
            <h3> This is Parent Component</h3>
            <ChildClassComponent parentText="This is the text from Parent Class Component" >
                {/* <strong> I am nested children </strong> */}
            </ChildClassComponent>
        </div> 
        )
        return _parentTemplate;
    }
}
   
// Creating class component for child and printing text from parent class component
class ChildClassComponent extends Component {

    render() {
        const _childTemplate = ( 
            <div style={{'border':'1px solid orange', 'padding':'1rem'}}> 
                <h4> This is Child Component</h4>
                <h5> Got this text from parent component: <strong> {this.props.parentText}  </strong></h5> 
                {/* <h5> Nested Child: <strong> {this.props.children}  </strong></h5> */}
            </div> 
        )
    
        return _childTemplate;
    }
}



// ****************************************** Child to Parent Component
// Creating class component for parent and passing text to child class component
class C2PParentClassComponent extends Component{
    // Let's create a variable to store the data from child component
    state={
        dataFromChild : "Default text in parent component itself"
    }

    // we have to create a call back function here such that we can retrieve data from child via that function
    getDataFromChildCallBackFunction = (dtFromChild) => {
        // update the state variable
        this.setState({dataFromChild : dtFromChild});
    }

    render() {
        const _parentTemplate = (
        <div style={{'border':'1px solid purple', 'padding':'1rem'}}> 
            <h3> This is Parent Component</h3>
            <C2PChildClassComponent 
            parentText="This is the text from Parent Class Component" 
            parentCallBack={this.getDataFromChildCallBackFunction} /> <br/>
            Data received from child component: <strong> {this.state.dataFromChild}</strong>
        </div> 
        )
        return _parentTemplate;
    }
}
   
// Creating class component for child and printing text from parent class component
class C2PChildClassComponent extends Component {

    sendDataToParent = ()=>{
        // assigning value to the call back function
        this.props.parentCallBack("Sending data from child component");
    }

    render() {
        const _childTemplate = ( 
            <div style={{'border':'1px solid orange', 'padding':'1rem'}}>   
                <h4> This is Child Component</h4>
                <h5> Got this text from parent component: <strong> {this.props.parentText}  </strong></h5> 
                <button className="btn btn-primary" onClick={this.sendDataToParent} > Send data to parent component</button> 
            </div> 
        )
    
        return _childTemplate;
    }
}



export { PassingDataBetweenComponent  , ChildClassComponent }

 