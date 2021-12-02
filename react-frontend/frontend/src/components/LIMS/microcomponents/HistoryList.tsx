import React from 'react';
import styled from 'styled-components';

const OrderedList = styled.ol `
  overflow-y: scroll;
  display: grid;
  row-gap: 2px;
`

const Box = styled.li `
  max-width: 320px;
  height: 70px;
  padding: 1.2rem;
  line-height: 2.2rem;
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
        <h5>Updated: <time dateTime="2021-11-15 20:00">2021-11-15 20:00</time></h5>
        <p>Jacob Grisham</p>
      </Box>
      <Box>
        <h5>Updated: <time dateTime="2021-11-15 20:00">2021-11-15 20:00</time></h5>
        <p>Jacob Grisham</p>
      </Box>
    </OrderedList>
  )
}

export default HistoryList;