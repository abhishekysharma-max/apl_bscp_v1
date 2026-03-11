import { Injectable } from '@angular/core';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, loginRequest } from '../constants/msal.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private msalInstance = new PublicClientApplication(msalConfig);

  async login() {
    await this.msalInstance.initialize();

    const result = await this.msalInstance.loginRedirect(loginRequest);
    console.log('Login Success');
  }

  async handleRedirect() {
    await this.msalInstance.initialize();

    const result: AuthenticationResult | null = await this.msalInstance.handleRedirectPromise();

    if (result) {
      console.log('RESULT:: ', result);

      return result;
    }

    return null;
  }

  async logout() {
    await this.msalInstance.logoutPopup();
  }
}
