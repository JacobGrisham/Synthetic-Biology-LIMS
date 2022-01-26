import React from 'react';
// React Router
import { Link, useLocation } from "react-router-dom";
// Styled Components
import styled from 'styled-components';
import { CombinedStyledLayout } from '../../styled-components/workspace-layout';
import { device } from '../../styled-components/responsive';
// Material UI
import Typography from '@mui/material/Typography';
// My React Components
import ButtonPropped from '../../base/ButtonPropped';
import JobListItem from '../jobs/JobListItem';
import Table from '../jobs/Table';
import Metadata from '../microcomponents/Metadata';
import HistoryList from '../microcomponents/HistoryList';
import Links from '../microcomponents/Links';

const Layout = styled(CombinedStyledLayout) `
  grid-template-columns: minmax(10px, 1fr);
  grid-template-rows: repeat(7, max-content);
  grid-template-areas: 
    "Name"
    "Description"
    "Jobs"
    "ProtocolStatus"
    "Links"
    "Metadata"
    "History";

  @media ${device.laptop} {
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    grid-template-rows: repeat(4, min-content) repeat(2, minmax(min-content, 1fr));
    grid-template-areas: 
      "Name Name Metadata"
      "Description Description History"
      "Jobs Jobs History"
      "ProtocolStatus ProtocolStatus History"
      "Links Links History";
  }
`

const Name = styled.div `
  grid-area: Name;
  display: grid;
  grid-template-columns: minmax(10px, 1fr);
  grid-template-rows: repeat(4, min-content);
  
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    grid-template-rows: repeat(2, min-content);

    & > a {
      margin-top: 1rem;
    }
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, minmax(10px, 1fr));
    grid-template-rows: repeat(2, min-content);
  
    & > a {
      grid-row: 1 / -1;
      grid-column: 3 / 4;
      place-self: center;
      margin-top: 0;
    }
  }
`

const Description = styled.div `
  grid-area: Description;
`

const Jobs = styled.div `
  grid-area: Jobs;
`

const ProtocolStatus = styled.div `
  grid-area: ProtocolStatus;
`

const History = styled.div `
  grid-area: History;
`

const JobStatus = () => {
  let location = useLocation();

  return (
    <Layout>
      <Name>
        <Typography id="name-title" variant="h6" gutterBottom>Name</Typography>
        <Typography id="status-title" variant="h6" gutterBottom>Status</Typography>
        <Typography id="name" variant="h6" gutterBottom>BioFuel</Typography>
        <Typography id="status" variant="body1">In Progress</Typography>
        <Link to={`${location.pathname}/edit`}>
          <ButtonPropped xpadding={1.2} ypadding={1.5} width={10} text={'EDIT'} />
        </Link>
      </Name>

      <Description>
        <Typography variant="h6" gutterBottom>Description</Typography>
        <Typography variant="body1">DNA polymerase enzyme that transcribes single-stranded RNA into DNA. This enzyme is able to synthesize a double helix DNA once the RNA has been reverse transcribed in a first step into a single-strand DNA. RNA viruses, such as retroviruses, use the enzyme to reverse-transcribe their RNA genomes into DNA, which is then integrated into the host genome and replicated along with it. During the replication of some DNA viruses, such as the hepadnaviruses or pararetroviruses, also carrying a RT, the DNA genome is transcribed to RNA that serves as a template to make new viral DNA strands.</Typography>
      </Description>

      <Jobs>
        <Typography variant="h6" gutterBottom>View and Start Jobs</Typography>
        <ul>
          <JobListItem />
          <JobListItem />
        </ul>
      </Jobs>

      <ProtocolStatus>
        <Typography variant="h6" gutterBottom>Protocol Status</Typography>
        <Table />
      </ProtocolStatus>

      <Links />

      <Metadata />

      <History>
        <Typography variant="h6" gutterBottom>History</Typography>
        <HistoryList />
      </History>
    </Layout>
  )
}

export default JobStatus;