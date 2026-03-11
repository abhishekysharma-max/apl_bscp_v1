import { Configuration, BrowserCacheLocation } from '@azure/msal-browser';
import { AUTH_CONFIG } from './auth.config';

export const msalConfig: Configuration = {
  auth: {
    clientId: AUTH_CONFIG.clientId,
    authority: `https://login.microsoftonline.com/${AUTH_CONFIG.tenantId}`,
    redirectUri: 'http://localhost:4200/',
  },

  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
  },
};

export const loginRequest = {
  scopes: ['openid', 'profile', 'User.Read'],
};
