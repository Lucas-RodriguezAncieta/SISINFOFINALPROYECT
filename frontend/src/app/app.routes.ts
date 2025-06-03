import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarCuentaComponent } from './pages/recuperar-cuenta/recuperar-cuenta.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { HistorialClinicoComponent } from './pages/historialclinico/historialclinico.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'historial', component: HistorialClinicoComponent },

];
