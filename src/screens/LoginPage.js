import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUpClick = () => {
    navigate('/register');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/welcomePage');
      } else {

        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className='loginOuterPage'>
        <div className='innerLogin'>
          <div className='innerOne'>
            <img 
              src="https://t4.ftcdn.net/jpg/00/31/33/13/360_F_31331324_bqXgqwmlnnXaOeXwFv8CrO6oMHpAKPum.jpg" 
              alt="User Signup" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
          <div className='innerTwo'>
            <p style={{fontSize:'25px', fontWeight: '700', color:'blue',fontfamily: 'ui-rounded'}}>USER LOGIN</p>
            <TextField 
              id="email" 
              label="Email" 
              variant="standard" 
              sx={{ width: '300px' }} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              sx={{ width: '300px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
              variant="contained" 
              color="success" 
              style={{ marginTop: '2%' }} 
              onClick={handleLogin}
            >
              Login
            </Button>
            <p className='signup-text' onClick={handleSignUpClick}>Sign up here</p>
          </div>
        </div>
      </div>
    </>
  );
}
