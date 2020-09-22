import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: []
})
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuario().then( usuarios => {
      console.log(usuarios);
    });

    // const promesa = new Promise( ( resolve, reject ) => {

    //   if ( false ) {
    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Algo salió mal');
    //   }

    // });

    // promesa.then( (mensaje) => {
    //   console.log(mensaje);
    // })
    // .catch( error => console.log('Error en mi promesa', error));

    // console.log('Fin del Init');

  }

  getUsuario() {

   return new Promise( res => {

      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => res(body.data) );

    });

  }

}
