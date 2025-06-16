// Callback.js
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/'); // or your post-login landing page
    }
  }, [isLoading, isAuthenticated, navigate]);

  return <div>Logging you in…</div>;
};
export default Callback;
