import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  nome: string = '';
  senha: string = '';

  constructor(private loginService: LoginService) {}

  logar() {
    if (this.nome === 'admin' && this.senha === 'admin123') {
      this.loginService.acessar();
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}
