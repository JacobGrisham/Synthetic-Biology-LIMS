import React from 'react';
import styled from 'styled-components';
import ButtonOutline from '../buttons/ButtonOutline';
import Metadata from '../microcomponents/Metadata';
import HistoryList from '../microcomponents/HistoryList';
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

const Name = styled.div `
  grid-area: Name;
  display: grid;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  grid-template-rows: repeat(2, min-content);

  & > button {
    grid-row: 1 / -1;
    grid-column: 2 / 3;
    place-self: center;
  }
`

const Barcode = styled.div `
  grid-area: Barcode;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, min-content);
  column-gap: 2rem;

  & > h2 {
    grid-column: 1 / -1;
  }

  & > p {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    place-self: center;
  }
`

const Location = styled.div `
  grid-area: Location;
  display: grid;
  grid-template-columns: repeat(8, minmax(30px, 1fr));
  grid-template-rows: max-content minmax(10px, 1fr) max-content;
  column-gap: 2rem;

  & > h2 {
    grid-column: 1 / -1;
  }

  & > div {
    grid-column: span 2;
    display: grid;
    grid-template-columns: subgrid;

    & > h4 {
      grid-column: span 2;
    }

    & > p {
      grid-column: span 1;
    }
  }

  & > p {
    grid-column: 1 / -1;
  }
`

const Amount = styled.div `
  grid-area: Amount;
  display: grid;
  grid-template-columns: repeat(4, minmax(30px, 1fr));
  grid-template-rows: max-content repeat(2, minmax(10px, 1fr));
  column-gap: 2rem;

  & > h2 {
    grid-column: 1 / -1;
  }

  & > svg {
    grid-row: span 2;
    align-self: center;
  }

  & > div {
    grid-row: span 2;
`

const Description = styled.div `
  grid-area: Description;
  line-height: 3.2rem;
`

const Links = styled.div `
  grid-area: Links;
`

const History = styled.div `
  grid-area: History;
`

const Inventory = () => {
  return (
    <Layout>
      <Name>
        <h2>Name</h2>
        <h2>Reverse Transcriptase</h2>
        <ButtonOutline text={'Edit'} />
      </Name>

      <Barcode>
        <h2>Barcode</h2>
        <img src={barcodeIcon} alt={"barcode icon"}/>
        <p>98723490238</p>
      </Barcode>

      <Location>
        <h2>Location</h2>
        <div>
          <h4>Freezer</h4>
          <img src={freezerIcon} alt={"freezer icon"}/> 
          <p>20</p>
        </div>
        <div>
          <h4>Shelf</h4>
          <img src={shelfIcon} alt={"shelf icon"}/>
          <p>4</p>
        </div>
        <div>
          <h4>Box</h4>
          <img src={boxIcon} alt={"box icon"}/>
          <p>25</p>
        </div>
        <div>
          <h4>Well Plate</h4>
          <img src={wellPlateIcon} alt={"well plate icon"}/>
          <p>8</p>
        </div>
        <p>F20.4.25.8</p>
      </Location>

      <Amount>
        <h2>Amount</h2>
        <Chemical />
        <div>
          <h4>Stockpile Goal</h4>
          <p>1200mg</p>
        </div>
        <div>
          <h4>Current Total</h4>
          <p>200mg</p>
        </div>
        <div>
          <h4>Type</h4>
          <p>Enzyme</p>
        </div>
      </Amount>

      <Description>
        <h2>Description</h2>
        <p>DNA polymerase enzyme that transcribes single-stranded RNA into DNA. This enzyme is able to synthesize a double helix DNA once the RNA has been reverse transcribed in a first step into a single-strand DNA. RNA viruses, such as retroviruses, use the enzyme to reverse-transcribe their RNA genomes into DNA, which is then integrated into the host genome and replicated along with it. During the replication of some DNA viruses, such as the hepadnaviruses or pararetroviruses, also carrying a RT, the DNA genome is transcribed to RNA that serves as a template to make new viral DNA strands.</p>
      </Description>

      <Links>
        <h2>Links</h2>
        <ul>
          <li>
            <a href='https://www.sciencedirect.com/topics/neuroscience/reverse-transcriptase'>https://www.sciencedirect.com/topics/neuroscience/reverse-transcriptase</a>
          </li>
        </ul>
      </Links>

      <Metadata />

      <History>
        <h2>History</h2>
        <HistoryList />
      </History>

    </Layout>
  )
}

export default Inventory;