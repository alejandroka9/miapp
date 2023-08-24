import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  registrar() {
    if (this.username && this.password) {
      const user = {
        username: this.username,
        password: this.password
      };

      localStorage.setItem('usuario', JSON.stringify(user));
      this.navCtrl.navigateForward('/home');
      console.log('Registro exitoso:', user);
    } else {
      console.log('Por favor ingresa todos los campos requeridos.');
    }
  }
}
