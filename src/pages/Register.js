import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Navigate } from "react-router-dom";
import { emailValidator } from "./helpers/emailValidator";
import { passwordValidator } from "./helpers/passwordValidator";
import { register } from "../usersApi";
import { useState, useEffect } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Destino Posadas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Register = ({activeMenu, setActiveMenu, activeNavBar, setActiveNavBar}) => {
  const [password, setPassword] = useState({value: ""});
  const [email, setEmail] = useState({value: ""});

  useEffect(() => {
    setActiveMenu(false);
    setActiveNavBar(false);
}, []);

  async function registroConValidacionDatos(emailIn, nombreIn, paswordIn) {
    const emailError = emailValidator(emailIn);
    const passwordError = passwordValidator(paswordIn);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    onRegisterExecute(emailIn, nombreIn, paswordIn);
  }

  // const onLoginPressed = () => {
  //   const emailError = emailValidator(emailIn);
  //   const passwordError = passwordValidator(paswordIn);
  //   if (emailError || passwordError) {
  //     setEmail({ ...email, error: emailError });
  //     setPassword({ ...password, error: passwordError });
  //     return;
  //   }
  //   onLoginExcecute();
  // };


  let navigate = useNavigate(); 

  async function onRegisterExecute(emailIn, nombreIn, paswordIn) {
    setActiveNavBar(true);
    setActiveMenu(true);
    return register(emailIn, nombreIn, paswordIn)
      .then((jsonResp) => {
        // token
      })
      .catch((e) => {
        //alert("Credenciales inválidas");
        //setPassword({ ...password, error: "Email o contraseña inválidos." });
      });

  }



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const datos = {
      email: { value: data.get('email') },
      password:{ value: data.get('password') },
    }
    
    setEmail(data.get('email'));
    setPassword(data.get('password'));
    
    registroConValidacionDatos(data.get('email'), data.get('nombre'), data.get('password'));

    if (!token) {
      //alert("Credenciales inválidas");
    } else {
      navigate('/usuarios');
    }
  };

  const token = sessionStorage.getItem("token");

  return (
    <>
        
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear cuenta
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre y Apellido"
              name="nombre"
              autoComplete="nombre"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Dirección de Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              onSubmit={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Cuenta
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"¿Ya posee una cuenta? Ingresar"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}

export default Register;

