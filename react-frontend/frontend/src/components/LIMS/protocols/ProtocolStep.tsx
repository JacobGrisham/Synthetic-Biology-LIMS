import React from 'react';
import styled from 'styled-components';
import microscopeIcon from '../../assets/images/microscope-icon.svg';
import inventoryIcon from '../../assets/images/inventory-icon.svg';
import bookIcon from '../../assets/images/book-icon.svg';

const Layout = styled.details `
  & > div {
    padding: 1.2rem;
    border-radius: 0.5rem;
    border-color: rgb(222, 222, 223);
    border-width: 1px;
    border-style: solid;
  }
`

const Details = styled.div `
  display: grid;
  grid-template-rows: repeat(8, min-content);
  grid-template-columns: max-content minmax(30px, 1fr);
  column-gap: 2rem;

  & > h2 {
    grid-column: span 2;
  }

  & > img {
    grid-column: 1 / 2;
  }

  & p, div {
    grid-column: 2 / 3;
    align-self: center;
  }
`

const ProtocolStep = () => {
  return (
    <Layout open>
      <summary>Step 1</summary>
      <div>
        <Details>
          <h2>Equipment</h2>
          <img src={microscopeIcon} alt={"equipment icon"}/> 
          <p>PCR Chamber</p>
        </Details>
        <Details>
          <h2>Input Amount(s)</h2>
          <img src={inventoryIcon} alt={"chemical input amount icon"}/>
          <div>
            <p>Reverse Transcriptase <span>20mg</span></p>
            <p>Reagant <span>50mg</span></p>
            <p>Saline Solution <span>1000mg</span></p>
          </div>
        </Details>
        <Details>
          <h2>Instructions</h2>
          <img src={bookIcon} alt={"instructions icon"}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Details>
        <Details>
          <h2>Output Amount(s)</h2>
          <img src={inventoryIcon} alt={"chemical output amount icon"}/> 
          <p>DNA <span>20mg</span></p>
        </Details>
      </div>
    </Layout>
  )
}

export default ProtocolStep;