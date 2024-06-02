import React, { useState } from 'react';
import { FormControl, FormHelperText, Grid, Container, Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/listar-tarefa');
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormHelperText id="login_helper_text"> Login: </FormHelperText>
            <TextField
              id="login"
              aria-describedby="login_helper_text"
              value={login}
              onChange={e => { setLogin(e.target.value) }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormHelperText id="senha_helper_text"> Senha: </FormHelperText>
            <TextField
              id="senha"
              aria-describedby="senha_helper_text"
              value={senha}
              onChange={e => { setSenha(e.target.value) }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Logar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
