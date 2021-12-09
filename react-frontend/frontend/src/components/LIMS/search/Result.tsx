import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const InfoButton = styled.button `
  display: grid;
  row-gap: 9px;
  max-width: 540px;
  height: 128px;
  padding: 15px 30px;
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
    cursor: pointer;
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
        <Typography variant="h6">Reverse Transcriptase</Typography>
        <Typography variant="body1">
          DNA polymerase enzyme that transcribes single-stranded RNA into DNA...
        </Typography>
      </InfoButton>
    </li>
  )
}

export default Result;