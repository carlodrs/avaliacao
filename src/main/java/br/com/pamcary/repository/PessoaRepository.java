package br.com.pamcary.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.pamcary.entity.Pessoa;

@Repository
public interface PessoaRepository extends CrudRepository<Pessoa, Integer> {
	
	//buscar pelo nome
	public List<Pessoa> findByNomeStartingWith(String nome);

}
