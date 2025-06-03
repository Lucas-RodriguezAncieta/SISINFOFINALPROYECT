import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(private http: HttpClient) { }
  
  ObtainAllSpecialities(): Observable<any> {
    return this.http.get<any>('/api/specialities');
  }

  CreateSpeciality(speciality: any) {
    return this.http.post<any>('/api/specialities', speciality);
  }
}
