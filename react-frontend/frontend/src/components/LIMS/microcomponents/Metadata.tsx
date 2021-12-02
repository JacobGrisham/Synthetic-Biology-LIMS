import React from 'react';
import styled from 'styled-components';

const Layout = styled.div `
  grid-area: Metadata;
  line-height: 2.2rem;
  align-self: center;
`

const Metadata = () => {
  return (
    <Layout>
        <p>Created By: <span>Jacob Grisham</span></p>
        <p>Created On: <time dateTime="2021-11-14 20:00">2021-11-14 20:00</time></p>
        <p>Last Modified: <time dateTime="2021-11-15 20:00">2021-11-15 20:00</time></p>
    </Layout>
  )
}

export default Metadata;