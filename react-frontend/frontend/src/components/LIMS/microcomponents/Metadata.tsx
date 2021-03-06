import React from 'react';
import styled from 'styled-components';
import { device } from '../../styled-components/responsive';
import Typography from '@mui/material/Typography';

const Layout = styled.div `
  grid-area: Metadata;
  align-self: start;
  margin-top: 0.3rem;

  @media ${device.laptopL} {
    align-self: center;
    margin-top: 0;
  }
`

export default function Metadata() {
  return (
    <Layout>
        <Typography variant="body2">Created By: <span>Jacob Grisham</span></Typography>
        <Typography variant="body2">Created On: <time dateTime="2021-11-14 20:00">2021-11-14 20:00</time></Typography>
        <Typography variant="body2">Last Modified: <time dateTime="2021-11-15 20:00">2021-11-15 20:00</time></Typography>
    </Layout>
  )
}