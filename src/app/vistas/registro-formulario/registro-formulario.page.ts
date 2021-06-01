import { Component, OnInit } from '@angular/core';

export class DatosFormulario{
  constructor(
    public dato1,
    public dato2,
    public nombre,
  ){}
}


@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.page.html',
  styleUrls: ['./registro-formulario.page.scss'],
})
export class RegistroFormularioPage implements OnInit {

  datos_formulario;
  constructor() {
    this.datos_formulario = new DatosFormulario("","","");
   }

  ngOnInit() {
  }

  enviarDatos(){
    console.log("Los datos del formulario son: ", this.datos_formulario )
  }

}
