import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
       {
         label: 'Pipes en Angular',
         icon: 'pi pi-desktop',
         items: [
           {
             label: 'Textos y flechas',
             icon: 'pi pi-align-left',
             routerLink: '/'
           },
           {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
           },
           {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
           }
         ]
       },
       {
         label: 'Pipes personalizados',
         icon: 'pi pi-cog'
       }
    ];
  }

}
