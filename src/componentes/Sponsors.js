/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './css/Sponsors.css';
import Cepita from './../IMG/cepita.png'
import Basani from './../IMG/basani.png'
import Chandon from './../IMG/chandon.png'
import Corona from './../IMG/corona.png'
import Fernet from './../IMG/fernet.png'
import Pioneer from './../IMG/pioneer.png'
import Smirnoff from './../IMG/smirnoff.png'
import Speed from './../IMG/speed.png'

function Sponsor(props) {
  return(
    <div className="sponsor">
      <div className="sponsorTitle">
        {/* <h4>{props.title}</h4> */}
      </div>
      <div className="sponsorContent">
        <img src={props.info} />
      </div>
    </div>
  )
}

export default class Sponsors extends Component {
  
  render() {
    if(this.props.active === 4){
        return (
          <div className="contentSponsors">
            <div className="contentTitle">
                <h2>SPONSORS</h2>
            </div>
            <div className="contentSponsor">
              <Sponsor title='CEPITA' info={Cepita}/>
              <Sponsor title='BASANI' info={Basani}/>
              <Sponsor title='CHANDON' info={Chandon}/>
              <Sponsor title='CORONA' info={Corona}/>
              <Sponsor title='FERNET' info={Fernet}/>
              <Sponsor title='PIONEER' info={Pioneer}/>
              <Sponsor title='SMIRNOFF' info={Smirnoff}/>
              <Sponsor title='SPEED' info={Speed}/>
            </div>
          </div>
          )
    }else{
        return
    }
  }
}
