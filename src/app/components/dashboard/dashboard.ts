import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { AuthService } from '../../services/auth.service';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  imports: [Button],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private common = inject(CommonService);
  private auth = inject(AuthService);
  cardData: any;
  ngOnInit() {
    let role = this.auth.getUserDetails();
    if (role == 'Abhishek Sharma (IN)') {
      this.cardData = this.common.getDashboardCards('admin');
      console.log('CARD DATA:: ', this.cardData);
    }
  }
}
