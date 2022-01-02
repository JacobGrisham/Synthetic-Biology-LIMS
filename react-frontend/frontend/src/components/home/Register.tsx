// Decided to implement the Register and Login forms with vanilla React (no libraries)
// 1. To understand how to build a form in React from scratch
// 2. To understand how to validate a form in scratch
// 3. To give me some appreciation for the heavy lifting that libraries provide

import React from 'react';
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
import useMediaQuery from '@mui/material/useMediaQuery';
// My React Components
import Copyright from './Copyright';
import { validator } from "./RegisterValidation";
import useForm from "./useForm";
// Assets
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as Visibility} from '../../assets/images/eye.svg';
import {ReactComponent as VisibilityOff} from '../../assets/images/eyestrikethrough.svg';

const theme = createTheme();

interface IFormInput {
  company: string,
  companyKey: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
}

const Register: React.FC<{}> = () => {
  const initState:IFormInput = {
    company: '',
    companyKey: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      company: data.get('company'),
      companykey: data.get('companyKey'),
      first: data.get('firstName'),
      last: data.get('lastName'),
      username: data.get('username'),
      password: data.get('password'),
    });
  };

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
    showCompanyKey: boolean;
    showPassword: boolean;
  }

  const [values, setValues] = React.useState<InputAdornmentState>({
    showCompanyKey: false,
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowCompanyKey = () => {
    setValues({
      ...values,
      showCompanyKey: !values.showCompanyKey,
    });
  };

  const handleMouseDownSecret = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const pastMobileScreen = useMediaQuery('(min-width:500px)');

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: pastMobileScreen ? 8 : 2,
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
              Register
            </Typography>
          </Box>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  id="company"
                  label="Company"
                  name="company"
                  autoComplete="organization"
                  defaultValue={state.company}
                  onChange={handleChange}
                  error={errors.company ? true : false}
                  helperText={errors.company ? errors.company : " "}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  required
                  variant="outlined"
                  error={errors.companyKey ? true : false}
                  >
                  <InputLabel htmlFor="companyKey">Company Key</InputLabel>
                  <OutlinedInput
                    type={values.showCompanyKey ? 'text' : 'password'}
                    id="companyKey"
                    label="Company Key"
                    name="companyKey"
                    defaultValue={state.companyKey}
                    onChange={handleChange}
                    error={errors.companyKey ? true : false}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle company key visibility"
                          onClick={handleClickShowCompanyKey}
                          onMouseDown={handleMouseDownSecret}
                        >
                          {values.showCompanyKey ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>{errors.companyKey ? errors.companyKey : " "}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="cc-given-name"
                  defaultValue={state.firstName}
                  onChange={handleChange}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName ? errors.firstName : " "}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="cc-family-name"
                  defaultValue={state.lastName}
                  onChange={handleChange}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName ? errors.lastName : " "}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
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
              </Grid>
              <Grid item xs={12}>
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
                    autoComplete="new-password"
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
                  <FormHelperText>Password must include one lowercase letter, one uppercase letter, one number, and one symbol</FormHelperText>
                  <FormHelperText>{errors && errors.password}</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to={'/login'}>
                  <Typography variant="body2">
                    Already have an account? Log In
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

export default Register;