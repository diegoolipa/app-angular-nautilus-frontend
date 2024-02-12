import { Component } from '@angular/core';
import {NbMenuItem, NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app_angular_form';

  constructor(private sidebarService: NbSidebarService) {
  }
  items: NbMenuItem[] = [
    {
      title: 'Menu principal',
      icon: 'home-outline',
      link: '/',
    },
    {
      title: 'Formularios',
      icon: 'search-outline',
      expanded: true,
      children: [
        {
          title: 'Formulario basico',
          icon: 'color-picker-outline',
          link: '/basic',
        },
        {
          title: 'Formulario basico 2',
          icon: 'color-picker-outline',
          link: '/basic-two',
        },
        {
          title: 'Formulario intermedio',
          icon: 'color-picker-outline',
          link: '/medium',
        },
        {
          title: 'Formulario intermedio 2',
          icon: 'color-picker-outline',
          link: '/medium-two',
        },
        {
          title: 'Formulario Avanzado',
          icon: 'music-outline',
          link: '/advanced',
        },
      ],
    },
    {
      title: 'Elemento',
      icon: 'search-outline',
      children: [
        {
          title: 'Mostrando Elementos',
          icon: 'color-picker-outline',
          link: '/elemento',
        },
        {
          title: 'Eventos',
          icon: 'color-picker-outline',
          link: '/elemento/events',
        },
        {
          title: 'Directivas Control',
          icon: 'charging-outline',
          link: '/elemento/control',
        },
      ],
    },

    {
      title: 'Shopping Bag',
      // children: [
      //   {
      //     title: 'First Product',
      //     icon: 'search-outline',
      //
      //   },
      //   {
      //     title: 'Second Product',
      //   },
      //   {
      //     title: 'Third Product',
      //   },
      // ],
    },

  ];

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
