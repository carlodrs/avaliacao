import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { PessoaRoutingModule } from './../pessoa/pessoa-routing.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AddPessoaModule {
  constructor() {}

  pessoaForm = new FormGroup({
    pessoa_nome: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    pessoa_email: new FormControl('', [Validators.required, Validators.email]),
    pessoa_cpf: new FormControl(),
    pessoa_nascimento: new FormControl(),
  });

  get PessoaNome() {
    return this.pessoaForm.get('pessoa_nome');
  }

  get PessoaEmail() {
    return this.pessoaForm.get('pessoa_email');
  }

  get PessoaCPF() {
    return this.pessoaForm.get('pessoa_cpf');
  }

  get PessoaNascimento() {
    return this.pessoaForm.get('pessoa_nascimento');
  }
}
