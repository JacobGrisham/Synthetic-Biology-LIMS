import React, { memo } from 'react';
import styled from 'styled-components';
import dispenseIcon from '../../assets/images/dispense-icon.svg';
import rulerIcon from '../../assets/images/ruler-icon.svg';

interface IDispenseProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const Form = styled.form `
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`

const FlexBox = styled.div `
  // Had to create another flexbox div to properly display icon and input and each div in relation to one another
  display: flex;
  align-items: center;
`

interface IInputProps {
  width: number;
}

const Input = styled.input<IInputProps> `
  padding: 1.2rem;
  padding-left: 3.5rem;
  border-radius: 0.5rem;
  border-color: rgb(222, 222, 223);
  border-width: 1px;
  border-style: solid;
  background-color: white;
  width: ${props => props.width + 'rem'};
  margin-left: -3rem; // Causes icon to move inside input
`

const Icon = styled.img `
  z-index: 2;
`

const Button = styled.button `
  width: 12rem;
  padding: 1.2rem 2rem;
  text-decoration: none;
  text-align: center;
  color: rgb(38, 50, 56);
  background-color: rgb(210, 233, 252);
  border-radius: 0.5rem;
  border-color: rgb(222, 222, 223);
  border-width: 1px;
  border-style: solid;

  &:hover,
  &:focus {
    color: white;
    background-color: rgb(144, 202, 249);
  }

  &:active {
    color: white;
    background-color: rgb(33, 133, 208);
  }
`

const Select = styled.select `
  padding: 1.2rem 0.7rem;
  border-radius: 0.5rem;
  border-color: rgb(222, 222, 223);
  border-width: 1px;
  border-style: solid;
  background-color: white;
`

const SearchBox = ({ searchChange }: IDispenseProps) => {
  return (
    <Form action='#'>
      <FlexBox>
        <Icon src={dispenseIcon} alt={"icon of dispenser"} />
        <Input width={15} name='chemical' type='text' placeholder='Chemical' onChange={ searchChange } />
      </FlexBox>

      <FlexBox>
        <Icon src={rulerIcon} alt={"icon of ruler"} />
        <Input width={11.5} name='amount' type='number' min='0' placeholder='Amount' onChange={ searchChange } />
      </FlexBox>

      <Select name='units'>
        <option value=''>units</option>
        <option value='ml'>ml</option>
        <option value='g'>g</option>
      </Select>

      <Button type='submit'>Dispense</Button>
    </Form>
  )
}

// Prevent re-rendering of Searchbox using React.memo when there are no changes
export default memo(SearchBox);