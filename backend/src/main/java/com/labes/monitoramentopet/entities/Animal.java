package com.labes.monitoramentopet.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_animal")
public class Animal {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAnimal;
	private String clientes;
	private String name;
	private String especie;
	private LocalDate nascimento;
	private String raca;
	private String peso;
	private String vacinado;
	private LocalDate registro;
	private String castrado;
	
	@ManyToOne // muitos para um, chave estrangeira 
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;
	
	public Animal() {
	}

	public Animal(Long idAnimal, String clientes, String name, String especie, LocalDate nascimento, String raca,
			String peso, Double tamanho, String vacinado, LocalDate registro, String castrado, Cliente cliente) {
		this.idAnimal = idAnimal;
		this.clientes = clientes;
		this.name = name;
		this.especie = especie;
		this.nascimento = nascimento;
		this.raca = raca;
		this.peso = peso;
		this.vacinado = vacinado;
		this.registro = registro;
		this.castrado = castrado;
		this.cliente = cliente;
	}



	public Long getIdAnimal() {
		return idAnimal;
	}

	public void setIdAnimal(Long idAnimal) {
		this.idAnimal = idAnimal;
	}

	public String getClientes() {
		return clientes;
	}

	public void setClientes(String clientes) {
		this.clientes = clientes;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEspecie() {
		return especie;
	}

	public void setEspecie(String especie) {
		this.especie = especie;
	}

	public LocalDate getNascimento() {
		return nascimento;
	}

	public void setNascimento(LocalDate nascimento) {
		this.nascimento = nascimento;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}

	public String getPeso() {
		return peso;
	}

	public void setPeso(String peso) {
		this.peso = peso;
	}

	public String getVacinado() {
		return vacinado;
	}

	public void setVacinado(String vacinado) {
		this.vacinado = vacinado;
	}

	public LocalDate getRegistro() {
		return registro;
	}

	public void setRegistro(LocalDate registro) {
		this.registro = registro;
	}

	public String getCastrado() {
		return castrado;
	}

	public void setCastrado(String castrado) {
		this.castrado = castrado;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

}
