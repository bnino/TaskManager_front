import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Users_Get } from '../../interfaces/interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent  implements OnInit {

  users: Users_Get[]= [];
  formulario: FormGroup;
  
  constructor(private usersService: UsersService) {
    this.formulario = new FormGroup({
      document: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      phone: new FormControl(),
      role: new FormControl()
    })
  }

  ngOnInit() {}
  
  onSubmit() {

    this.usersService.saveUser(this.formulario.value).subscribe(res => {
      console.log(res);
    });

  }

  findAllUsers(){
    this.usersService.findAllUsers().subscribe( (users: any) => {
      console.log(users);
    })
    
  }

  Cargar() {
    this.findAllUsers();
  }

}
