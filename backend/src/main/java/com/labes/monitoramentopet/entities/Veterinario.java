package com.labes.monitoramentopet.entities;

import java.util.ArrayList;
import java.util.List;

public class Veterinario {
	
	private String nome;
	private Long crmv;
	
	private List<Alimentacao> alimentacoes = new ArrayList<>();
	
	private Petshop petshop;
	
	public Veterinario() {
	}

	public Veterinario(String nome, Long crmv) {
		this.nome = nome;
		this.crmv = crmv;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Long getCrmv() {
		return crmv;
	}

	public void setCrmv(Long crmv) {
		this.crmv = crmv;
	}

	public Petshop getPetshop() {
		return petshop;
	}

	public void setPetshop(Petshop petshop) {
		this.petshop = petshop;
	}

	public List<Alimentacao> getAlimentacoes() {
		return alimentacoes;
	}
}
