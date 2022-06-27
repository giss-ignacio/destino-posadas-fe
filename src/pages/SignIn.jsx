import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
import { login } from "../usersApi";
import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


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

const SignIn = ({activeMenu, setActiveMenu, activeNavBar, setActiveNavBar}) => {
  const [password, setPassword] = useState({value: ""});
  const [email, setEmail] = useState({value: ""});
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setActiveMenu(false);
    setActiveNavBar(false);
}, []);

  async function loginConValidacionDatos(emailIn, paswordIn) {
    const emailError = emailValidator(emailIn);
    const passwordError = passwordValidator(paswordIn);
    if (emailError || passwordError) {
      handleError();
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    onLoginExecute(emailIn, paswordIn);
  }

  let navigate = useNavigate(); 

  async function onLoginExecute(emailIn, paswordIn) {

    return login(emailIn, paswordIn)
      .then((jsonResp) => {
        // token
        sessionStorage.setItem("_id", jsonResp.user._id);
        sessionStorage.setItem("token", jsonResp.token);
        sessionStorage.setItem("rol", jsonResp.user.rol);
        sessionStorage.setItem("email", emailIn);
        sessionStorage.setItem("nombre", emailIn.split("@")[0]); // modificar el backend para devolver el nombre
        
        setActiveNavBar(true);
        setActiveMenu(true);
        navigate("/resumen");
      })
      .catch((e) => {
        alert("Credenciales inválidas");
        //setPassword({ ...password, error: "Email o contraseña inválidos." });
      });
  }

  const handleError = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        cerrar
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const datos = {
      email: { value: data.get('email') },
      password:{ value: data.get('password') },
    }
    
    setEmail(data.get('email'));
    setPassword(data.get('password'));    

    loginConValidacionDatos(data.get('email'), data.get('password'));

    if (!token) {
      //alert("Credenciales inválidas");
    } else {
      navigate('/resumen');
    }
  };

  const token = sessionStorage.getItem("token");

  return (
    <>
    
    {token && <Navigate to={"/resumen"} />}
    
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Credenciales inválidas"
      action={action}
      severity="error"
    />
    
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
            Ingresar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              onSubmit={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registro" variant="body2">
                  {"¿No tienes cuenta? Crear cuenta"}
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

export default SignIn;