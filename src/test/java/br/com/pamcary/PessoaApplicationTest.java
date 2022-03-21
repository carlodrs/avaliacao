package br.com.pamcary;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.pamcary.entity.Pessoa;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc

public class PessoaApplicationTest {

  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private ObjectMapper objectMapper;


  @Test
  public void salvar() throws Exception {
    Pessoa pessoa = new Pessoa();
    pessoa.setCpf("22220030001");
    pessoa.setNome("Joao de Deus");
    pessoa.setDataNascimento(new Date());
    
    mockMvc.perform(post("/pessoa/salvar")
            .contentType("application/json")
            .param("sendWelcomeMail", "true")
            .content(objectMapper.writeValueAsString(pessoa)))
            .andExpect(status().isOk());
  	}


  @Test
  public void listar() throws Exception {
    
    mockMvc.perform(get("/pessoa/listar")
            .contentType("application/json")
            .param("sendWelcomeMail", "true"))
            .andExpect(status().isOk());

  }

  
  @Test
  public void atualizar() throws Exception {
    Pessoa pessoa = new Pessoa();
    pessoa.setCodigo(-43);
    pessoa.setCpf("22220030001");
    pessoa.setNome("Joao de Deus");
    pessoa.setDataNascimento(new Date());
    
    mockMvc.perform(post("/pessoa/atualizar")
            .contentType("application/json")
            .content(objectMapper.writeValueAsString(pessoa)))
            .andExpect(status().isOk());

  }

  
  @Test
  public void excluir() throws Exception {
    
    mockMvc.perform(delete("/pessoa/excluir/1")
            .contentType("application/json"))
            .andExpect(status().isOk());

  }

}
