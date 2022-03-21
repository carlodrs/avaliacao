import { EditPessoaComponent } from './../edit-pessoa/edit-pessoa.component';
import { AddPessoaComponent } from './../add-pessoa/add-pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaComponent } from './pessoa.component';

const routes: Routes = [
  {path: '', component: PessoaComponent},

  {path: 'add-pessoa', component: AddPessoaComponent},

  {path: 'edit-pessoa', component: EditPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
