/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './css/Main.css';
import logoXOX from './../IMG/XOX.png';

function Guest(props){
    return(
        <div className='contentGuest'>
            <p>{props.name}</p>
        </div>
    )
}

export default class Main extends Component {
    render() {
        if(this.props.active === 1){
            return (
                <div className='contenedorMain'>
                    <div className='logoXOX'>
                        <img src={logoXOX}/>
                    </div>
                    <div className='inicio'>
                        <div className="text">
                            <div className="title">
                                <h3>GUESTS</h3>
                            </div>
                            <div className="content">
                                <Guest name='Harry Style' />
                                <Guest name='Dua Lipa' />
                                <Guest name='Billie Eilish' />
                                <Guest name='The Weeknd' />
                            </div>
                        </div>
                        <div className="image">
                            <div className="marco">
                                <div className='img'>
                                    <h4>TOP STARS</h4>
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
