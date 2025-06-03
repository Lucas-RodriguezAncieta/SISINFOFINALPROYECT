import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClinicService } from '../../services/clinic.service';
@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  credentials = {
    id:"",
    hospital_id:"",
    clinic_code:"",
    createdAt:"",
    updatedAt:""
  }

  constructor(private clinicService: ClinicService){}

  RegistrarClinica(){
    this.clinicService.CrearClinica(this.credentials).catch(
    (response)=>{
      console.log(response);
    })
  }
}
