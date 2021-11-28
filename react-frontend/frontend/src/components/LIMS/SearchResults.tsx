import React from 'react';
import styled from 'styled-components';
import Result from './Result';

type IResultProps = {
  children?: any;
}

const Results = styled.ul `
  overflow-y: scroll;
  height: calc(100vh - 230px);
`

function SearchResults(props: IResultProps) {
  return(
    <Results>
      <Result />
    </Results>
  )
}

export default SearchResults;