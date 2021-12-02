import React from 'react';
import styled from 'styled-components';

const Select = styled.select `
padding: 1.2rem 0.7rem;
background-color: white;
border-radius: 0.5rem;
border-color: rgb(222, 222, 223);
border-width: 1px;
border-style: solid;
`

const Units = () => {
  return (
    <Select name='units'>
    <option value=''>units</option>
    <option value='ml'>ml</option>
    <option value='g'>g</option>
    </Select>
  )
}

// Prevent re-rendering of Searchbox using React.memo when there are no changes
export default Units;