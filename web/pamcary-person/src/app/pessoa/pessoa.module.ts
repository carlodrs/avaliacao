import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';

@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PessoaModule { }
