import { Component } from '@angular/core';

@Component({
  selector: 'app-search-nurses',
  templateUrl: './search-nurses.component.html',
  styleUrls: ['./search-nurses.component.css']
})
export class SearchNursesComponent {
  nombre: string = '';
  resultados: Array<{ nombre: string; departamento: string }> = [];
  hasSearched: boolean = false;

  // Simula una búsqueda de enfermeros
  buscarEnfermeros() {
    this.hasSearched = true;

    const enfermeros = [
      { nombre: 'Laura García', departamento: 'Urgencias' },
      { nombre: 'Carlos Martínez', departamento: 'Pediatría' },
      { nombre: 'Ana López', departamento: 'UCI' },
    ];

    this.resultados = enfermeros.filter((enfermero) =>
      enfermero.nombre.toLowerCase().includes(this.nombre.toLowerCase())
    );
  }
}
