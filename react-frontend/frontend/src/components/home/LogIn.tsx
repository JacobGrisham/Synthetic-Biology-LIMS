// Decided to implement the Register and Login forms with vanilla React (no libraries)
// 1. To understand how to build a form in React from scratch
// 2. To understand how to validate a form in scratch
// 3. To give me some appreciation for the heavy lifting that libraries provide

import * as React from 'react';
// React Router
import { Link as RouterLink} from "react-router-dom";
// Material UI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// My React Components
import Copyright from './Copyright';
import useForm from "./useForm";
// Assets
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as Visibility} from '../../assets/images/eye.svg';
import {ReactComponent as VisibilityOff} from '../../assets/images/eyestrikethrough.svg';


const theme = createTheme();

interface IFormInput {
  username: string,
  password: string,
}

const LogIn: React.FC<{}> = () => {
  const initState:IFormInput = {
    username: '',
    password: '',
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  const validator = (values:IFormInput, fieldName:string) => {
    let errors:any = {};
    switch (fieldName) {
      case 'username':
        validateUsername(values.username, errors);
        break;
      case 'password':
        validatePassword(values.password, errors);
        break;
      default:
    }
    return errors;
  };
  
  function validateUsername(username:any, errors:any) {
    let result = true;
    if (!username) {
      errors.username = "Please enter your username";
      result = false;
    }
    return result;
  }
  
  function validatePassword(password:any, errors:any) {
    let result = true;
    if (!password) {
      errors.password = "Please enter your password";
      result = false;
    }
    return result;
  }

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    state,
    errors,
  } = useForm({
    initState,
    callback: submit,
    validator
  });

  interface InputAdornmentState {
    showPassword: boolean;
  }

  const [values, setValues] = React.useState<InputAdornmentState>({
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownSecret = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  let isValidForm = Object.values(errors).filter(error => typeof error !== "undefined").length === 0;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '75%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <Box sx={{width: 135, transform: 'translateY(3px)'}}>
              <RouterLink to={'/'}>
                <Logo />
              </RouterLink>
            </Box>
            <Typography sx={{color: '#455a64'}} component="h1" variant="h4">
              Log in
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              autoFocus
              required
              fullWidth
              margin="normal"
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              defaultValue={state.username}
              onChange={handleChange}
              error={errors.username ? true : false}
              helperText={errors.username ? errors.username : " "}
              onBlur={handleBlur}
            />
            <FormControl
              fullWidth
              required
              variant="outlined"
              error={errors.password ? true : false}
              >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                type={values.showPassword ? 'text' : 'password'}
                id="password"
                label="Password"
                name="password"
                defaultValue={state.password}
                onChange={handleChange}
                error={errors.password ? true : false}
                onBlur={handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownSecret}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>{errors ? errors.password : " "}</FormHelperText>
            </FormControl>
            <Button
              fullWidth
              type="submit"
              disabled={!isValidForm}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink to={'#'}>
                  <Typography variant="body2">
                    Forgot password?
                  </Typography>
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to={'/register'}>
                  <Typography variant="body2">
                    Don't have an account? Register
                  </Typography>
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default LogIn;