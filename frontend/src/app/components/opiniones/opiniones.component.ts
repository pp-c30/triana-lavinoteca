import { Component, OnInit } from '@angular/core';

import { OpinionesService } from '../../services/opiniones.service';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {
  formOpiniones: FormGroup;
  constructor(private fb: FormBuilder)
   {
     this.formOpiniones = this.fb.group({
       id_producto : [null, Validators.required],
       descripcion : ['', Validators.required]
     });
   }

  ngOnInit(): void {}
}

