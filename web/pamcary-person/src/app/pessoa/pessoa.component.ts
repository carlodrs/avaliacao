import { IPessoa } from './model/i-pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas: IPessoa[] = [];
  displayedColumns = ['codigo', 'nome', 'cpf', 'dataNascimento']

  constructor() {
    this.pessoas =  [ {codigo: 1, nome: 'carlos', cpf:'2', dataNascimento: '04-08-82'}];
  }

  ngOnInit(): void {
  }

}
