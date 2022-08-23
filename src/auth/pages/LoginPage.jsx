import { useDispatch, useSelector } from 'react-redux';
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import { chenkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'papau84@gmail.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);


  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    console.log({ email, password });
    dispatch(chenkingAuthentication());
  }

  const onGoogleSignIn = () => {
    console.log('google sign in');
    dispatch(startGoogleSignIn());
  }



  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 6 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@gmail.com'
              fullWidth
              name="email"
              // value={ email }
              onChange={onInputChange}

            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="password"
              // value={ password }
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
              <Button
                disabled={ isAuthenticating }
                type="submit"
                variant='contained'
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
              <Button
                disabled={ isAuthenticating }
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>

        </Grid>
      </form>

    </AuthLayout>





  )
}
