import { ErrorDialogComponent } from './../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { IPessoa } from './model/i-pessoa';
import { PessoaService } from './service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas$: Observable<IPessoa[]>;
  displayedColumns = ['codigo', 'nome', 'cpf', 'dataNascimento']

  constructor(
    private pessoaService: PessoaService,
    public dialog: MatDialog
    ) {
    this.pessoas$ = pessoaService.listarTodos().pipe(
      catchError( error => {
        console.log(error)
        this.onError('Erro ao carregar as informações');
        return of([]);
      })
    );
  }


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {
  }

}
