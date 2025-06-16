// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import configJson from "./auth_config.json";

createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain={configJson.domain}
  clientId={configJson.clientId}
  authorizationParams={{
    connection: 'Hooli-Azure-AD',
    response_type: 'code',
    redirect_uri: 'https://authorization-params-connection-que-rose.vercel.app/callback',
  }}
>

    <App />
  </Auth0Provider>
);
