import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stay } from '../model/stay.model';

@Injectable({
  providedIn: 'root',
})
export class StayService {
  private apiUrl = '../../assets/api/stays.json';

  constructor(private http: HttpClient) {}

  getStays(): Observable<Stay[]> {
    return this.http.get<Stay[]>(this.apiUrl);
  }
}
