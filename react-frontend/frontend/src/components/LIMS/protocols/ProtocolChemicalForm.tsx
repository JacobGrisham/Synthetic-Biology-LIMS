import React from 'react';
import styled from 'styled-components';
import {
  Field,
  ErrorMessage } from 'formik';
  import { TextField } from 'formik-mui';
import Units from '../inventory/Units';
import {ReactComponent as Chemical} from '../../../assets/images/inventory-icon.svg';

type IProtocolChemicalInputFieldProps = {
  inputoutput: 'input' | 'output';
}

const Amount = styled.div `
  grid-area: Amount;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(3, max-content);
  column-gap: 2rem;

  & > legend {
    grid-column: 1 / -1;
  }

  & > svg {
    grid-row: span 2;
    align-self: center;
  }

  & > div {
    grid-row: span 2;
`

const Flex = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    & > div {
      margin-bottom: 1rem;
    }
`

const ProtocolChemicalInputField = (props: IProtocolChemicalInputFieldProps) => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Amount>
      <legend>{capitalizeFirstLetter(props.inputoutput)}s</legend>
      <Chemical />

      <Flex>
        <div>
          <Field 
            name={`${props.inputoutput}Amount`}
            type="number"
            label={`${capitalizeFirstLetter(props.inputoutput)} Amount`}
            component={TextField}
            variant="outlined"/>
          <ErrorMessage name={`${props.inputoutput}Amount`} />
        </div>
        <div>
          <Units unitsfor={`${props.inputoutput}Amount`}/>
        </div>
        <div>
          <Field 
            name={`${props.inputoutput}Name`}
            type="text"
            label={`${capitalizeFirstLetter(props.inputoutput)} Name`}
            component={TextField}
            variant="outlined"/>
          <ErrorMessage name={`${props.inputoutput}`} />
        </div>
        <div>
          <Field 
            name={`${props.inputoutput}Type`}
            type="text"
            label={`${capitalizeFirstLetter(props.inputoutput)} Type`}
            component={TextField}
            variant="outlined"/>
          <ErrorMessage name={`${props.inputoutput}Type`} />
        </div>
      </Flex>
    </Amount>
  )
}

export default ProtocolChemicalInputField;