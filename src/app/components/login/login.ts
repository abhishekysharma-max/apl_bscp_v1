import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private common = inject(CommonService);

  login() {
    this.common.ssoLogin();
  }
}
