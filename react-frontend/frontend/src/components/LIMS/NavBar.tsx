import React from 'react';
import styled from 'styled-components';
import logoIcon from '../../assets/images/logo-icon.svg';
import searchIcon from '../../assets/images/lg-search-icon.svg';
import jobIcon from '../../assets/images/job-icon.svg';
import protocolIcon from '../../assets/images/protocol-icon.svg';
import inventoryIcon from '../../assets/images/inventory-icon.svg';
import microscopeIcon from '../../assets/images/microscope-icon.svg';
import machineIcon from '../../assets/images/machine-icon.svg';
import beakersIcon from '../../assets/images/beakers-icon.svg';
import boxesIcon from '../../assets/images/boxes-icon.svg';
import graphIcon from '../../assets/images/graph-icon.svg';
import bookIcon from '../../assets/images/book-icon.svg';
import userIcon from '../../assets/images/user-icon.svg';
import gearIcon from '../../assets/images/gear-icon.svg';

const Layout = styled.nav `
  grid-column: navbar / search-results;
  display: grid;
  max-width: 90px;
  max-height: 100vh;
  grid-template-rows: repeat(13, 1fr);
  padding: 10px 0 10px 0;
  background-color: rgb(210, 233, 252);
  place-items: stretch;
`

const Button = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: rgb(144, 202, 249);
  }

  &:active {
    background-color: rgb(33, 133, 208);
  }
`

const Navbar = () => {
  return (
    <Layout>
      <Button>
        <img src={logoIcon} alt={"button for accessing home"} />
      </Button>
      <Button>
        <img src={searchIcon} alt={"button for accessing database search"} />
      </Button>
      <Button>
        <img src={jobIcon} alt={"button for accessing jobs"} />
      </Button>
      <Button>
        <img src={protocolIcon} alt={"button for accessing protocols"} />
      </Button>
      <Button>
        <img src={inventoryIcon} alt={"button for accessing inventory"} />
      </Button>
      <Button>
        <img src={microscopeIcon} alt={"button for accessing equipment"} />
      </Button>
      <Button>
        <img src={machineIcon} alt={"button for accessing automated machines"} />
      </Button>
      <Button>
        <img src={beakersIcon} alt={"button for accessing products"} />
      </Button>
      <Button>
        <img src={boxesIcon} alt={"button for accessing shipping"} />
      </Button>
      <Button>
        <img src={graphIcon} alt={"button for accessing dashboard"} />
      </Button>
      <Button>
        <img src={bookIcon} alt={"button for accessing electronic lab notebook"} />
      </Button>
      <Button>
        <img src={userIcon} alt={"button for accessing user profile"} />
      </Button>
      <Button>
        <img src={gearIcon} alt={"button for accessing settings"} />
      </Button>
    </Layout>
  )
}

export default Navbar;