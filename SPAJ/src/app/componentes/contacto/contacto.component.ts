import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  
contacto: FormGroup;
  


  constructor( private fb: FormBuilder ) { }

  onSubmit() {
    if (this.contacto.valid) {
      console.log("contacto guardado!");
      this.contacto.reset();
    }
  }

  

  ngOnInit() {

    this.contacto = this.fb.group({
      nombre: ['', Validators.required],
      tel: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      comentarios: ['', Validators.required]
    });
    
  }

}
