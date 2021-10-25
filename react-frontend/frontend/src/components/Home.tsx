import React, { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styled-components/theme';
import NavBar from './NavBar';
import Header from './Header';
import CompanyTable from './CompanyTable';
import Footer from './Footer';
import Background from '../assets/images/header-background.svg';

interface IHomeProps {
  companies: any;
  isPending: boolean;
  onRequestOfCompanies?: any;
}

const Layout = styled.main`
  display: grid;
  grid-template-rows: [hero-start] 100vh [hero-end table-start] minmax(10rem, 1fr) [table-end footer-decoration-start] minmax(10rem, 1fr) [footer-decoration-end footer-start] minmax(10rem, 15rem) [footer-end];
  background-image: url(${Background});
  background-size: 100vw;
  background-repeat: no-repeat;
`

const Home = (props: IHomeProps) => {

  const { companies, isPending, onRequestOfCompanies } = props

  useEffect(() => {
    onRequestOfCompanies();
  }, [onRequestOfCompanies])

  return isPending ? <h1>Loading...</h1> : (
    <Layout>
      <GlobalStyle />
      <NavBar />
      <Header />
      <CompanyTable 
        companies={companies}
      />
      <Footer />
    </Layout>
  );
}

export default Home;