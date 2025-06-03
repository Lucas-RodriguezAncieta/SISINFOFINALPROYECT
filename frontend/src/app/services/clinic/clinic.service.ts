import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinic } from '../../interfaces/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private http:HttpClient) { }

  ObtenerTodos(): Observable<Clinic>{
    return this.http.get<Clinic>("/api/clinic")
  }

  async CrearClinica(credentials: {id: string;hospital_id:string;clinic_code:string;createdAt?:string;udatedAt?:string}){
    this.http.post('/api/clinic', credentials)
  }
}
