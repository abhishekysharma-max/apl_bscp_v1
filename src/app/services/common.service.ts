import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { AUTH_CONFIG } from '../constants/auth.config';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  constructor(private http: HttpClient) {}

  ssoLogin() {
    const url = `https://login.microsoftonline.com/${AUTH_CONFIG.tenantId}/oauth2/v2.0/authorize` +
      `?client_id=${AUTH_CONFIG.clientId}` +
      `&response_type=token` +
      `&redirect_uri=${encodeURIComponent(AUTH_CONFIG.redirectUri)}` +
      `&scope=openid profile email` +
      `&response_mode=fragment` +
      `&state=12345`;

    // const url = `https://login.microsoftonline.com/04c72f56-1848-46a2-8167-8e5d36510cbc/oauth2/v2.0/authorize?client_id=43a228d1-e3b2-4cf8-a910-ceda2882dbd2&response_type=code&response_mode=query&redirect_uri=https://qa-aviio.adani.com/auth/redirect&scope=User.Read%20openid%20profile%20email%20offline_access&state=0&sso_reolad=true`
    window.location.href = url;
  }
}
