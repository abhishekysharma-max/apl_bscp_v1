import { Injectable, inject } from '@angular/core';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, loginRequest } from '../constants/msal.config';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private msalInstance = new PublicClientApplication(msalConfig);
  private router = inject(Router);
  result: AuthenticationResult | null = null;

  async login() {
    await this.msalInstance.initialize();

    await this.msalInstance.loginRedirect(loginRequest);
  }

  async handleRedirect() {
    await this.msalInstance.initialize();

    this.result = await this.msalInstance.handleRedirectPromise();

    if (this.result) {
      console.log('RESULT:: ', this.result);
      this.router.navigateByUrl('/dashboard');
      return this.result;
    }

    return null;
  }

  async logout() {
    await this.msalInstance.logoutPopup();
  }

  getUserDetails() {
    if (this.result) {
      return this.result.account.name;
    }
    return '';
  }

  getAccounts() {
    this.msalInstance.initialize();
    return this.msalInstance.getAllAccounts();
  }
}
