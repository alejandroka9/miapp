import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario = {
    nombreUsuario: '',
    contrasena: ''
  };

  usuariosRegistrados: any[] = []; // Lista de usuarios registrados

  constructor(private router: Router) { } // Inyecta el Router

  ngOnInit() {
  }

  registrarUsuario() {
    // Verificar si el usuario ya está registrado por su nombre de usuario
    const usuarioExistente = this.usuariosRegistrados.find(u => u.nombreUsuario === this.usuario.nombreUsuario);
    
    if (usuarioExistente) {
      console.log('El nombre de usuario ya está en uso.');
    } else {
      // Agregar el usuario a la lista de usuarios registrados
      this.usuariosRegistrados.push({...this.usuario});
      console.log('Usuario registrado:', this.usuario);

      // Redirigir al usuario a la página de inicio
      this.router.navigate(['/home']);
    }
  }
}
