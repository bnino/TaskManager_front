import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users, Users_Get } from '../interfaces/interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  saveUser(user: Users){
    return this.http.post(`${apiUrl}/auth/register`, user);
  }
  
  findAllUsers(): Observable<Users_Get[]>{
    return this.http.get<Users_Get[]>(`${apiUrl}/users/findAllUsers`)
  }
  
}

