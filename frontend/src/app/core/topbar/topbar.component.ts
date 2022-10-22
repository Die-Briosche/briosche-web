import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [{
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        window.location.href = 'https://briosche.de';
      }
    }];
  }

}
