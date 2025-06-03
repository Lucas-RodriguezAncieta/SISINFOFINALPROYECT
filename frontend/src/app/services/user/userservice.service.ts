import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  ObtainAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }

  ObtainUserById(id: number): Observable<User> {
    return this.http.get<User>(`api/users/${id}`);
  }

  CreateUser(user: User): Observable<User> {
    return this.http.post<User>('api/users', user);
  }

  UpdateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`api/users/${id}`, user);
  }

  DeleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`api/users/${id}`);
  }
}
