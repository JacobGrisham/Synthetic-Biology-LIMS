import React from 'react';
// React Router
import { Link as RouterLink, useLocation } from "react-router-dom";
// Styled Components
import styled from 'styled-components';
import { device } from '../../styled-components/responsive';
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
import IconButton from '../buttons/IconButton';
import IconLink from '../buttons/IconLink';
// Images
import arrowIcon from '../../../assets/images/arrow-icon.svg';
import addIcon from '../../../assets/images/add-icon.svg';
import filterIcon from '../../../assets/images/filter-icon.svg';

interface INavBarLayoutProps {
  open: boolean;
}

const Layout = styled.section<INavBarLayoutProps> `
  grid-column: drawer / workspace;
  grid-template-rows: 230px 1fr;
  display: ${(props) => props.open ? 'grid;' : 'none;'}
  max-width: 768px;
  max-height: 100vh;
  background-color: rgb(245, 250, 254);
`

const Header = styled.div `
  display: grid;
  grid-template-rows: repeat(3, 70px);
  align-items: center;
  padding: 0px 30px;
`

// interface ISubHeaderProps {
//   display?: string;
// }

const TopSubHeader = styled.div `
  grid-row: 1 / 3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptopL} {
    grid-row: 1 / 2;
  }
`

const BottomSubHeader = styled.div `
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 1.5rem;

  @media ${device.laptopL} {
    grid-row: 2 / 3;
  }
`

const IconButtons = styled.div `
  display: flex;
  width: 8rem;
  justify-content: space-between;

  & > button {
    display: none;
  }

  @media ${device.mobileL} {
    & > button {
      display: block;
    }
  }
`

interface IDrawerProps {
  onSearchChange?: any;
  onHandleClose: Function;
  drawerToggle: boolean;
}

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

const Drawer: React.FC<IDrawerProps> = (props) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <Layout open={props.drawerToggle ? false : true}>
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
            <IconLink to={`${pathnames[0]}/Add`} tooltip={'Add'} src={addIcon} alt={"add icon"} />
            <IconButton onClick={props.onHandleClose} type="button" tooltip={'Close'} src={arrowIcon} alt={"close sidebar icon"} />
          </IconButtons>
        </TopSubHeader>

        <BottomSubHeader>
          <SearchField aria-label='search field' searchChange={ props.onSearchChange }/>
          <IconButton type="button" tooltip={'Filter'} src={filterIcon} alt={"filter search icon"} />
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