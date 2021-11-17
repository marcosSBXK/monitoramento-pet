package com.labes.monitoramentopet.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_petshop")
public class Petshop {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPetshop;
	private Long cnpj;
	private Long telefone;
	private String endereco;
	
	@OneToMany(mappedBy = "petshop")
	private List<Cliente> cliente  = new ArrayList<>();
	
	@OneToMany(mappedBy = "petshop")
	private List<Veterinario> veterinario  = new ArrayList<>();
	
	public Petshop() {
	}

	public Petshop(Long cnpj, Long telefone, String endereco, Long idPetshop) {
		this.idPetshop = idPetshop;
		this.cnpj = cnpj;
		this.telefone = telefone;
		this.endereco = endereco;
	}

	
	public Long getIdPetshop() {
		return idPetshop;
	}

	public void setIdPetshop(Long idPetshop) {
		this.idPetshop = idPetshop;
	}

	public Long getCnpj() {
		return cnpj;
	}

	public void setCnpj(Long cnpj) {
		this.cnpj = cnpj;
	}

	public Long getTelefone() {
		return telefone;
	}

	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}

	
	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public List<Cliente> getCliente() {
		return cliente;
	}

	public List<Veterinario> getVeterinario() {
		return veterinario;
	}

	
}
