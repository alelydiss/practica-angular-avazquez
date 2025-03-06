import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChroma, ISkin } from '../i-weapon';
import { ValorantService } from '../valorant.service';

@Component({
  selector: 'app-skin-details',
  standalone: false,
  templateUrl: './skin-details.component.html',
  styleUrl: './skin-details.component.css'
})
export class SkinDetailsComponent implements OnInit {
  skin: ISkin | null = null;
  chromas: IChroma[] = [];
  
  constructor(
    private valorantService: ValorantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const skinId = this.route.snapshot.paramMap.get('id')!;
    console.log('ID de la skin en la ruta: ', skinId);
    this.loadSkinDetails(skinId);
  }
  

  loadSkinDetails(skinId: string): void {
    console.log('Cargando detalles de la skin con id: ', skinId);
    this.valorantService.getSkinById(skinId).subscribe({
      next: (skin) => {
        console.log('Detalles de la skin recibidos: ', skin);
        this.skin = skin;
        this.chromas = skin.chromas || [];
      },
      error: (error) => {
        console.error('Error al obtener detalles de la skin:', error);
      }
    });
  }
}
