import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IWeapon } from './i-weapon';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {
  private apiUrl = 'https://valorant-api.com/v1/weapons';

  constructor(private http: HttpClient) {}

  getWeapons(): Observable<IWeapon[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }
}
