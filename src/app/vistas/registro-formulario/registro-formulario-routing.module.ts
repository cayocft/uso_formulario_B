import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroFormularioPage } from './registro-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroFormularioPageRoutingModule {}
