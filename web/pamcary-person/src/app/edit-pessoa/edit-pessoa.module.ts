import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PessoaRoutingModule } from './../pessoa/pessoa-routing.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { EditPessoaComponent } from './edit-pessoa.component';



@NgModule({
  declarations: [
    EditPessoaComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
   ]
})
export class EditPessoaModule { }
