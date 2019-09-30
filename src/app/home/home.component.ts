import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private appService: AppService, private router: Router) {
    this.appService.pageTitle = 'Home';
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
