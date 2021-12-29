import React from 'react';
// Styled Components
import styled from 'styled-components';
import { CombinedStyledLayout } from '../../styled-components/workspace-layout';
import { device } from '../../styled-components/responsive';
// React Router
import { Link, useLocation } from "react-router-dom";
// Material UI
import Typography from '@mui/material/Typography';
// My React Components
import ButtonPropped from '../../ButtonPropped';
import Metadata from '../microcomponents/Metadata';
import Links from '../microcomponents/Links';
import HistoryList from '../microcomponents/HistoryList';
// Assets
import barcodeIcon from '../../../assets/images/barcode-icon.svg';
import freezerIcon from '../../../assets/images/freezer-icon.svg';
import shelfIcon from '../../../assets/images/shelf-icon.svg';
import boxIcon from '../../../assets/images/box-icon.svg';
import wellPlateIcon from '../../../assets/images/well-plate-icon.svg';
import {ReactComponent as Chemical} from '../../../assets/images/inventory-icon.svg';

const Layout = styled(CombinedStyledLayout) `
  grid-template-columns: minmax(10px, 1fr);
  grid-template-rows: repeat(8, max-content);
  grid-template-areas:
    "Name"
    "Barcode"
    "Description"
    "Location"
    "Amount"
    "Links"
    "Metadata"
    "History";

    @media ${device.laptop} {
      grid-template-columns: repeat(2, minmax(10px, 1fr));
      grid-template-rows: repeat(4, min-content) repeat(2, minmax(min-content, 1fr));
      grid-template-areas: 
        "Name Name Metadata"
        "Barcode Barcode History"
        "Location Location History"
        "Amount Amount History"
        "Description Description History"
        "Links Links History";
    }
`

const Name = styled.div `
  grid-area: Name;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, min-content);

  & > a {
    grid-row: 3 / 4;
    margin-top: 1rem;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    grid-template-rows: repeat(2, min-content);

    & > a {
      grid-row: 1 / -1;
      grid-column: 2 / 3;
      place-self: center;
      margin-top: 0;
    }
  }
`

const Barcode = styled.div `
  grid-area: Barcode;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, min-content);
  column-gap: 2rem;

  & > h6 {
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
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  grid-template-rows: max-content minmax(10px, 1fr) max-content;
  column-gap: 2rem;

  & > h6 {
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
  grid-template-columns: max-content repeat(3, minmax(30px, 1fr));
  grid-template-rows: max-content repeat(2, minmax(10px, 1fr));
  column-gap: 2rem;

  & > h6 {
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
`

const History = styled.div `
  grid-area: History;
`

const Inventory = () => {
  const location = useLocation();

  return (
    <Layout>
      <Name>
        <Typography variant="h6" gutterBottom>Name</Typography>
        <Link to={`${location.pathname}/Edit`}>
          <ButtonPropped xpadding={1.2} ypadding={1.5} width={10} text={'Edit'} />
        </Link>
        <Typography variant="h6" gutterBottom>Reverse Transcriptase</Typography>
      </Name>

      <Barcode>
        <Typography variant="h6" gutterBottom>Barcode</Typography>
        <img src={barcodeIcon} alt={"barcode icon"}/>
        <Typography variant="body1">98723490238</Typography>
      </Barcode>

      <Location>
        <Typography variant="h6" gutterBottom>Location</Typography>
        <div>
          <Typography variant="subtitle1">Freezer</Typography>
          <img src={freezerIcon} alt={"freezer icon"}/> 
          <Typography variant="body1">20</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">Shelf</Typography>
          <img src={shelfIcon} alt={"shelf icon"}/>
          <Typography variant="body1">4</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">Box</Typography>
          <img src={boxIcon} alt={"box icon"}/>
          <Typography variant="body1">25</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">Well Plate</Typography>
          <img src={wellPlateIcon} alt={"well plate icon"}/>
          <Typography variant="body1">8</Typography>
        </div>
        <Typography variant="body1">F20.S4.B25.W8</Typography>
      </Location>

      <Amount>
        <Typography variant="h6" gutterBottom>Amount</Typography>
        <Chemical />
        <div>
          <Typography variant="subtitle1">Stockpile Goal</Typography>
          <Typography variant="body1">1200mg</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">Current Total</Typography>
          <Typography variant="body1">200mg</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">Type</Typography>
          <Typography variant="body1">Enzyme</Typography>
        </div>
      </Amount>

      <Description>
        <Typography variant="h6" gutterBottom>Description</Typography>
        <Typography variant="body1">DNA polymerase enzyme that transcribes single-stranded RNA into DNA. This enzyme is able to synthesize a double helix DNA once the RNA has been reverse transcribed in a first step into a single-strand DNA. RNA viruses, such as retroviruses, use the enzyme to reverse-transcribe their RNA genomes into DNA, which is then integrated into the host genome and replicated along with it. During the replication of some DNA viruses, such as the hepadnaviruses or pararetroviruses, also carrying a RT, the DNA genome is transcribed to RNA that serves as a template to make new viral DNA strands.</Typography>
      </Description>

      <Links />

      <Metadata />

      <History>
        <Typography variant="h6" gutterBottom>History</Typography>
        <HistoryList />
      </History>

    </Layout>
  )
}

export default Inventory;