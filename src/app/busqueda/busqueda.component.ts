import { Component } from '@angular/core';
import { ValorantService } from '../valorant.service';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  weapons: any[] = [];
  searchTerm: string = '';

  constructor(private valorantService: ValorantService) { }

  ngOnInit(): void {
    this.valorantService.getWeapons().subscribe(data => {
      this.weapons = data.data;
    });
  }
}
