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
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  ingresar(){
    this.autServ.login(this.formIngreso.value).subscribe(
      respuesta => {
        localStorage.setItem('token', String(respuesta));
        this.route.navigate(['/producto']); // Pagina a la cual despues de loguiarnos queremos que nos redireccione 
      }
    );
  }
}
