import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import ProtocolChemicalForm from './ProtocolChemicalForm';
import microscopeIcon from '../../assets/images/microscope-icon.svg';
import bookIcon from '../../assets/images/book-icon.svg';
import addIcon from '../../assets/images/add-icon.svg';

const Layout = styled.details `
  & > div {
    padding: 1.2rem;
    border-radius: 0.5rem;
    border-color: rgb(222, 222, 223);
    border-width: 1px;
    border-style: solid;
  }
`

const Details = styled.fieldset `
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

const ProtocolStepForm = () => {
  return (
    <Layout open>
      <summary>Step 1</summary>

      <IconButton src={addIcon} alt={"add icon"} />

      <div>
        <Details>
          <legend>Equipment</legend>
          <img src={microscopeIcon} alt={"equipment icon"}/> 
          <input name='type' type='text' placeholder='PCR Chamber' />
        </Details>

        <ProtocolChemicalForm title="Input" />

        <Details>
          <legend>Instructions</legend>
          <img src={bookIcon} alt={"instructions icon"}/>
          <textarea name='description' placeholder='DNA polymerase enzyme that transcribes single-stranded RNA into DNA. This enzyme is able to synthesize a double helix DNA once the RNA has been reverse transcribed in a first step into a single-strand DNA. RNA viruses, such as retroviruses, use the enzyme to reverse-transcribe their RNA genomes into DNA, which is then integrated into the host genome and replicated along with it. During the replication of some DNA viruses, such as the hepadnaviruses or pararetroviruses, also carrying a RT, the DNA genome is transcribed to RNA that serves as a template to make new viral DNA strands.'></textarea>
        </Details>

        <ProtocolChemicalForm title="Output"/>
      </div>
    </Layout>
  )
}

export default ProtocolStepForm;