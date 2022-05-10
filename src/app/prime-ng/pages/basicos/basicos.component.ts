import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent implements OnInit {
  nombre: string = 'jOhan rAmirEz';
  fecha: Date = new Date(); //Día de hoy

  constructor() {}

  ngOnInit(): void {}
}
