import { useState } from 'react';
import GridComponent from '../components/grid/index.jsx';
import { TextField, Button, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!email || !senha) {
      setError('Preencha todos os campos!');
      return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    console.log('Cadastro realizado');
    navigate('/Central');
  };

  const handleNavigateToLogin = () => {
    navigate('/signin');
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <p>ADICIONE NO SEU CONSOLE:</p>
      <p>localStorage.setItem('email', 'seuemail@exemplo.com')</p>
      <p>localStorage.setItem('senha', 'suasenha123')</p>
      <GridComponent
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: '100%', height: '100%', padding: 0 }}
      >

        <GridComponent
          item
          xs={12}
          md={4}
          sx={{
            padding: 4,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: 2,
            textAlign: 'center',
            maxWidth: 400,
          }}
        >

          <Typography variant="h4" gutterBottom sx={{ color: '#003163', fontWeight: 'bold' }}>
            {t("Create Account")}
          </Typography>


          <Typography variant="subtitle1" gutterBottom sx={{ color: '#00A0E3', marginBottom: 4 }}>
            {t("Fill in the fields below to register.")}
          </Typography>


          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 3 }}
          />


          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            sx={{ marginBottom: 3 }}
          />


          {error && <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>{error}</Typography>}


          <Button
            variant="contained"
            fullWidth
            onClick={handleSignUp}
            sx={{
              backgroundColor: '#003163',
              color: '#FFFFFF',
              padding: '10px 20px',
              fontSize: '1rem',
              marginBottom: 2,
              '&:hover': {
                backgroundColor: '#002244',
              },
            }}
          >
            {t("Create Account")}
          </Button>


          <Typography variant="body2" sx={{ marginTop: 2 }}>
            {t("Already have an account?")}
            <Link
              href="#"
              onClick={handleNavigateToLogin}
              sx={{ color: '#00A0E3', textDecoration: 'none', fontWeight: 'bold' }}
            >
              {t("Login your account")}
            </Link>
          </Typography>
        </GridComponent>

      </GridComponent>
    </div>
  );
};

export default SignUp;
