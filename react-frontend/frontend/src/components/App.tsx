// The main job of this React component is
// 1. To connect React to Redux
// 2. To define the react-router routes

// React
import React from 'react';
// React Router
import { Routes, Route } from "react-router-dom";
// My React Components
import ErrorBoundary from './base/ErrorBoundary';
import LIMS from './LIMS/LIMS';
import Home from './home/Home';
import Register from './home/Authentication/Register';
import LogIn from './home/Authentication/LogIn';
import NotFound from './base/placeholders/Error';
import NotFoundImage from '../assets/images/404.svg';
// Constants
import { routes, nestedRoutes } from '../constants/routes-and-navbar-icons';
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
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
        <Route path="lims" element={<LIMS />}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              />
            ))}
          {nestedRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              />
            ))}
            <Route path="*" element={<NotFound image={NotFoundImage}/>} />
        </Route>
        <Route path="*" element={<NotFound image={NotFoundImage}/>} />
      </Routes>
    </ErrorBoundary>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;