package com.labes.monitoramentopet.entities;

import java.util.ArrayList;
import java.util.List;


public class Cliente {
	
	private Long id;
	private String name;
	private Long cpf;
	private Long telefone;
	
	private List<Animal> animais = new ArrayList<>();
	
	private Petshop petshop;
	private Alimentacao alimentacao;
			
	public Cliente() {
	}

	public Cliente(Long id, String name, Long cpf, Long telefone) {
		this.id = id;
		this.name = name;
		this.cpf = cpf;
		this.telefone = telefone;
	}

	public Long getId() {
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

	public Long getCpf() {
		return cpf;
	}

	public void setCpf(Long cpf) {
		this.cpf = cpf;
	}

	public Long getTelefone() {
		return telefone;
	}

	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}

	public List<Animal> getAnimais() {
		return animais;
	}

	public Petshop getPetshop() {
		return petshop;
	}

	public void setPetshop(Petshop petshop) {
		this.petshop = petshop;
	}

	public Alimentacao getAlimentacao() {
		return alimentacao;
	}

	public void setAlimentacao(Alimentacao alimentacao) {
		this.alimentacao = alimentacao;
	}
}
