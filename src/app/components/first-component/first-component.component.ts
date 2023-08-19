import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  nome: string = "Marcelo";
  age: number = 30;
  job = "Programador";
  hob = ["correr","jogar","estudar"];
  car = {
    name: "Uno",
    year: 2019
  }
}
