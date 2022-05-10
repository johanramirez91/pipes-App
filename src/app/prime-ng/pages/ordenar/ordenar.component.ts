import { Heroe, Color } from './../../interfaces/heroes.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss'],
})
export class OrdenarComponent {
  isUpper: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      volar: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      volar: false,
      color: Color.negro,
    },
    {
      nombre: 'Flash',
      volar: false,
      color: Color.rojo,
    },
    {
      nombre: 'Green arrow',
      volar: false,
      color: Color.verde,
    },
  ];

  cambiarMayusculas() {
    this.isUpper = !this.isUpper;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}
