import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISkin, IWeapon } from './i-weapon';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {
  private weaponsUrl = 'https://valorant-api.com/v1/weapons';
  private agentsUrl = 'https://valorant-api.com/v1/agents';

  constructor(private http: HttpClient) {}

  getWeapons(): Observable<{ data: IWeapon[] }> {
    return this.http.get<{ data: IWeapon[] }>(this.weaponsUrl);
  }

  getSkinsByWeapon(weaponUuid: string): Observable<ISkin[]> {
    return this.http.get<{ data: { skins: ISkin[] } }>(`${this.weaponsUrl}/${weaponUuid}`)
      .pipe(map(response => response.data.skins));
  }

  getSkinById(skinId: string): Observable<ISkin> {
    return this.http.get<{ status: number; data: ISkin }>(
      `https://valorant-api.com/v1/weapons/skins/${skinId}`
    ).pipe(map(response => response.data));
  }

  getAgents(): Observable<any[]> {
    return this.http.get<{ data: any[] }>(this.agentsUrl).pipe(
      map(response => response.data.filter((agent: any) => agent.isPlayableCharacter))
    );
  }
  
}
