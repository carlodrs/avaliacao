import { TestBed } from '@angular/core/testing';

import { EditPessoaService } from './edit-pessoa.service';

describe('EditPessoaService', () => {
  let service: EditPessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
