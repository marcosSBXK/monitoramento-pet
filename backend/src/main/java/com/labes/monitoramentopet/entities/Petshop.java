package com.labes.monitoramentopet.entities;

import java.util.ArrayList;
import java.util.List;

public class Petshop {
	
	private Long cnpj;
	private Long telefone;
	private String enredeco;
	
	private List<Cliente> clientes = new ArrayList<>();
	private List<Veterinario> veterinarios = new ArrayList<>();
	
	public Petshop() {
	}

	public Petshop(Long cnpj, Long telefone, String enredeco) {
		this.cnpj = cnpj;
		this.telefone = telefone;
		this.enredeco = enredeco;
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

	public String getEnredeco() {
		return enredeco;
	}

	public void setEnredeco(String enredeco) {
		this.enredeco = enredeco;
	}

	public List<Cliente> getClientes() {
		return clientes;
	}

	public List<Veterinario> getVeterinarios() {
		return veterinarios;
	}
}
