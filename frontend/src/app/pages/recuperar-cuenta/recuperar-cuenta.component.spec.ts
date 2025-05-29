import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.component.html',
  styleUrls: ['./recuperar-cuenta.component.css'],
})
export class RecuperarCuentaComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      ci: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const datos = this.form.value;
      if (datos.password !== datos.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      // Aquí podrías enviar los datos a tu backend:
      console.log('Datos enviados:', datos);
    } else {
      alert('Por favor llena todos los campos correctamente.');
    }
  }
}
