package com.labes.monitoramentopet.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_alimentacao")
public class Alimentacao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idAlimentacao;
	private String animal;
	private String mes;
	private String alimentacao;
	private String quantidade;

	@ManyToOne // muitos para um, chave estrangeira
	@JoinColumn(name = "cliente_id")
	private Cliente cliente_;
	
	@ManyToOne // muitos para um, chave estrangeira
	@JoinColumn(name = "veterinario_id")
	private Veterinario veterinario ;

	public Alimentacao() {
	}

	public Alimentacao(String mes, String alimentacao, String quantidade, String idAlimentacao, String animal, Veterinario veterinario, Cliente cliente, Cliente cliente_) {
		this.idAlimentacao = idAlimentacao;
		this.animal = animal;
		this.mes = mes;
		this.alimentacao = alimentacao;
		this.quantidade = quantidade;
		this.veterinario = veterinario;
		this.cliente_ = cliente_;
	}

	
	public String getAnimal() {
		return animal;
	}

	public void setAnimal(String animal) {
		this.animal = animal;
	}

	public String getMes() {
		return mes;
	}

	public void setMes(String mes) {
		this.mes = mes;
	}

	public String getAlimentacao() {
		return alimentacao;
	}

	public void setAlimentacao(String alimentacao) {
		this.alimentacao = alimentacao;
	}

	public String getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(String quantidade) {
		this.quantidade = quantidade;
	}



	public Cliente getCliente_() {
		return cliente_;
	}

	public void setCliente_(Cliente cliente_) {
		this.cliente_ = cliente_;
	}

	public String getIdAlimentacao() {
		return idAlimentacao;
	}

	public void setIdAlimentacao(String idAlimentacao) {
		this.idAlimentacao = idAlimentacao;
	}

	public Veterinario getVeterinario() {
		return veterinario;
	}

	public void setVeterinario(Veterinario veterinario) {
		this.veterinario = veterinario;
	}

	
}
