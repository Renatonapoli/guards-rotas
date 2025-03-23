import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../utils/login';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  usuario: UsuarioLogin = { usuario: 'admin', senha: 'admin123' };

  constructor(private router: Router) {}

  acessar() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    this.router.navigate(['home']);
  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['']);
  }
}
