import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  async login() {
    const storedUser = localStorage.getItem('usuario');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (this.username === parsedUser.username && this.password === parsedUser.password) {
        this.navCtrl.navigateForward('/login2'); 
      } else {
        await this.presentAlert();
        this.navCtrl.navigateForward('/home');
      }
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