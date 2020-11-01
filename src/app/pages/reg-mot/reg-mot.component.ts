import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';
@Component({
  selector: 'app-reg-mot',
  templateUrl: './reg-mot.component.html',
  styleUrls: ['./reg-mot.component.css']
})
export class RegMotComponent implements OnInit {

  forma: FormGroup;


  constructor( private fb: FormBuilder,
               private validadores: ValidadoresService ) { 

    this.crearFormulario();

  }

  ngOnInit(): void {
  }


  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }


  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }

  get telNoValido() {
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched
  }

  crearFormulario() {

    this.forma = this.fb.group({
      nombre  : ['', [ Validators.required, Validators.minLength(5) ]  ],
      correo  : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      telefono : ['', ,  [ Validators.required, Validators.pattern('[0-9]')] ]
      });

  }

  guardar() {
    console.log( this.forma );

    if ( this.forma.invalid ) {

      return Object.values( this.forma.controls ).forEach( control => {

        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }


      });
 
    }

    // Posteo de información
    this.forma.reset({
      nombre: 'Sin nombre'
    });

  }

}
