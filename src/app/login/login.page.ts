import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  async login() {
    if (this.username === 'manuel' && this.password === '1234') {
      this.navCtrl.navigateForward('/login2'); 
    } else {
      await this.presentAlert();
      this.navCtrl.navigateForward('');
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Credenciales inválidas',
      message: 'El nombre de usuario o la contraseña son incorrectos.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}

