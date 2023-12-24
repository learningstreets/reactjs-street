import {Component,React} from 'react'; 
import   BodyScrollToTop   from './utilFunctions';
 
import {Link} from 'react-router-dom';
import { routePathPrefix } from '../assets/constantFiles/appConstants';


export class HomeComponent extends Component{
    render(){
        return(
          <div style={{"background" :"white"}}>
                <div className="homePage-welcome-div col-md-12 pd0">
                  <div className="homePage-welcome-text"> 
                      <div id="heading">  
                        <p>  Welcome to  </p>   <br />
                          ReactJs  <br />
                        <b> Street </b> <br /> 
                        <b id="motto"> Learn &#124; Share | Help  </b>
                        </div>   
                    </div> 
                </div> 

                <div  className="content-width" > 
                   <div className="homePage-quotes-div">
                    <p> 
                        <q>This street will make you understand the basics of <b> ReactJs</b> and help you to begin with it.</q>  
                    </p> 
                  </div> 

                  <div className="homePage-content-div row col-md-12 pd0">
                      <div className="homePage-content-card col-md-4">
                        <p className="hpcc-heading"> About Street</p>
                        <p className="hpcc-description"> 
                          Our goal is that each and every one who is interested to learn new things should get it without any cost.
                          Towards this we are doing a bit from our side such that our knowledge and experience could be shared among all those who are seeking for it.
                        </p>
                      </div>

                      <div className="homePage-content-card col-md-4">
                        <p className="hpcc-heading"> Your Takeaway</p>
                        <p className="hpcc-description"> 
                          We are just like you with lots of zeal to learn new things. We are always ready for learning.
                          In our family we have many people to contribute and we also welcome you to in our family.  
                        </p>
                      </div>

                      <div className="homePage-content-card col-md-4">
                        <p className="hpcc-heading"> Our Expectation</p>
                        <p className="hpcc-description"> 
                          Always have a zeal to <b>Learn</b>. 
                          Whatever you know it's good to <b>Share</b> with people and <b>Help</b> them whenever they need it.
                          We will not loose anything by sharing something especially 'knowledge'.
                        </p>
                      </div>
                  </div> 

                  <br />
                  <center> 
                  <Link className="getStarted-button" onClick={()=> BodyScrollToTop()}   to={routePathPrefix +'ReactDocs/GettingStarted'}   activeclassname="menu-list-a-active"  >
                    Let's Get Started  
                  </Link> 
                  </center>
                  <br />
                  <br />
                </div>


                
                  
          </div>
        )
    }
}