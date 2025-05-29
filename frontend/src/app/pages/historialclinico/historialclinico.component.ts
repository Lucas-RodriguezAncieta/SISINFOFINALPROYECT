import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-historialclinico',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './historialclinico.component.html',
  styleUrls: ['./historialclinico.component.css']
})
export class HistorialClinicoComponent {
  consultas = [
    { titulo: 'Consulta 1', descripcion: 'Haga click para más información.' },
    { titulo: 'Consulta 2', descripcion: 'Haga click para más información.' }
  ];
}
