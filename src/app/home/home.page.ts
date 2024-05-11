import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formulario:string = 'login';
  users: any;

  constructor() {}

  chargeForm() {
    this.formulario=='login' ? this.formulario = 'register': this.formulario='login'
  }

}
