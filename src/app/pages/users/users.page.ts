import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  formulario:string = 'login';

  constructor() {

   }

   ngOnInit() {
    //this.findAllUsers();
  }

  chargeForm() {
    this.formulario=='login' ? this.formulario = 'register': this.formulario='login'
  }

}
