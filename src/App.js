// App.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const loginToIdP = () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'Hooli-Azure-AD',
      }
    });
  };

  return (
    <div style={styles.container}>
      {!isAuthenticated ? (
        <div style={styles.loginBox}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRkVurUuDXABkVFtPocYuJ2-7175TMxH_MQ&s" alt="Company Logo" style={styles.logo} />
          <h1 style={styles.heading}>Welcome to Evolve Music</h1>
          <p style={styles.description}>
            Please log in using your company’s single sign-on to access the platform.
          </p>
          <button style={styles.loginButton} onClick={loginToIdP}>
            Log In
          </button>
        </div>
      ) : (
        <div style={styles.sessionBox}>
          <h3>Hi {user.name}! Shall we play some music?</h3>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#00B189',
    padding: '1rem',
  },
  loginBox: {
    textAlign: 'center',
    maxWidth: '360px',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  logo: {
    height: '60px',
    marginBottom: '1rem',
  },
  heading: {
    margin: '0 0 1rem 0',
    fontSize: '1.8rem',
    color: '#333333',
  },
  description: {
    margin: '0 0 2rem 0',
    fontSize: '1rem',
    color: '#666666',
  },
  loginButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    color: '#ffffff',
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  sessionBox: {
    textAlign: 'center',
  },
};

export default App;
