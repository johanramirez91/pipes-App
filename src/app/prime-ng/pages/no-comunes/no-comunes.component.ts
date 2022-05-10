import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss'],
})
export class NoComunesComponent {
  nombre: string = 'Laura';
  genero: string = 'femenino';

  mapa = {
    masculino: 'lo',
    femenino: 'la',
  };

  personas: string[] = [
    'Johan',
    'Laura',
    'Cooper',
    'Alaska',
    'Mango',
    'Missy',
    'Maya',
    'Lola',
  ];

  mapaPersona = {
    '=0': 'No hay personas esperando',
    '=1': 'tenemos una persona esperando',
    '=2': 'tenemos 2 personas esperando',
    other: 'tenemos # personas esperando',
  };

  constructor() {}

  cambiarPersona() {
    this.nombre = 'Johan';
    this.genero = 'masculino';
  }

  borrarPersona() {
    this.personas.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Johan',
    apellido: 'Ramirez',
    edad: 30,
    pais: 'Colombia',
    ciudad: 'Bogotá',
  };

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async pipe
  miObservable = interval(2000);

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ya hay datos de la promesa');
    }, 3000);
  });
}
