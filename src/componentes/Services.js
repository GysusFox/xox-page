import React, { Component } from "react";
import './css/Services.css'

function Service(props){
    return(
        <div className="service">
            <div className="serviceTitle">
                <h4>{props.title}</h4>
            </div>
            <div className="serviceContent">
                <p>{props.info}</p>
            </div>
        </div>
    )
}

class Services extends Component {
    render() { 
        if(this.props.active === 2){
            return (
              <div className="contentServices">
                <div className="contentTitle">
                    <h2>SERVICES</h2>
                </div>
                <div className="contentService">
                    <Service title='Photos' info='Contenido'/>
                    <Service title='Emergency Post' info='Contenido'/>
                    <Service title='Drinks' info='Contenido'/>
                    <Service title='Food and Treats' info='Contenido'/>
                    <Service title='Hydration' info='Contenido'/>
                    <Service title='Glitter' info='Contenido'/>
                </div>
              </div>
            )
        }else{
            return 
        }
    }
}
 
export default Services;