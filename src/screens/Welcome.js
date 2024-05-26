import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <div className='welcomeOuterPage'>
        <div className='innerWelcome'>
          <div className='welcomeMessage'>
            <p style={{ fontSize: '35px', fontWeight: '700', color: 'green', fontFamily: 'ui-rounded', textAlign: 'center' }}>
              Welcome to the Dashboard!
            </p>
            <p style={{ fontSize: '20px', fontWeight: '400', color: 'black', fontFamily: 'ui-rounded', textAlign: 'center' }}>
              You have successfully logged in.
            </p>
            <Button 
              variant="contained" 
              color="error" 
              style={{ marginTop: '2%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
