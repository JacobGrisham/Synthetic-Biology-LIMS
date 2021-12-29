import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const OrderedList = styled.ol `
  overflow-y: scroll;
  display: grid;
  row-gap: 2px;
  grid-template-columns: minmax(max-content, 250px);
`

const Box = styled.li `
  padding: 1rem;
  text-decoration: none;
  text-align: left;
  border-radius: 0.5rem;
  border: 1px solid rgb(222, 222, 223);
  color: rgb(88, 107, 116);

  & > h5 {
    font-weight: 300;
    font-size: 1em;
  }
`

const HistoryList = () => {
  return (
    <OrderedList>
      <Box>
        <Typography variant="subtitle2">Updated: <time dateTime="2021-11-15 20:00">2021-11-15 20:00</time></Typography>
        <Typography variant="body2">Jacob Grisham</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">Updated: <time dateTime="2021-11-15 20:00">2021-11-15 20:00</time></Typography>
        <Typography variant="body2">Jacob Grisham</Typography>
      </Box>
    </OrderedList>
  )
}

export default HistoryList;