package br.com.pamcary.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.pamcary.entity.Pessoa;
import br.com.pamcary.repository.PessoaRepository;
import br.com.pamcary.service.PessoaService;

@Service
public class PessoaServiceImpl implements PessoaService {

	@Autowired
	private PessoaRepository repository;
	
	@Override
	public void salvar(Pessoa pessoa) {
		repository.save(pessoa);
	}

	@Override
	public List<Pessoa> listar() {
		
		List<Pessoa> pessoas = new ArrayList<Pessoa>();
		repository.findAll().forEach(pessoas::add);
	    
		return pessoas;
	}

	@Override
	public void atualizar(Pessoa pessoa) {
		Pessoa pessoaDB = this.recuperar(pessoa.getCodigo());
		if (pessoaDB != null) {
			BeanUtils.copyProperties(pessoa, pessoaDB);
		}
			
		repository.save(pessoa);
	}

	@Override
	public void excluir(Integer id) {
		repository.deleteById(id);		
	}


	@Override
	public Pessoa recuperar(Integer codigo) {
		Optional<Pessoa> p = repository.findById(codigo);
		if (p.isPresent()) 
			return p.get();
		
		return null;
	}

	@Override
	public List<Pessoa> pesquisar(String cpf) {
		return repository.findByCpf(cpf);
	}
}
