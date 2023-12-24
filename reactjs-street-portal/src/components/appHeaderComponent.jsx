import {Component, React} from 'react'; 
import reactStreetLogo from '../assets/images/logo/reactStreetLogo_small.svg'; 
import { AppUrl } from '../assets/constantFiles/appConstants';

// importing app name from constant file
import { AppName }  from '../assets/constantFiles/appConstants';
 
export class AppHeaderComponent extends Component{
  

    // --theme-color: purple;
    // --header-footer-bg-color: #282c34;
    // --card-bg-color: rgba(128, 0, 128, 0.25);
    // --card-border-color: rgba(128, 0, 128, 0.8); 


    state={
        themePurple: 'purple',
        themePurple_card_bgc: 'rgba(128, 0, 128, 0.2)',
        themePurple_card_bc: 'rgba(128, 0, 128, 0.2)',
        themeGreen: 'green',
        themeGreen_card_bgc: 'rgba(0, 128, 0, 0.2)',
        themeGreen_card_bc: 'rgba(0, 128, 0, 0.8)',
        themeOrangeRed: 'orangered',
        themeOrangeRed_card_bgc: 'rgba(255, 68, 0, 0.2)',
        themeOrangeRed_card_bc: 'rgba(255, 68, 0, 0.8)',
        themeHotPink: '#e83e8c',
        themeHotPink_card_bgc: '#e83e8d38',
        themeHotPink_card_bc: '#e83e8dcc'
    }


    setTheme = (event, _theme) => {
       // console.log(event.target); 
        document.documentElement.style.setProperty('--theme-color',  this.state[_theme]);
        document.documentElement.style.setProperty('--card-bg-color',  this.state[_theme + "_card_bgc"]);
        document.documentElement.style.setProperty('--card-border-color',  this.state[_theme + "_card_bc"]);
    }

    render(){
        return (
        
            // <div className="App-header-div row col-md-12"> 
            <div className="App-header-div"> 
            <div className="content-width" style={{"display":"flex"}}> 
                    {/* <a href={AppUrl} >   */}
                        {/* <img src={reactStreetLogo}    className="App-logo" alt="logo" />    */}
                         <span className="App-heading">  {AppName}     Street   
                        </span>  
                    {/* </a>  */}
          

                {/* <div className="social-media-div" > 
                    <span >
                        <i className="bi bi-facebook"></i> 
                        <i className="bi bi-twitter"></i>  
                    </span> 
                </div>  */}

                

                {/* <div className="App-heading-div"> 
                    <span className="App-heading">  {AppName}  <br />
                        <span className="theme-color-text"> Street </span>  
                    </span> 
                </div>   */}
            </div>
            </div>

                /* <div className="App-theme-btn-div col-md-2">  
                    <span style={{'backgroundColor': this.state.themeOrangeRed}} onClick={(event)=> this.setTheme(event, "themeOrangeRed")} />
                    <span style={{'backgroundColor': this.state.themeHotPink}} onClick={(event)=> this.setTheme(event, "themeHotPink")} />
                    <span style={{'backgroundColor': this.state.themeGreen}} onClick={(event)=> this.setTheme(event, "themeGreen")} />
                    <span style={{'backgroundColor': this.state.themePurple}} onClick={(event)=> this.setTheme(event, "themePurple")} />
                </div>    */
        
        );
    }
}



 
