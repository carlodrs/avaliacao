import { PessoaService } from './../pessoa/service/pessoa.service';
import { Component, OnInit } from '@angular/core';


import { IPessoa } from './../pessoa/model/i-pessoa';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.component.html',
  styleUrls: ['./add-pessoa.component.scss']
})
export class AddPessoaComponent implements OnInit {

  constructor(private pessoaService: PessoaService) {
    this.pessoa={} as IPessoa;
    this.pessoaForm = {} as FormGroup;
  }
  pessoaForm: FormGroup;

  pessoa : IPessoa;
  submitted = false;
  ngOnInit() {

    this.submitted=false;
  }

  salvarPessoa(){

    this.pessoaService.salvar(this.pessoa);
  }

  salvar() {
    this.pessoaService.salvar(this.pessoa)
      .subscribe(data => console.log(data), error => console.log(error));

  }
}
