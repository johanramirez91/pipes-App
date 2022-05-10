import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
})
export class NumerosComponent implements OnInit {
  numero: number = 2567813.5568;
  porcentaje: number = 0.48686;

  constructor() {}

  ngOnInit(): void {}
}
