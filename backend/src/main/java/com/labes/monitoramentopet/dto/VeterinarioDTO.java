package com.labes.monitoramentopet.dto;

import java.io.Serializable;

import com.labes.monitoramentopet.entities.Veterinario;

public class VeterinarioDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String nome;
	private Long crmv;
	
	public VeterinarioDTO() {
		
	}

	public VeterinarioDTO(Long id, String nome, Long crmv) {
		this.id = id;
		this.nome = nome;
		this.crmv = crmv;
	}
	
	public VeterinarioDTO(Veterinario entity) {
		this.id = entity.getId();
		this.nome = entity.getNome();
		this.crmv = entity.getCrmv();
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

}
