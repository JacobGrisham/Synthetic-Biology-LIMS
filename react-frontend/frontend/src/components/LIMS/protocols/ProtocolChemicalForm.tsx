import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import Units from '../inventory/Units';
import {ReactComponent as Chemical} from '../../../assets/images/inventory-icon.svg';
// Utilities
import { capitalizeFirstLetter } from '../../../utils/change-letter-case';

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

type IProtocolChemicalInputFieldProps = {
  inputoutput: 'input' | 'output';
  touched: any;
  errors: any;
}

const ProtocolChemicalInputField = (props: IProtocolChemicalInputFieldProps) => {
  var proppedAmount = `${props.inputoutput}Amount`
  var proppedName = `${props.inputoutput}Name`
  var proppedType = `${props.inputoutput}Type`

  return (
    <Amount>
      <legend>{capitalizeFirstLetter(props.inputoutput)}s</legend>
      <Chemical />

      <Flex>
        <div>
          <Field 
            name={proppedAmount}
            type="number"
            label={`${capitalizeFirstLetter(props.inputoutput)} Amount`}
            component={TextField}
            variant="outlined"
            helperText={props.errors.proppedAmount && props.touched.proppedAmount ? props.errors.proppedAmount : " "}/>
        </div>
        <div>
          <Units unitsfor={`${props.inputoutput}Amount`}/>
        </div>
        <div>
          <Field 
            name={proppedName}
            type="text"
            label={`${capitalizeFirstLetter(props.inputoutput)} Name`}
            component={TextField}
            variant="outlined"
            helperText={props.errors.proppedName && props.touched.proppedName ? props.errors.proppedName : " "}/>
        </div>
        <div>
          <Field 
            name={proppedType}
            type="text"
            label={`${capitalizeFirstLetter(props.inputoutput)} Type`}
            component={TextField}
            variant="outlined"
            helperText={props.errors.proppedType && props.touched.proppedType ? props.errors.proppedType : " "}/>
        </div>
      </Flex>
    </Amount>
  )
}

export default ProtocolChemicalInputField;