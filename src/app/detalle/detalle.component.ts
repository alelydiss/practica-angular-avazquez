import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWeapon } from '../i-weapon';
import { ValorantService } from '../valorant.service';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  weapon: IWeapon | null = null;

  constructor(
    private route: ActivatedRoute,
    private valorantService: ValorantService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.valorantService.getWeapons().subscribe(data => {
        this.weapon = data.find(w => w.uuid === id) || null;
      });
    }
  }
}