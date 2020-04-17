import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = this.authSerivce.afUser$;

  constructor(
    private authSerivce: AuthService
  ) {}

  title = 'dog-hunting';

  logout() {
    this.authSerivce.logout();
  }
}
