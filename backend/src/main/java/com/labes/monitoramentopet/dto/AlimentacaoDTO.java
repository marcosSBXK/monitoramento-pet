package com.labes.monitoramentopet.dto;

import java.io.Serializable;

import com.labes.monitoramentopet.entities.Alimentacao;

public class AlimentacaoDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String idAlimentacao;
	private String animal;
	private String mes;
	private String alimentacao;
	private String quantidade;
	
	public AlimentacaoDTO() {
		
	}

	public AlimentacaoDTO(String idAlimentacao, String animal, String mes, String alimentacao, String quantidade) {
		this.idAlimentacao = idAlimentacao;
		this.animal = animal;
		this.mes = mes;
		this.alimentacao = alimentacao;
		this.quantidade = quantidade;
	}
	
	public AlimentacaoDTO(Alimentacao entity) {
		idAlimentacao = entity.getIdAlimentacao();
		animal = entity.getAnimal();
		mes = entity.getMes();
		alimentacao = entity.getAlimentacao();
		quantidade = entity.getQuantidade();
	}

	public String getIdAlimentacao() {
		return idAlimentacao;
	}

	public void setIdAlimentacao(String idAlimentacao) {
		this.idAlimentacao = idAlimentacao;
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

}
