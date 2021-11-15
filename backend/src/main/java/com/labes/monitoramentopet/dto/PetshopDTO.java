package com.labes.monitoramentopet.dto;

import java.io.Serializable;

import com.labes.monitoramentopet.entities.Petshop;

public class PetshopDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long idPetshop;
	private Long cnpj;
	private Long telefone;
	private String endereco;
	
	public PetshopDTO() {
		
	}

	public PetshopDTO(Long idPetshop, Long cnpj, Long telefone, String endereco) {
		this.idPetshop = idPetshop;
		this.cnpj = cnpj;
		this.telefone = telefone;
		this.endereco = endereco;
	}
	
	public PetshopDTO(Petshop entity) {
		idPetshop = entity.getIdPetshop();
		cnpj = entity.getCnpj();
		telefone = entity.getTelefone();
		endereco = entity.getEndereco();
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
	
}
