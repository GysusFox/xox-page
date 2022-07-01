/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './css/Footer.css';

export default function Footer() {
  return (
    <div className='contentFooter'>
        <div className='up'>
            <div className='contact'>
                <p style={{fontSize: '20px', borderBottom: '1px solid white', paddingRight: '200px', paddingLeft: '10px'}}>Contact</p>
                <p>Email: email@gmail.com</p>
                <p>Number: +54 11 25145465</p>
            </div>
            <div className='redes'>
                <a href='https://www.instagram.com'><i className='fa-brands fa-instagram'></i></a>
                <a href='https://www.facebook.com'><i className='fa-brands fa-facebook-square'></i></a>
            </div>
        </div>
        <div className='down'>
            <div className='credits'>
                <p style={{marginTop: '10px'}}>XOX 2022 | Created by TheYisus and MicaLancissi</p> 
            </div>
        </div>
    </div>
  )
}
