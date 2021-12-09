import React from 'react';
// React Router
import { Link as RouterLink, useLocation } from "react-router-dom";
// Styled Components
import styled from 'styled-components';
// Material UI React Components
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link, { LinkProps } from '@mui/material/Link';
// My React Components
import SearchField from '../search/SearchField';
import SearchResults from '../search/SearchResults';
import ResultList from '../search/ResultList';
import ErrorBoundary from '../../ErrorBoundary';
import Dispense from '../inventory/Dispense';
// Images
import IconButton from '../buttons/IconButton';
import arrowIcon from '../../../assets/images/arrow-icon.svg';
import addIcon from '../../../assets/images/add-icon.svg';
import filterIcon from '../../../assets/images/filter-icon.svg';

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
  padding: 0px 30px;
`

// interface ISubHeaderProps {
//   display?: string;
// }

const TopSubHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BottomSubHeader = styled.div `
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 1.5rem;
`

const Title = styled.h1 `
  color: rgb(88, 107, 116);
  font-size: 30px;
  font-weight: 400;
`

const IconButtons = styled.div `
  display: flex;
  width: 8rem;
  justify-content: space-between;
`

interface IFormFieldProps {
  onSearchChange?: any;
}

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

function Drawer(props: IFormFieldProps) {

  const { onSearchChange } = props
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Layout>
      <Header>
        <TopSubHeader>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return last ? (
                <Typography variant="h5" color="text.primary" key={to}>
                  {value}
                </Typography>
              ) : (
                <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                  <Typography variant="h5" key={to}>
                    {value}
                  </Typography>
                </LinkRouter>
              );
            })}
          </Breadcrumbs>
          <IconButtons>
            <IconButton key={0} tooltip={'Close'} src={arrowIcon} alt={"close sidebar icon"} />
            <RouterLink to={`${pathnames[0]}/Add`}>
              <IconButton key={1} tooltip={'Add'} src={addIcon} alt={"add icon"} />
            </RouterLink>
          </IconButtons>
        </TopSubHeader>

        <BottomSubHeader>
          <SearchField aria-label='search field' searchChange={ onSearchChange }/>
          <IconButton key={2} tooltip={'Filter'} src={filterIcon} alt={"filter search icon"} />
        </BottomSubHeader>

        {/* <SubHeader display='block'>
          <Dispense aria-label='dispense field' searchChange={ onSearchChange }/>
        </SubHeader> */}
      </Header>

      <SearchResults>
        <ErrorBoundary>
          <ResultList />
        </ErrorBoundary>
      </SearchResults>

    </Layout>
  )
}

export default Drawer;