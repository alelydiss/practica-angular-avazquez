import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {
  private apiUrl = 'https://valorant-api.com/v1/weapons';

  constructor(private http: HttpClient) {}

  getWeapons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
