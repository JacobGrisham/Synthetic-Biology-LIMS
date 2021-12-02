import React from 'react';
import styled from 'styled-components';

const InfoButton = styled.button `
  display: grid;
  row-gap: 9px;
  max-width: 540px;
  height: 128px;
  padding: 1.2rem 8rem;
  text-decoration: none;
  text-align: left;
  border-radius: 0.5rem;
  border-color: rgb(222, 222, 223);
  border-width: 1px;
  border-style: solid;
  color: rgb(88, 107, 116);
  background-color: white;

  &:hover,
  &:focus {
    border-color: rgb(144, 202, 249);
    color: rgb(144, 202, 249);
  }

  &:active {
    border-color: rgb(33, 133, 208);
    color: rgb(33, 133, 208);
  }
`

const Result = () => {
  return (
    <li>
      <InfoButton>
        <h3>Reverse Transcriptase</h3>
        <p>DNA polymerase enzyme that transcribes single-stranded RNA into DNA. This enzyme is able to synthesize a double helix DNA once the RNA has been reverse transcribed in a first step into a single-strand DNA</p>
      </InfoButton>
    </li>
  )
}

export default Result;