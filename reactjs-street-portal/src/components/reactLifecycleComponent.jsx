import React from 'react';

export class ReactLifecycleComponent extends React.Component{

    render(){

        const _template = (
            <div>
                <h4 className="content-heading"> React Lifecycle </h4> 
                <p>
                    We know that React is all about <code> Components</code>  hence we have to look towards it's lifecycle as well.   
                    Lifecycle means some set of events/functions in which each and every <code> React Component</code>   goes through.   <br />
                    There are few events which gets called during lifecycle of a <code> React Component</code>. 
                    Basically we can categorize lifecycle methods into three phases such as:  <br />
                    <span className="code-cursor"> &#187; </span><span className="theme-color-text"> Mounting </span>   <br />
                    <span className="code-cursor"> &#187; </span><span className="theme-color-text"> Updating </span>   <br />
                    <span className="code-cursor"> &#187; </span><span className="theme-color-text"> UnMounting </span> 
                </p>
                
                <br />
                <h5 className="theme-color-text"> <b> Mounting </b>  </h5> 
                <p> Mounting means putting elements into the DOM. 
                    React has four built-in methods that gets called, in this order, when mounting a component: </p> 
                <p> 
                    <span className="code-cursor"> &#187; </span> 
                    <code> constructor() </code>: The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
                    <br />
                    <span className="code-cursor"> &#187; </span> 
                    <code> getDerivedStateFromProps() </code>: 
                    <br />
                    <span className="code-cursor"> &#187; </span> 
                    <code> render() </code>: 
                    <br />
                    <span className="code-cursor"> &#187; </span> 
                    <code> componentDidMount() </code>: 
                </p>

                <br />
                <h5 className="theme-color-text"> <b>  Updating </b></h5> 
                <p>  </p> 
                <p> 
                    <span className="code-cursor"> &#187; </span> 
                    <code> getDerivedStateFromProps() </code>: 
                    <br />
                    <span className="code-cursor"> &#187; </span> 
                    <code> shouldComponentUpdate() </code>: 
                    <br />
                    <span className="code-cursor"> &#187; </span> 
                    <code> render() </code>: 
                    <br />
                    <span className="code-cursor"> &#187; </span> 
                    <code> getSnapshotBeforeUpdate() </code>: 
                    <br />
                    <span className="code-cursor"> &#187; </span> 
                    <code> componentDidUpdate() </code>: 

                </p>

                <br />
                <h5 className="theme-color-text"> <b> UnMounting </b> </h5> 
                <p>  </p> 
                <p> 
                    <span className="code-cursor"> &#187; </span> 
                    <code> componentWillUnmount() </code>: 
                    <br />
                </p>

            </div>

        );


        return _template;
    }

}