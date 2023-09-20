import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stay } from '../model/stay.model';

@Injectable({
  providedIn: 'root',
})
export class StayService {
  private apiUrl = 'https://api.jsonbin.io/v3/b/650aef1aadb5f56d8f186168';

  constructor(private http: HttpClient) {}

  getStays(): Observable<{record: Stay[]}> {
    return this.http.get<{record: Stay[]}>(this.apiUrl);
  }
}
