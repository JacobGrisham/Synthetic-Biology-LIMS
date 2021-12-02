// The main job of this React component is to connect React to Redux

// React
import React from 'react';
import LIMS from './LIMS/LIMS'
import ErrorBoundary from './ErrorBoundary'
// Redux
// import { AnyAction } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { connect } from 'react-redux';
// import { requestCompanies } from '../redux/actions/actions';

// export interface ICompany {
//   id: number;
//   name: string;
//   tier: string;
// }

// interface IAppState {
//   compaines: Array<ICompany>;
//   requestCompanies: any;
// }

// interface IAppProps {
//   companies: any;
//   isPending: boolean;
//   onRequestOfCompanies?: any;
// }

// const mapStateToProps = (state: IAppState) => {
//   return {
//     companies: state.requestCompanies.companies,
//     isPending: state.requestCompanies.isPending,
//     error: state.requestCompanies.error
//   }
// }

// const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, void, AnyAction>) => {
//   return {
//     onRequestOfCompanies: () => dispatch(requestCompanies())
//   }
// }

const App = () => {
  return (
    <ErrorBoundary>
      <LIMS />
    </ErrorBoundary>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;