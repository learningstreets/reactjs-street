
import { AboutReactJsComponent } from  '../../components/aboutReactJsComponent';
import { FirstReactAppComponent }  from '../../components/firstReactAppComponent';
import { HowReactWorksComponent } from '../../components/howReactWorksComponent';
import  FunctionComponent   from '../../components/functionComponent';
import ClassComponent  from '../../components/classComponent';
import { StateAndPropsComponent } from '../../components/stateAndPropsComponent';
import { BestCodingPracticesComponent } from '../../components/bestCodingPracticesComponent';
import { ReactFundamentalsComponent } from '../../components/reactFundamentalsComponent';
import { EventHandlingComponent } from '../../components/eventHandlingComponent';
import { PassingDataBetweenComponent } from '../../components/passingDataComponent';
import { FeedBackComponent } from '../../components/feedbackComponent';
import { JSXComponent } from '../../components/jsxComponent';
import { HelloWorldComponent } from '../../components/helloWorldComponent';
import { ReactLifecycleComponent } from '../../components/reactLifecycleComponent';
import { ReactAPIComponent } from '../../components/reactAPIComponent'; 
import GettingStartedComponent from '../../components/gettingStartedComponent';
import { routePathPrefix } from  './appConstants';

const reactDocsRouteData = [

    {
        routeKey:"GettingStarted",
        routePath: routePathPrefix + 'ReactDocs/GettingStarted',
        routeLinkText:"Getting Started",
        routeLinkDescription:"Let's get started",
        routeComponent: GettingStartedComponent
    },
    {
        routeKey:"AboutReactJs",
        routePath: routePathPrefix + 'ReactDocs/AboutReact',
        routeLinkText:"What is ReactJs?",
        routeLinkDescription:"In this you will understand about basics of ReactJs",
        routeComponent: AboutReactJsComponent
    },
    {
        routeKey:"FirstReactApp",
        routePath: routePathPrefix + 'ReactDocs/FirstReactApp',
        routeLinkText:"My First React App",
        routeLinkDescription:"Let's create our First React App",
        routeComponent: FirstReactAppComponent
    },
    {
        routeKey:"HowReactWorks",
        routePath: routePathPrefix + 'ReactDocs/HowReactWorks',
        routeLinkText:"How React works?",
        routeLinkDescription:"Let's understand how React works",
        routeComponent: HowReactWorksComponent
    },
    {
        routeKey:"JSX",
        routePath: routePathPrefix + 'ReactDocs/JSX',
        routeLinkText:"What is JSX",
        routeLinkDescription:"Get it familiar with JSX",
        routeComponent: JSXComponent
    },
    {
        routeKey:"HelloWorld",
        routePath: routePathPrefix + 'ReactDocs/HelloWorld',
        routeLinkText:"Legendary 'Hello World' Program",
        routeLinkDescription:"Understand the 'Hello World' program",
        routeComponent: HelloWorldComponent
    },
    {
        routeKey:"ReactFundamentals",
        routePath: routePathPrefix + 'ReactDocs/ReactFundamentals',
        routeLinkText:"React Terminology and Fundamentals",
        routeLinkDescription:"It's good to get familiar with React terminology and fundamentals",
        routeComponent: ReactFundamentalsComponent
    },
    {
        routeKey:"BestCodingPractices",
        routePath: routePathPrefix + 'ReactDocs/BestCodingPractices',
        routeLinkText:"Best Coding Practices",
        routeLinkDescription:"This will always help us in every language",
        routeComponent: BestCodingPracticesComponent
    },
    {
        routeKey:"FunctionComponent",
        routePath: routePathPrefix + 'ReactDocs/FunctionComponent',
        routeLinkText:"Function Component",
        routeLinkDescription:"This will let you know how we can create function component",
        routeComponent: FunctionComponent
    },
    {
        routeKey:"ClassComponent",
        routePath: routePathPrefix + 'ReactDocs/ClassComponent',
        routeLinkText:"Class Component",
        routeLinkDescription:"This will let you know how we can create class component",
        routeComponent: ClassComponent
    },
    {
        routeKey:"ReactLifecycle",
        routePath: routePathPrefix + 'ReactDocs/ReactLifecycle',
        routeLinkText:"React Lifecycle",
        routeLinkDescription:"It's good to know about React Lifecycle",
        routeComponent: ReactLifecycleComponent
    },
    {
        routeKey:"StateAndProps",
        routePath: routePathPrefix + 'ReactDocs/StateAndProps',
        routeLinkText:"State and Props",
        routeLinkDescription:"Let's prepare for passing the data between components",
        routeComponent: StateAndPropsComponent
    },
    {
        routeKey:"EventHandling",
        routePath: routePathPrefix + 'ReactDocs/EventHandling',
        routeLinkText:"Event Handling",
        routeLinkDescription:"This will let you know about handling the various events",
        routeComponent: EventHandlingComponent
    },
    {
        routeKey:"PassingDataBetweenComponents",
        routePath: routePathPrefix + 'ReactDocs/PassingDataBetweenComponents',
        routeLinkText:"Passing Data Between Components",
        routeLinkDescription:"Let's pass the data between components",
        routeComponent: PassingDataBetweenComponent
    },
    {
        routeKey:"FeedBack",
        routePath: routePathPrefix + 'ReactDocs/FeedBack',
        routeLinkText:"FeedBack",
        routeLinkDescription:"Feedback",
        routeComponent: FeedBackComponent
    },
    {
        routeKey:"ReactAPI",
        routePath: routePathPrefix + 'ReactDocs/ReactAPI',
        routeLinkText:"React API",
        routeLinkDescription:"Let's communicate with other servers through APIs",
        routeComponent: ReactAPIComponent
    }
    // {
    //     routeKey:"1",
    //     routePath: routePathPrefix + 'ReactDocs/',
    //     routeLinkText:"Conditions/Loops",
    //     routeLinkDescription:"",
       
    // },
    // {
    //     routeKey:"2",
    //     routePath: routePathPrefix + 'ReactDocs/',
    //     routeLinkText:"Routing",
    //     routeLinkDescription:"",
       
    // },
    // {
    //     routeKey:"3",
    //     routePath: routePathPrefix + 'ReactDocs/',
    //     routeLinkText:"Forms",
    //     routeLinkDescription:"",
         
    // },
    // {
    //     routeKey:"4",
    //     routePath: routePathPrefix + 'ReactDocs/',
    //     routeLinkText:"API",
    //     routeLinkDescription:"",
        
    // }
    

 ]

 export default reactDocsRouteData
    
