import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-clinico',
  standalone: true,
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent {
  consultas = [
    { titulo: 'Consulta 1', descripcion: 'Haga click para más información.' },
    { titulo: 'Consulta 2', descripcion: 'Haga click para más información.' },
    { titulo: 'Consulta 3', descripcion: 'Haga click para más información.' },
    { titulo: 'Consulta no asistida', descripcion: 'Haga click para más información.' },
    { titulo: 'Consulta no asistida', descripcion: 'Haga click para más información.' }
  ];
}
