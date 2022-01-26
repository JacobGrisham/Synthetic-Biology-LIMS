// The main job of this React component is
// 1. To connect React to Redux
// 2. To define the react-router routes

// React
import React from 'react';
// React Router
import { Routes, Route } from "react-router-dom";
// Material UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
// My React Components
import LIMS from './LIMS/LIMS';
import Home from './home/Home';
import Register from './home/Authentication/Register';
import LogIn from './home/Authentication/LogIn';
import NotFound from './base/placeholders/Error';
import NotFoundImage from '../assets/images/404.svg';
// Constants
import { AppRoutes } from '../constants/routes';
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

const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: 'rgb(144, 202, 249)'
          }
        }
      }
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
        <Route path="lims" element={<LIMS />}>
          {AppRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              />
            ))}
            <Route path="*" element={<NotFound error={'Error 404: Page Not Found'} image={NotFoundImage}/>} />
        </Route>
        <Route path="*" element={<NotFound error={'Error 404: Page Not Found'} image={NotFoundImage}/>} />
      </Routes>
    </ThemeProvider>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;