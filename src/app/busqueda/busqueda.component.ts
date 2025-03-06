import { Component, OnInit } from '@angular/core';
import { IWeapon } from '../i-weapon';
import { ValorantService } from '../valorant.service';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  weapons: IWeapon[] = [];
  searchTerm: string = '';

  constructor(private valorantService: ValorantService) {}

  ngOnInit(): void {
    this.valorantService.getWeapons().subscribe({
      next: (response) => {
        this.weapons = response.data;
      },
      error: (error) => {
        console.error('Error al obtener las armas:', error);
      }
    });
  }
}
