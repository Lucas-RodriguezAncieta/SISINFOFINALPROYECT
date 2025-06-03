import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }
  
  ObtainAllSchedules(): Observable<any> {
    return this.http.get<any>('/api/schedules');
  }
  
  ObtainScheduleById(id: any): Observable<any> {
    return this.http.get<any>(`/api/schedules/${id}`);
  }

  CreateSchedule(schedule: any): Observable<any> {
    return this.http.post<any>('/api/schedules', schedule);
  }

  UpdateSchedule(schedule: any): Observable<any> {
    return this.http.put<any>(`/api/schedules/${schedule.id}`,schedule);
  }

  DeleteSchedule(id: any): Observable<any> {
    return this.http.delete<any>(`/api/schedules/${id}`);
  }
}
