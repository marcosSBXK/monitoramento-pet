package com.labes.monitoramentopet.entities;

public class Alimentacao {
	
	private String mes;
	private String tipoAlimentacao;
	private Integer quantidade;
	
	private Veterinario veterinario;
	private Cliente cliente;
	private Animal animal;
	
	public Alimentacao() {
	}

	public Alimentacao(String mes, String tipoAlimentacao, Integer quantidade) {
		this.mes = mes;
		this.tipoAlimentacao = tipoAlimentacao;
		this.quantidade = quantidade;
	}

	public String getMes() {
		return mes;
	}

	public void setMes(String mes) {
		this.mes = mes;
	}

	public String getTipoAlimentacao() {
		return tipoAlimentacao;
	}

	public void setTipoAlimentacao(String tipoAlimentacao) {
		this.tipoAlimentacao = tipoAlimentacao;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Veterinario getVeterinario() {
		return veterinario;
	}

	public void setVeterinario(Veterinario veterinario) {
		this.veterinario = veterinario;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Animal getAnimal() {
		return animal;
	}

	public void setAnimal(Animal animal) {
		this.animal = animal;
	}
}
