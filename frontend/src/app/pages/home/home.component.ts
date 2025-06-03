import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,                   // Marca como standalone
  imports: [CommonModule],             // <-- Agrega CommonModule aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  noticias = [
    {
      titulo: 'TÍTULO DEL ARTÍCULO',
      fecha:  'Lun 01, Septiembre 2025 | Salud',
      img:    'assets/img/doctor1.jpg',
      comentarios: 3,
      vistas: 23
    },
    {
      titulo: 'TÍTULO DEL ARTÍCULO',
      fecha:  'Lun 01, Septiembre 2025 | Salud',
      img:    'assets/img/doctor2.jpg',
      comentarios: 5,
      vistas: 40
    },
    // … puedes agregar más objetos
  ];
}