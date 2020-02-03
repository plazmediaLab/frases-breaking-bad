import React from 'react';
import styled from '@emotion/styled';


const CardDiv = styled.div`
  background-color: var(--White);
  padding: 1.5rem;
  border-radius: .5em;
  margin-bottom: 2rem;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1.5rem;

  *{
    margin: 0;
  }

  @media(min-width: 589px){
    padding: 3rem;
    grid-column-gap: 1.9rem;
  }

  i{
    font-size: 1.3em;
    color: var(--texto-light);

    @media(min-width: 589px){
      font-size: 1.6em;
    }
  }

  h3{
    font-weight: 600;
    color: var(--plaz-color);
    font-size: 1.5em;

    @media(min-width: 589px){
      font-size: 2.569rem;
    }
  }
  p{
    text-align: right;
    color: var(--texto-light);
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }
`;


const Frase = ({ frase }) => {

  if(Object.keys(frase).length === 0) return null;

  return (
    <CardDiv className="box-shadow-lg">
      <div>
        <i className="a-quote-round"></i>
      </div>
      <div>
        <h3>{ frase.quote }</h3>
        <p>{ frase.author }</p>
      </div>
    </CardDiv>
  );
};

export default Frase