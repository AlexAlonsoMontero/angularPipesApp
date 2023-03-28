import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Pipes Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No coumnes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label:'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
    ];
  };

}
