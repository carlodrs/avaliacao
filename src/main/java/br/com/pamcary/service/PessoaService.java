package br.com.pamcary.service;

import java.util.List;

import br.com.pamcary.entity.Pessoa;

public interface PessoaService {
	
	public List<Pessoa> listar();
	public void atualizar (Pessoa pessoa);
	public void excluir (Integer id);
	public List<Pessoa> pesquisar (String nome);
	public void salvar(Pessoa pessoa);
	public Pessoa recuperar(Integer id);
	
}
