import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
  dismissLogin() {
    this.modalController.dismiss();
  }

  login(form: NgForm) {
    const user = {
      username: form.value.email,
      password: form.value.password,
    };
    console.log('botón');
    const answer = this.authService.login(user).subscribe((respuesta => {
      console.log('user logged');
      console.log(respuesta.valueOf());
      const response = respuesta.valueOf();
      if (response === false) {
         const alert = this.alertCtrl.create({
          message: 'bad credentials',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel'
            }
          ]
        }).then((res) => {
          res.present();
        });
        this.dismissLogin();
      } else {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/dashboard');
      }
    }));

    this.loadingCtrl.create({
      message: 'Checking credentials...',
      duration: 1000
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        console.log('dismiss');
      });
    });
  }

}
/* 
    const answer = this.authService.login(user).subscribe((respuesta => {
      console.log('user logged');
    }, (err) => {
      this.loadingCtrl.dismiss().then( () => {
        const alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: 'Ok',
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    }));

    this.loadingCtrl = this.loadingCtrl.create({
      create: true,
    });
    this.loadingCtrl.present();
    console.log(answer);
  }
*/