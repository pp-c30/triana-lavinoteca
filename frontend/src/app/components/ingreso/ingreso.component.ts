import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  formIngreso: FormGroup;
  constructor(private fb: FormBuilder, private autServ: AutenticacionService, private route: Router) {
    this.formIngreso = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  ingresar(){
    this.autServ.login(this.formIngreso.value).subscribe(
      respuesta => {
        // tslint:disable-next-line:triple-equals
        if (respuesta == 0){
          alert('Usuario o contraseña incorrecta');
        }else{
          // tslint:disable-next-line:triple-equals
          if (respuesta == 1){
            alert('Contraseña incorrecta');
          }else{
            localStorage.setItem('token', String(respuesta));
            this.route.navigate(['/bodegas']); // Pagina a la cual despues de loguiarnos queremos que nos redireccione
          }
        }
      }
    );
  }
}
