import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from './components/shared/header/header';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('bscp');
  public readonly router = inject(Router);
  private auth = inject(AuthService);

  async ngOnInit() {
    const response = await this.auth.handleRedirect();
    if (response) {
      console.log('TOKEN :: ', response.idToken);
    }
  }
}
