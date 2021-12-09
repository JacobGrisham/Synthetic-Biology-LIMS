import React from 'react';
import styled from 'styled-components';
import Units from '../inventory/Units';
import {ReactComponent as Chemical} from '../../../assets/images/inventory-icon.svg';

type IButtonProps = {
  title: string
}

const Amount = styled.fieldset `
  grid-area: Amount;
  display: grid;
  grid-template-columns: repeat(4, max-content);
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

const ProtocolChemicalInputField = (props: IButtonProps) => {
  return (
    <Amount>
      <legend>{props.title} Amount</legend>
      <Chemical />
      <div>
        <input name='amount' type='number' min='0' placeholder='1200' />
        <Units />
      </div>
      <div>
        <label>Name</label>
        <input name='name' type='text' placeholder='name' />
      </div>
      <div>
        <label>Type</label>
        <input name='type' type='text' placeholder='enzyme' />
      </div>
    </Amount>
  )
}

export default ProtocolChemicalInputField;