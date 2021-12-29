import React from 'react';
// React Router
import { Link, useLocation } from "react-router-dom";
// Styled Components
import styled from 'styled-components';
import { CombinedStyledLayout } from '../../styled-components/workspace-layout';
// My React Components
import ButtonPropped from '../../ButtonPropped';
import ProtocolStep from '../protocols/ProtocolStep'

const Layout = styled(CombinedStyledLayout) `
  grid-template-rows: repeat(2, max-content);
`

const Buttons = styled.div `
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 1rem;

  @media ${`(min-width: 525px)`} {
    grid-template-rows: max-content;
    grid-template-columns: repeat(2, max-content);
    column-gap: 1rem;
  }
`

const Job = () => {
  const location = useLocation();

  return (
    <Layout>
      <Buttons>
        <ButtonPropped xpadding={1.2} ypadding={1.5} width={10} primary text={'START JOB'} />
        <Link to={`${location.pathname}/Certify`}>
          <ButtonPropped xpadding={1.2} ypadding={1.5} width={10} text={'CERTIFY JOB'} />
        </Link>
      </Buttons>
      <ProtocolStep />
    </Layout>
  )
}

export default Job;