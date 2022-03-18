package br.com.pamcary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.pamcary.entity.Pessoa;
import br.com.pamcary.service.PessoaService;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {
	
	
	@Autowired
	private PessoaService service;
	
	@PostMapping("/salvar")
	public void salvar(@RequestBody Pessoa pessoa) {
		this.service.salvar(pessoa);
	}
	
	@GetMapping("/listar")
	public List<Pessoa> listar(){
		return this.service.listar();
	}
	
	@PostMapping("/atualizar")
	public void atualizar(@RequestBody Pessoa pessoa) {
		this.service.atualizar(pessoa);
	}
	
	
	@DeleteMapping("/excluir/{id}")
	public void excluir (@PathVariable Integer id) {
		this.service.excluir(id);
	}

	
	@GetMapping("/recuperar/{id}")
	public Pessoa recuperar(@PathVariable Integer id) {
		return this.service.recuperar(id);
	}
	
	@GetMapping("/pesquisar")
	public List<Pessoa> pesquisar(@RequestParam String cpf) {
		return this.service.pesquisar(cpf);
	}

}
