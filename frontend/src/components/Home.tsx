import React, { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styled-components/theme';
import Header from './Header';
import HeaderBackground from './HeaderBackground';
import CompanyTable from './CompanyTable';
import Footer from './Footer';
import FooterBackground from './FooterBackground';

interface IHomeProps {
  companies: any;
  isPending: boolean;
  onRequestOfCompanies?: any;
}

const Layout = styled.main`
  // display: grid;
  // grid-template-rows: [hero-start] 100vh [hero-end table-start] minmax(10rem, 1fr) [table-end footerbackground-start] minmax(10rem, 1fr) [footerbackground-end];
`

const Home = (props: IHomeProps) => {

  const { companies, isPending, onRequestOfCompanies } = props

  useEffect(() => {
    onRequestOfCompanies();
  }, [onRequestOfCompanies])

  return isPending ? <h1>Loading...</h1> : (
    <Layout>
      <GlobalStyle />
      <Header />
      <HeaderBackground />
      <CompanyTable 
        companies={companies}
      />
      <FooterBackground />
      <Footer />
    </Layout>
  );
}

export default Home;