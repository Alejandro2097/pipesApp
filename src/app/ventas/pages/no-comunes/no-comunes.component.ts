import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
  nombre: string = 'Alejandro';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }
  //i18nPlural
  clientes:string [] = ['Maria','Alejandro', 'Marco','Santiago','Eduardo','Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }
  cambiarCliente(){
    this.nombre = 'Susanita';
    this.genero = 'femenino';
  }
  borrarCliente(){
    this.clientes.pop();
  }
  //KeyValue Pipe
  persona = {
    nombre: 'Alejandro',
    edad: '24',
    direccion: 'Bogota, Colombia'
  }
  //JSON pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ];
  //Async Pipe
  miObserbable = interval(1000);
  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve("Fin de la promesa")
    },3500);
  })
}
