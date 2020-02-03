import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Logo from './static/breaking-bad-seeklogo.com-2.svg'
import Frase from './components/Frase';


const LogoImg = styled.img`
  width: 25rem;
  margin: 0 auto;
`;


function App() {

  /*=================================================================================
  *	 STATE
  * --------------------------------------------------------------------------------*/
  const [frase, guardarFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0])
  }

  // Cargar primera frase
  useEffect(() => {
    consultarApi();
  }, [])

  return (
    <div className="container">
      <LogoImg src={Logo} alt="Logo Breaking Bad"></LogoImg>

      <Frase 
        frase={frase}
      />

      <div className="jc-center">
        <button className="btn-interactive btn-warning"
          onClick={consultarApi}
        >
          Recargar frase <i className="a-loopsync"></i>
        </button>
      </div>
    </div>
  );
}
 
export default App;


/*
* =================================================================================
*
*	 API = Application Programming Interface
*
* --------------------------------------------------------------------------------
*/
/*=================================================================================
*	 1.- Básicamente son funciones, métodos que ofrece una librería para ser utilizada por
*  otro software.
*  2.- Web services es cuando podemos conectarnos a un servicio vía web.
*  3.- Para acceder al servicio hay que enviar una petición estructurada.
*  4.- Usualmente se utiliza JSON.
*         Ejemplo: Google Maps API.
* --------------------------------------------------------------------------------*/