import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Principal', url: '/' },
        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Promesa', url: 'promesa' },
        { titulo: 'RXJS', url: 'rxjs' },
      ]
    },
  ];

  constructor() { }
}
