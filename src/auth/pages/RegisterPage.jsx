import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 6 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder='Pau Egea'
              fullWidth

            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@gmail.com'
              fullWidth

            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
              <Button variant='contained' fullWidth>
                Crear cuenta
              </Button>
            </Grid>
            

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>¿Ya tienes cunta?</Typography>
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
