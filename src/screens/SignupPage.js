import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  const  handleLoginClick =  () => {
    navigate('/')
  }
  const handleSignup = async () => {
    const userData = {
      name: name,
      username: username,
      email: email,
      password: password
    };

   

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        
        setMessage('Signup successful!');
        setSeverity('success');
        setOpen(true);
  
      } else {
        setMessage('Signup failed. Please try again.');
        setSeverity('error');
        setOpen(true);
      }
    } catch (error) {
      console.log(error)
      setMessage('An error occurred. Please try again.');
      setSeverity('error');
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div className='loginOuterPage'>
        <div className='innerLogin'>
          <div className='innerOne'>
            <img 
              src="https://st2.depositphotos.com/3837271/6941/i/950/depositphotos_69417709-stock-photo-text-sign-up.jpg" 
              alt="User Signup" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className='innerTwo'>
            <p style={{fontSize:'25px', fontWeight: '700', color:'blue', fontFamily: 'ui-rounded'}}>USER SIGNUP</p>
            <TextField 
              id="name" 
              label="Name" 
              variant="standard" 
              sx={{ width: '300px' }} 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField 
              id="email" 
              label="Email" 
              variant="standard" 
              sx={{ width: '300px' }} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
              id="username" 
              label="User Name" 
              variant="standard" 
              sx={{ width: '300px' }} 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              onClick={handleSignup}
            >
              Signup
            </Button>
            <p className='signup-text' onClick={handleLoginClick}>Move to Login</p>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={12000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
