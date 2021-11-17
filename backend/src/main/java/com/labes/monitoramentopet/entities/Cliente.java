package com.labes.monitoramentopet.entities;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_cliente")
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private Long cpf;
	private Long telefone;
	
	@ManyToOne // muitos para um, chave estrangeira 
	@JoinColumn(name = "petshop_id")
	private Petshop petshop;
	
	@OneToMany(mappedBy = "cliente")
	private List<Animal> animal = new ArrayList<>();
	
	@OneToMany(mappedBy = "cliente_")
	private List<Alimentacao> alimentacao = new ArrayList<>();
			
	public Cliente() {		
	}

	public Cliente(Long id, String name, Long cpf, Long telefone, Petshop petshop) {
		this.id = id;
		this.name = name;
		this.cpf = cpf;
		this.telefone = telefone;
		this.petshop = petshop;
	}

	public long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getCpf() {
		return cpf;
	}

	public void setCpf(Long cpf) {
		this.cpf = cpf;
	}

	public long getTelefone() {
		return telefone;
	}

	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}
	
	public List<Animal> getAnimal() {
		return animal;
	}

	public Petshop getPetshop() {
		return petshop;
	}

	public void setPetshop(Petshop petshop) {
		this.petshop = petshop;
	}

	public List<Alimentacao> getAlimentacao() {
		return alimentacao;
	}

	
}
