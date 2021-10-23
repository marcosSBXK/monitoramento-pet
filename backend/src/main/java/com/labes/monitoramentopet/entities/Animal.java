package com.labes.monitoramentopet.entities;

import java.time.LocalDate;

public class Animal {
	
	private Long id;
	private String nomeCliente;
	private String nomeAnimal;
	private String especie;
	private LocalDate dataNascimento;
	private String raca;
	private Double peso;
	private Double tamanho;
	private Boolean vacinado;
	private LocalDate dataRegistro;
	private Boolean castrado;
	
	private Cliente cliente;
	private Animal animail;
	
	public Animal() {
	}

	public Animal(Long id, String nomeCliente, String nomeAnimal, String especie, LocalDate dataNascimento, String raca,
			Double peso, Double tamanho, Boolean vacinado, LocalDate dataRegistro, Boolean castrado, Cliente cliente) {
		this.id = id;
		this.nomeCliente = nomeCliente;
		this.nomeAnimal = nomeAnimal;
		this.especie = especie;
		this.dataNascimento = dataNascimento;
		this.raca = raca;
		this.peso = peso;
		this.tamanho = tamanho;
		this.vacinado = vacinado;
		this.dataRegistro = dataRegistro;
		this.castrado = castrado;
		this.cliente = cliente;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeCliente() {
		return nomeCliente;
	}

	public void setNomeCliente(String nomeCliente) {
		this.nomeCliente = nomeCliente;
	}

	public String getNomeAnimal() {
		return nomeAnimal;
	}

	public void setNomeAnimal(String nomeAnimal) {
		this.nomeAnimal = nomeAnimal;
	}

	public String getEspecie() {
		return especie;
	}

	public void setEspecie(String especie) {
		this.especie = especie;
	}

	public LocalDate getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}

	public Double getPeso() {
		return peso;
	}

	public void setPeso(Double peso) {
		this.peso = peso;
	}

	public Double getTamanho() {
		return tamanho;
	}

	public void setTamanho(Double tamanho) {
		this.tamanho = tamanho;
	}

	public Boolean getVacinado() {
		return vacinado;
	}

	public void setVacinado(Boolean vacinado) {
		this.vacinado = vacinado;
	}

	public LocalDate getDataRegistro() {
		return dataRegistro;
	}

	public void setDataRegistro(LocalDate dataRegistro) {
		this.dataRegistro = dataRegistro;
	}

	public Boolean getCastrado() {
		return castrado;
	}

	public void setCastrado(Boolean castrado) {
		this.castrado = castrado;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Animal getAnimail() {
		return animail;
	}

	public void setAnimail(Animal animail) {
		this.animail = animail;
	}
}
