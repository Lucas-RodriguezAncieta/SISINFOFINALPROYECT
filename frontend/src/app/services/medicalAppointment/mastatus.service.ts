import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MAStatusService {

  constructor(private http: HttpClient) { }
  
  getMAStatus(): Observable<any> {
    return this.http.get<any>('/api/appointment-statuses');
  }

  createMAStatus(status: any): Observable<any> {
    return this.http.post<any>('/api/appointment-statuses', status);
  }

}
