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
@Table(name = "tb_veterinario")
public class Veterinario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private Long crmv;

	@OneToMany(mappedBy = "veterinario")
	private List<Alimentacao> alimentacao = new ArrayList<>();

	@ManyToOne // muitos para um, chave estrangeira
	@JoinColumn(name = "petshop_id")
	private Petshop petshop;

	public Veterinario() {
	}

	public Veterinario(Long id, String nome, Long crmv, Petshop petshop) {
		this.id = id;
		this.nome = nome;
		this.crmv = crmv;
		this.petshop = petshop;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public List<Alimentacao> getAlimentacao() {
		return alimentacao;
	}

	public Petshop getPetshop() {
		return petshop;
	}

	public void setPetshop(Petshop petshop) {
		this.petshop = petshop;
	}
	
	
	
}
