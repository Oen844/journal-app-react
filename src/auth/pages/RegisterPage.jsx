import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

import { startCreatingUserWithEmailPassword } from '../../store/auth';


const formData = {
  email: 'papau84@gmail.com',
  password: '123465',
  displayName: 'Pau Egea'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo tiene que tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);



  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }



  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 6 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder='Pau Egea'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}

            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@gmail.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}

            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>

            <Grid
              item xs={12}
              sx={{ mt: 2 }}
              sm={6}
              display={!!errorMessage ? '': 'none'}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
              <Button
                disabled={ isCheckingAuthentication }
                type='submit'
                variant='contained'
                fullWidth>
                Crear cuenta
              </Button>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cunta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>

          </Grid>

        </Grid>
      </form>

    </AuthLayout>





  )
}
