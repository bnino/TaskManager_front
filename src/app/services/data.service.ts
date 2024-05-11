import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuOpts } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<MenuOpts[]>('/assets/data/menuOpts.json')
  }
}
