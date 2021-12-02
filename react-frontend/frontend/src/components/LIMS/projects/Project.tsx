import React from 'react';
import styled from 'styled-components';
import ButtonOutline from '../buttons/ButtonOutline';
import JobListItem from '../jobs/JobListItem';
import Table from '../jobs/Table';
import Metadata from '../microcomponents/Metadata';
import HistoryList from '../microcomponents/HistoryList';
import Button from '@mui/material/Button';

const Layout = styled.section `
  overflow-y: scroll;
  height: calc(100vh - 1rem);
  display: grid;
  padding: 1rem 2rem 0 4rem;
  grid-template-columns: repeat(4, minmax(10px, 1fr));
  grid-template-rows: repeat(4, min-content) repeat(2, minmax(10px, 1fr));
  row-gap: 1rem;
  grid-template-areas: 
    "Name Name ProjectStatus Metadata"
    "Description Description Description History"
    "Jobs Jobs Jobs History"
    "ProtocolStatus ProtocolStatus ProtocolStatus History"
    "Links Links Links History";
  
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

const ProjectStatus = styled.div `
  grid-area: ProjectStatus;
`

const Description = styled.div `
  grid-area: Description;
  line-height: 3.2rem;
`

const Jobs = styled.div `
  grid-area: Jobs;
`

const ProtocolStatus = styled.div `
  grid-area: ProtocolStatus;
`

const Links = styled.div `
  grid-area: Links;
`

const History = styled.div `
  grid-area: History;
`

const JobStatus = () => {

  return (
    <Layout>
      <Name>
        <h2>Name</h2>
        <h2>DNA Synthesis</h2>
        <ButtonOutline text={'Edit'} />
      </Name>

      <ProjectStatus>
        <h2>Status</h2>
        <p>In Progress</p>
      </ProjectStatus>

      <Description>
        <h2>Description</h2>
        <p>DNA polymerase enzyme that transcribes single-stranded RNA into DNA. This enzyme is able to synthesize a double helix DNA once the RNA has been reverse transcribed in a first step into a single-strand DNA. RNA viruses, such as retroviruses, use the enzyme to reverse-transcribe their RNA genomes into DNA, which is then integrated into the host genome and replicated along with it. During the replication of some DNA viruses, such as the hepadnaviruses or pararetroviruses, also carrying a RT, the DNA genome is transcribed to RNA that serves as a template to make new viral DNA strands.</p>
      </Description>

      <Jobs>
        <h2>View and Start Jobs</h2>
        <ul>
          <JobListItem />
          <JobListItem />
        </ul>
      </Jobs>

      <ProtocolStatus>
        <h2>Protocol Status</h2>
        <Table />
      </ProtocolStatus>

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

export default JobStatus;