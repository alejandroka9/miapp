import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  username: string = '';
  password: string = '';
  fechaNacimiento: string = '';
  nivelEducacional: string = '';

  constructor(private navCtrl: NavController) {}

  registrar() {
    if (this.username && this.password && this.fechaNacimiento && this.nivelEducacional) {
      const user = {
        username: this.username,
        password: this.password,
        fechaNacimiento: this.fechaNacimiento,
        nivelEducacional: this.nivelEducacional
      };

      localStorage.setItem('usuario', JSON.stringify(user));
      console.log('Registro exitoso:', user);

      this.navCtrl.navigateForward('/home'); // Redirige al usuario a la página de inicio
    } else {
      console.log('Por favor ingresa todos los campos requeridos.');
    }
  }

  limpiarCampos() {
    this.username = '';
    this.password = '';
    this.fechaNacimiento = '';
    this.nivelEducacional = '';
  }
}
