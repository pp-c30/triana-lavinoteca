import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;
  constructor(private fb: FormBuilder, private autServ: AutenticacionService, private route: Router) {
    this.formRegistro = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  registrar(){
    this.autServ.register(this.formRegistro.value).subscribe(
      respuesta => {
        localStorage.setItem('token', String(respuesta));
        this.formRegistro.reset();
        this.route.navigate(['/productos']); // Pagina a la cual despues de loguiarnos queremos que nos redireccione
      }
    );
  }
}
 