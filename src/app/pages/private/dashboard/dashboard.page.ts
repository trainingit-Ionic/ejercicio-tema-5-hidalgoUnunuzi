import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController
  ) {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

  logout() {
    console.log('adios');
    this.authService.logout();
    this.navCtrl.navigateRoot('/home');
  }
}
