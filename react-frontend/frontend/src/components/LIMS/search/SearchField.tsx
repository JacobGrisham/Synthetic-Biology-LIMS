import React, { memo } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const Form = styled.form `
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`

const Input = styled.input `
  padding: 1.2rem;
  border-radius: 0.5rem;
  border-color: rgb(222, 222, 223);
  border-width: 1px;
  border-style: solid;
  background-color: white;
  width: 100%;
`

interface ISearchFieldProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchField = ({ searchChange }: ISearchFieldProps) => {
  return (
    <Form action='#'>
      <Input type='search' placeholder='Search...' onChange={ searchChange } />
      {/* <TextField label="Search..." variant="outlined" /> */}
    </Form>
  )
}

// Prevent re-rendering of Searchbox using React.memo when there are no changes
export default memo(SearchField);