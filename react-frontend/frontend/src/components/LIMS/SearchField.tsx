import React, { memo } from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/images/search-icon.svg';

const Form = styled.form `
display: flex;
  justify-content: space-between;
  align-items: center;
}
`

const Input = styled.input `
  padding: 1.2rem;
  padding-left: 3.5rem;
  border-radius: 0.5rem;
  border-color: rgb(222, 222, 223);
  border-width: 1px;
  border-style: solid;
  background-color: white;
  width: 38rem;
  margin-left: -3rem; // Causes icon to move inside input
`

const Button = styled.button `
  z-index: 2;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`

interface ISearchFieldProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchField = ({ searchChange }: ISearchFieldProps) => {
  return (
    <Form action='#'>
      <Button><img src={searchIcon} alt={"initiate search icon"}/></Button>
      <Input type='search' placeholder='Search...' onChange={ searchChange } />
    </Form>
  )
}

// Prevent re-rendering of Searchbox using React.memo when there are no changes
export default memo(SearchField);