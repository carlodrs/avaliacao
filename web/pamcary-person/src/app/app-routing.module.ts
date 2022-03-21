import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo:'pessoa'},

  {

    path: 'pessoa',
    loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule)
  },

  {

    path: 'add-pessoa',
    loadChildren: () => import('./add-pessoa/add-pessoa.module').then(m => m.AddPessoaModule)
  },

  {
    path: 'edit-pessoa',
    loadChildren: () => import('./edit-pessoa/edit-pessoa.module').then(m => m.EditPessoaModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
