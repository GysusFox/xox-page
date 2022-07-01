import './App.css';
import React, { useState } from 'react'
import styled from 'styled-components'

//IMPORT COMPONENTS
import Menu from './componentes/Menu.js';
import Main from './componentes/Main.js';
import Services from './componentes/Services.js';
import Tickets from './componentes/Tickets';
import Sponsors from './componentes/Sponsors';
import Cart from './componentes/Cart';
import Footer from './componentes/Footer';

function App() {

  const [sectionActive, setSectionActive] = useState(1)
  const[activeWhite, setActiveWhite] = useState(false)
  const [backgrounBody, setBackgroundBody] = useState({backgroundColor: '#78281F'})

  const changeBackgroundImage = () => {
    setActiveWhite(!activeWhite)
  }

  const activeSection = (id) => {
    if(id === sectionActive){
    }else{
      //console.log(id)
      switch(id){
        case 1:
          setBackgroundBody({backgroundColor: '#78281F'})
          if(activeWhite){
            changeBackgroundImage()
          }
          break;
        case 2:
          setBackgroundBody({backgroundColor: '#4A235A'})
          if(activeWhite){
          }else{
            changeBackgroundImage()
          }
          break;
        case 3:
          setBackgroundBody({backgroundColor: '#0E6251'})
          if(activeWhite){
            changeBackgroundImage()
          }
          break;
        case 4:
          setBackgroundBody({backgroundColor: '#7E5109'})
          if(activeWhite){
          }else{
            changeBackgroundImage()
          }
          break;
        case 5:
          setBackgroundBody({backgroundColor: '#FFFBEF'})
          if(activeWhite){
            changeBackgroundImage()
          }
          break;
        default:
          break;
      }
      setSectionActive(id)
    }
  }

  return (
    <AppContainer>
      <div className="App" style={backgrounBody} id={`${activeWhite? 'AppBackWhite':sectionActive === 5 ? 'AppMenu':'AppBlack'}`}>
        
        <section className="logo">
          {sectionActive === 1 ? '': <h4>XOX</h4>}
        </section>
        
        <Menu sectionActive={sectionActive} activeSection={activeSection}/>

        <section className='content'>
          <Main active={sectionActive}/>
          <Services active={sectionActive}/>
          <Tickets active={sectionActive}/>
          <Sponsors active={sectionActive}/>
          <Cart active={sectionActive}/>
        </section>

        <Footer />
        
      </div>
    </AppContainer>
  );
}


export default App;

const AppContainer = styled.div`
  #App{
  }
`