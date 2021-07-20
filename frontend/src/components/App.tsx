// React
import React from 'react';
import Home from './Home'
import ErrorBoundary from './ErrorBoundary'
// Redux
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { requestCompanies } from '../redux/actions/actions';

export interface ICompany {
  id: number;
  name: string;
  tier: string;
}

interface IAppState {
  compaines: Array<ICompany>;
  requestCompanies: any;
}

interface IAppProps {
  companies: any;
  isPending: boolean;
  onRequestOfCompanies?: any;
}

const mapStateToProps = (state: IAppState) => {
  return {
    companies: state.requestCompanies.companies,
    isPending: state.requestCompanies.isPending,
    error: state.requestCompanies.error
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, void, AnyAction>) => {
  return {
    onRequestOfCompanies: () => dispatch(requestCompanies())
  }
}

const App = (props: IAppProps) => {
  return (
    <ErrorBoundary>
      <Home {...props}/>
    </ErrorBoundary>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);