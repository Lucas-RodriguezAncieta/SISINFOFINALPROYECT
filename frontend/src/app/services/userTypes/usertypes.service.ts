import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsertypesService {

  constructor(private http: HttpClient) { }
  
  ObtainAllUserTypes(): Observable<any> {
    return this.http.get<any>('/api/usertypes');
  }

  CreateUserType(userType: any) {
    return this.http.post<any>('/api/usertypes', userType);
  }
}
