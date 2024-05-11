import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { MenuOpts } from './interfaces/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuOptions: Observable<MenuOpts[]>;

  constructor(private dataService: DataService) {
    this.menuOptions = dataService.getMenuOpts();
    
  }
}
