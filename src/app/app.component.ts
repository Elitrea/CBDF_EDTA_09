import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejecicio 09 - Interpolación';
  nombre = "Eliane Danae Trejo Aguiñaga";
  edad = 21;
  semestre = "Séptimo semestre";
  calificaciones = [8,7,9,10,8];

  calcularPromedio(){
    let suma = 0; 
    const lA = this.calificaciones.length;
    for (let i = 0; i < lA; i++) 
      suma += this.calificaciones[i];
    return suma/lA;
  }

  estadoAlumno(){
    if(this.calcularPromedio()>=6){
      return "Aprobado";
    }else{
      return "No aprobado";
    }
  }
}
