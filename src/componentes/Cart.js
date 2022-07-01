/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './css/Cart.css';
import ManchaNaranja from './../IMG/MANCHA-NARANJA.png'
import ManchaVerde from './../IMG/manchaVerde.png'

function ItemComida(props) {
  return(
    <div className='contentItems'>
      <div className='comida'>{props.comida}</div>
      <div className='precio'>{props.precio}</div>
    </div>
  )
}

export default class About extends Component {
  render() {
    if(this.props.active === 5){
        return (
          <div className='contentCart'>
            <img className='manchaVerde' src={ManchaVerde} />
            <div className='cart'>

              <div className='cartTitle'>
                <div className='title'>
                  <h1>MENU</h1>
                </div>
                <div className='subTitle'>
                  <h4>XOX</h4>
                </div>                
              </div>

              <div className='cartMenu'>

                <div className='menuLeft'>
                  <img src={ManchaNaranja} />
                  <div className='menuTitle'>
                    <h4>DRINKS</h4>
                    <div className='mancha'></div>
                  </div>
                  <ItemComida comida='Vodka with 4 speed' precio='$6.200'/>
                  <ItemComida comida='Vodka with 2 orange juices' precio='$5.800'/>
                  <ItemComida comida='Vodka with 2 sprite' precio='$6.300'/>
                  <ItemComida comida='Gancia with 2 sprite' precio='$5.400'/>
                  <ItemComida comida='Gin with 2 tonicas' precio='$7.000'/>
                  <ItemComida comida='Fernet with 2 cocas' precio='$7.800'/>
                  <ItemComida comida='Chandon with 4 speed' precio='$6.600'/>
                  <ItemComida comida='Campari with 2 orange juices' precio='$5.400'/>
                  <ItemComida comida='Beer' precio='$400'/>
                </div>

                <div className='menuRight'>
                  <div className='top'>
                    <div className='menuTitle'>
                      <h4>FOOD</h4>
                      <div className='mancha'></div>
                    </div>
                    <ItemComida comida='Hot dog' precio='$600'/>
                    <ItemComida comida='Potato chips' precio='$450'/>
                    <ItemComida comida='Hamburger' precio='$650'/>
                    <ItemComida comida='Pizza' precio='$550'/>
                  </div>
                  <div className='menuDown'>
                    <div className='menuTitle'>
                      <h4>SWEETS</h4>
                      <div className='mancha2'></div>
                    </div>
                    <ItemComida comida='Pacifier' precio='$250'/>
                    <ItemComida comida='Chocolate' precio='$250'/>
                    <ItemComida comida='Candies' precio='$200'/>
                    <ItemComida comida='Cotton candy' precio='$350'/>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )
    }else{
        return
    }
  }
}
