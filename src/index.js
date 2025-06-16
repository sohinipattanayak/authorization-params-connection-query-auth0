// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const domain = "tactiq-nb.cic-demo-platform.auth0app.com";
const clientId = "43QDYNr9NOxnvx4AdNkz8rcVCxjArcHN";

createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
    connection: 'Hooli-Azure-AD',
    response_type: 'code',
    redirect_uri: 'http://localhost:3000/callback',
  }}
>

    <App />
  </Auth0Provider>
);
