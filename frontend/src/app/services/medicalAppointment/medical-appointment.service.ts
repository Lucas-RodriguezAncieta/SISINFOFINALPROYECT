import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalAppointmentService {

  constructor(private http: HttpClient) { }
  
  ObtainMedicalAppointments(): Observable<any> { 
    return this.http.get<any>('/api/medical-appointments');
  }

  CreateMedicalAppointment(appointment: any): Observable<any> {
    return this.http.post<any>('/api/medical-appointments', appointment);
  }

  UpdateMedicalAppointment(appointment: any): Observable<any> {
    return this.http.put<any>(`/api/medical-appointments/${appointment.id}`, appointment);
  }

  DeleteMedicalAppointment(id: number): Observable<any> {
    return this.http.delete<any>(`/api/medical-appointments/${id}`);
  }

  GetMedicalAppointmentById(id: number): Observable<any> {
    return this.http.get<any>(`/api/medical-appointments/${id}`);
  }
    
}
