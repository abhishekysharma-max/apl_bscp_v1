import { Component, inject } from '@angular/core';
// import { CommonService } from '../../services/common.service';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  // private common = inject(CommonService);
  private auth = inject(AuthService);

  async login() {
    const token = await this.auth.login();
    console.log('TOKEN RECEIVED :: ', token);
  }
}
