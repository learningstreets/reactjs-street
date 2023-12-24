import {Component, React} from 'react'; 

export class EventHandlingComponent extends Component{
  
    state = {
        counter : 0,
        buttonType: "None of the"
    }

    // below  method is not required if using arrow function
    // constructor() {

    //     super(); // We are calling this to use constructor
    //   //  console.log(this)

    //   // binding the method such that we can use 'this' keyword inside the body of 'IncrementCounter' method 
    //   this.IncrementCounter = this.IncrementCounter.bind(this);
    // }

    render(){

        const _eventHandlingHtmlString_1 = (
` // tag to display counter
  <strong>Currently Counter is: </strong>  { this.formatCount() }  

  // adding button for counter increment and decrement
  <button className="btn btn-primary form-control" type="button" onClick={this.IncrementCounter}> Increment</button> 
  <button className="btn btn-danger form-control" type="button" onClick={ () => {this.setState({counter : this.state.counter - 1})}}> Decrement</button>
               
  // Adding arrow function for Increasing counter value. By this arrow function we can avoid binding in constructor
  IncrementCounter = () => {
  // we have to tell the react that something got changed such that react can update the dom  
  this.setState({counter : this.state.counter + 1}); 
  }

  // Adding the another func to format the counter value
  formatCount() {
    const { counter } = this.state; // taking out the value of counter from state object and saving into another constant
    return counter === 0 ? <span className="text-warning fs3rem">  Zero  </span>: counter > 0 ? <span className="text-success fs3rem"> {counter} </span> : <span className="text-danger fs3rem">{counter} </span> ;
}
`
)

        return (
            <div> 
                <h4 className="content-heading"> Event Handling </h4> 
                    <p> Event handling is an event to handle the action. An Action could be anything such as user clicked on a button, mouse-hover,
                        mouse-focus etc. </p>
                <h5 className="content-heading"> Sample Example - 1 </h5>
                <p>Below example is for simple implementation of events. We are trying to understand how to handle events.</p> 
                <div className="row col-md-12">
                    <div className="col-md-3 form-group pd10"> 
                        <strong>Currently Counter is: </strong> <br /> { this.formatCount() }  
                        <br/>  <br/>
                        <button className="btn btn-primary form-control" type="button" onClick={this.IncrementCounter}> Increment</button> 
                        <br/> <br/>
                        <button className="btn btn-danger  form-control" type="button" onClick={ () => {this.setState({counter : this.state.counter - 1})}}> Decrement</button>
                    </div> 

                    <div className="col-md-9 form-group pd10"> 
                        <textarea className="code-snippet-textarea"  readOnly value={_eventHandlingHtmlString_1} /> <br /> <br /> 
                    </div> 
                </div>
                
                <h5 className="content-heading"> Code Explanation </h5> 
                <p> <span className="code-cursor"> &#187; </span>   <code>  &#123; this.formatCount()  &#125;   </code>: An expression which calls custom method to get the count along with some custom formatting.</p>
                <p> <span className="code-cursor"> &#187; </span>    <code>  onClick=&#123; this.IncrementCounter &#125;   </code>: A click event of a button which calls non-parameterized method  'IncrementCounter' </p>
                <p> <span className="code-cursor"> &#187; </span>    <code>  IncrementCounter = () = &#62; &#123; 
                            this.setState(&#123; counter : this.state.counter + 1 &#125;); &#125;  </code>: This is the body of the 'IncrementCounter' method which will increase the counter.
                            Here we have used 'Arrow function' <code> () = &#62; &#123; ...... &#125;</code> concept. By using this no need to bind the <code>'this'  </code> object with the method. Means in React we can not use 'this' object directly.
                            Hence to use it we have to bind it inside the 'constructor' like below: <br/>
                            <code> constructor() &#123;  <br/>
                            &#47;&#47; binding the method such that we can use 'this' keyword inside the body of 'IncrementCounter' method  <br/>
                                    this.IncrementCounter = this.IncrementCounter.bind(this);  <br/>
                                     &#125;  </code>
                            if we don't do this, we will not be able to access 'this' it will simply throw 'undefined' error.  </p>
                <p> <span className="code-cursor"> &#187; </span>
                <strong> Inside <code> 'IncrementCounter' </code>  method why not simply doing this  </strong> <code>this.state.counter + 1  </code>   instead of 
                <code> this.setState(&#123; counter : this.state.counter + 1 &#125;); &#125;  </code> ?:
                 Okay so, this is because React is a JavaScript not a template engine. So we have to tell the React that something got changed so update the DOM. </p>


                 <p> <span className="code-cursor"> &#187; </span> <code> this.setState( .... ) </code> : 'setState' method will set the new value to the objects. By doing this React understands that current DOM requires some update.
                 Hence as a result it compares the Current Vs New DOM and updates only required part not the full DOM.</p>

                <br />
                 <h5 className="content-heading"> Sample Example - 2</h5>
                 <p>In this example we will see how we can pass the value to the event function. Like passing some id/text to the handling method.</p> 
            
                 <div className="row col-md-12">
                    <div className="col-md-12  pd10"> 
                        <strong>List of Buttons:</strong> <br />  
                         
                        <button className="btn btn-primary" type="button" onClick={() => this.printButtonType("Primary")}> Primary Button</button> 
                        &nbsp;&nbsp;
                        <button className="btn btn-warning" type="button" onClick={() => this.printButtonType("Warning")}> Warning Button</button> 
                        &nbsp;&nbsp;
                        <button className="btn btn-success" type="button" onClick={() => this.printButtonType("Success")}> Success Button</button> 
                        &nbsp;&nbsp;
                        <button className="btn btn-danger" type="button" onClick={() => this.printButtonType("Danger")}> Danger Button</button> 
                        &nbsp;&nbsp;
                        <button className="btn btn-info" type="button" onClick={() => this.printButtonType("Info")}> Info Button</button> 
                        &nbsp;&nbsp;
                        <button className="btn btn-dark" type="button" onClick={() => this.printButtonType("Dark")}> Dark Button</button> 
                        &nbsp;&nbsp;
                        <button className="btn btn-light" type="button" onClick={() => this.printButtonType("Light")}> Light Button</button> 
                        &nbsp;&nbsp;
                        <button className="btn btn-link" type="button" onClick={() => this.printButtonType("Link")}> Link Button</button> 

                    </div> 
                    <div className="col-md-12 form-group pd10" style={{'fontSize':'1.3rem'}}> 
                        <span> You have clicked </span> : <strong> {this.state.buttonType + " Button"} </strong> 
                    </div>
                    
                    <div className="col-md-12 form-group pd10"> 
                        <p>  <span className="code-cursor"> &#187; </span>   The only change in the code would be related to event calling function: 
                            <code>  onClick=&#123;() =&#62; this.printButtonType("Primary")&#125; </code>.
                            Here we are passing "Primary" as a parameter to the <code> printButtonType </code> function. 
                            Same as for the other buttons we are passing different text as per the "BootStrap CSS" type.
                        </p>

                        <p> <span className="code-cursor"> &#187; </span>  Nothing much in the body of function. It will look like this <br />
                            <code>  printButtonType = (_buttonType) =&#62; &#123; <br />
                            this.setState(&#123;buttonType : _buttonType&#125;);  &#125;
                            </code>.
                            Simply created a parameterized function and setting the new value to one of the state variable.
                        </p>

                        
        
    

                    </div> 
                </div>
            </div>
        );
    }

    // IncrementCounter(){
    //     alert('IncrementCounter Clicked');
    //         console.log(this);
    //     // we can not use directly this.state.counter and we can not increase the counter simply
    //     // Because this is undefined here in this method. to use this we have to bind it on constructor

    //     // to avoid the binding we have to use arrow function because it don't rebind it instead it inherited it
    // }

    // Arrow function
    IncrementCounter = () => {
        this.setState({counter : this.state.counter + 1}); // we have to tell the react that something got changed such that react can update the dom  
    }

    // Arrow function
   DecrementCounter = () => {
        this.setState({counter : this.state.counter - 1}); // we have to tell the react that something got changed such that react can update the dom  
    }

    // Adding the another func to format the counter value
    formatCount() {
        const { counter } = this.state;
        return counter === 0 ? <span className="text-warning fs3rem">  Zero  </span>: counter > 0 ? <span className="text-success fs3rem"> {counter} </span> : <span className="text-danger fs3rem">{counter} </span> ;
    }

    // Adding a method to print the button type
    printButtonType = (_buttonType) => {
        this.setState({buttonType : _buttonType});
    }
}