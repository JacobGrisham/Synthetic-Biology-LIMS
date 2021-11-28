import React from 'react';
import styled from 'styled-components';
import SearchField from './SearchField';
import SearchResults from './SearchResults';
import ResultList from './ResultList';
import ErrorBoundary from '../ErrorBoundary';
import Dispense from './Dispense';
import AddIcon from '../../assets/images/add-icon.svg';
import FilterIcon from '../../assets/images/filter-icon.svg';

const Layout = styled.div `
  grid-column: search-results / workspace;
  display: grid;
  grid-template-rows: 230px 1fr;
  max-width: 540px;
  max-height: 100vh;
  background-color: rgb(245, 250, 254);
`

const Header = styled.section `
  display: grid;
  grid-template-rows: repeat(3, 70px);
  align-items: center;
  padding: 0px 30px
`

interface ISubHeaderProps {
  display?: string;
}

const SubHeader = styled.div<ISubHeaderProps> `
  display: ${props => props.display || 'flex'};
  justify-content: space-between;
`

const Title = styled.h1 `
  color: rgb(88, 107, 116);
  font-size: 30px;
  font-weight: 400;
`

const Button = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`

interface IFormFieldProps {
  onSearchChange?: any;
}

function Search(props: IFormFieldProps) {

  const { onSearchChange } = props

  return (
    <Layout>
      <Header>
        <SubHeader>
          <Title>Inventory</Title>
          <Button>
            <img src={AddIcon} alt={"add icon"}/>
          </Button>
        </SubHeader>

        <SubHeader>
          <SearchField aria-label='search field' searchChange={ onSearchChange }/>
          <Button>
            <img src={FilterIcon} alt={"filter search icon"}/>
          </Button>
        </SubHeader>

        <SubHeader display='block'>
          <Dispense aria-label='dispense field' searchChange={ onSearchChange }/>
        </SubHeader>
      </Header>

      <SearchResults>
        <ErrorBoundary>
          <ResultList />
        </ErrorBoundary>
      </SearchResults>

    </Layout>
  )
}

export default Search;