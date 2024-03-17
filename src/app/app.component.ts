import { Component } from '@angular/core';
// import { UserService } from './users/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe-penjualan-angular';

  /**
   * 
   * @param userService Service diambil dari module users dan sifatnya global
   * tanpa perlu users module di import ke app module (kecuali component).
   */
  // constructor(private userService: UserService) {
  //   console.log(userService.isAuthenticated)
  // }
}
