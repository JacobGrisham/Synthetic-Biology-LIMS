// The main job of this React component is to connect React to Redux and to add routes for the landing, login/register, and LIMS

// React
import React from 'react';
// React Router
import { Routes, Route } from "react-router-dom";
// My React Components
import ErrorBoundary from './ErrorBoundary';
import LIMS from './LIMS/LIMS';
import Home from './home/Home';
import Register from './home/Register';
import LogIn from './home/LogIn';
import FouOFour from './LIMS/microcomponents/404';
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
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/*" element={<LIMS />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<LogIn />} />
      </Routes>
    </ErrorBoundary>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;