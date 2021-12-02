import React from 'react';
import styled from 'styled-components';
import Units from './Units';
import barcodeIcon from '../../assets/images/barcode-icon.svg';
import freezerIcon from '../../assets/images/freezer-icon.svg';
import shelfIcon from '../../assets/images/shelf-icon.svg';
import boxIcon from '../../assets/images/box-icon.svg';
import wellPlateIcon from '../../assets/images/well-plate-icon.svg';
import {ReactComponent as Chemical} from '../../assets/images/inventory-icon.svg';

const Layout = styled.section `
  overflow-y: scroll;
  height: calc(100vh - 1rem);
  display: grid;
  padding: 1rem 2rem 0 4rem;
  grid-template-columns: repeat(3, minmax(10px, 1fr));
  grid-template-rows: repeat(4, min-content) repeat(2, minmax(10px, 1fr));
  row-gap: 1rem;
  grid-template-areas: 
    "Name Name . Metadata"
    "Barcode Barcode . History"
    "Location Location . History"
    "Amount Amount . History"
    "Description Description Description History"
    "Links Links . History";
  
  & div h2 {
    font-weight: 300;
  }
`

const Barcode = styled.fieldset `
  grid-area: Barcode;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, min-content);
  column-gap: 2rem;

  & > legend {
    grid-column: 1 / -1;
  }

  & > input {
    place-self: center;
  }
`

const Location = styled.fieldset `
  grid-area: Location;
  display: grid;
  grid-template-columns: repeat(8, min-content);
  grid-template-rows: max-content 1fr max-content;
  column-gap: 2rem;

  & > legend {
    grid-column: 1 / -1;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
  }

  & div div {
    grid-column: span 2;
    display: grid;
    grid-template-columns: subgrid;

    & > label {
      grid-column: span 2;
    }

    & > input {
      grid-column: span 1;
    }
  }

  & > p {
    grid-column: 1 / -1;
  }
`

const Amount = styled.fieldset `
  grid-area: Amount;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: repeat(3, max-content);
  column-gap: 2rem;

  & > legend, h4 {
    grid-column: 1 / -1;
  }

  & > svg {
    grid-row: span 2;
    align-self: center;
  }

  & > div {
    grid-row: span 2;
`

const ChemicalForm = () => {
  return (
    <Layout>
      <Barcode>
          <legend>Barcode</legend>
          <img src={barcodeIcon} alt={"barcode icon"}/>
          <input name='barcode' type='number' min='0' placeholder='98723490238' />
        </Barcode>

        <Location>
          <legend>Location</legend>
          <div>
            <div>
              <label>Freezer</label>
              <img src={freezerIcon} alt={"freezer icon"}/> 
              <input name='freezer' type='number' min='0' placeholder='20' />
            </div>
            <div>
              <label>Shelf</label>
              <img src={shelfIcon} alt={"shelf icon"}/>
              <input name='shelf' type='number' min='0' placeholder='4' />
            </div>
            <div>
              <label>Box</label>
              <img src={boxIcon} alt={"box icon"}/>
              <input name='box' type='number' min='0' placeholder='25' />
            </div>
            <div>
              <label>Well Plate</label>
              <img src={wellPlateIcon} alt={"well plate icon"}/>
              <input name='well plate' type='number' min='0' placeholder='8' />
            </div>
          </div>
          <p>F20.4.25.8</p>
        </Location>

        <Amount>
          <legend>Amount</legend>
          <Chemical />
          <div>
            <label>Stockpile Goal</label>
            <input name='goal amount' type='number' min='0' placeholder='1200' />
            <Units />
          </div>
          <div>
            <h4>Current Total</h4>
            <p>200mg</p>
          </div>
          <div>
            <label>Type</label>
            <input name='type' type='text' placeholder='enzyme' />
          </div>
        </Amount>
    </Layout>
  )
}

export default ChemicalForm;

