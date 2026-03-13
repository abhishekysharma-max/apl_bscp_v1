import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { AuthService } from '../../services/auth.service';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private common = inject(CommonService);
  private auth = inject(AuthService);
  private router = inject(Router);
  cardData: any;
  ngOnInit() {
    let role = this.auth.getUserDetails();
    if (role == 'Abhishek Sharma (IN)') {
      this.cardData = this.common.getDashboardCards('admin');
      console.log('CARD DATA:: ', this.cardData);
    }
  }

  navigationFn(title: string) {
    switch (title) {
      case 'User Management':
        this.router.navigateByUrl('/user-management');
        return;

      default:
        console.log('__-_-__');
    }
  }
}
