import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISkin, IWeapon } from '../i-weapon';
import { ValorantService } from '../valorant.service';

@Component({
  selector: 'app-acerca',
  standalone: false,
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent {
  weapons: IWeapon[] = [];
  selectedWeapon: IWeapon | null = null;
  skins: ISkin[] = [];

  constructor(private valorantService: ValorantService, private router: Router) {}

  ngOnInit(): void {
    this.valorantService.getWeapons().subscribe({
      next: (response) => {
        this.weapons = response.data;
      },
      error: (error) => {
        console.error('Error al obtener armas:', error);
      }
    });
  }

  loadSkins(weapon: IWeapon): void {
    this.selectedWeapon = weapon;
    this.skins = weapon.skins;
  }

  // Al hacer clic en la skin, redirigimos a SkinDetailsComponent con la skin seleccionada
  viewSkinDetails(skin: ISkin): void {
    this.router.navigate(['/skin-details', skin.uuid]); // Redirigimos con el UUID de la skin
  }
}
