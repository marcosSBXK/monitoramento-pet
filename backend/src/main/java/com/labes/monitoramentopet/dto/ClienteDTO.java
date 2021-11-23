package com.labes.monitoramentopet.dto;

import com.labes.monitoramentopet.entities.Cliente;

public class ClienteDTO {
	
	private Long id;
	private String name;
	private Long cpf;
	private Long telefone;
	
	private PetshopDTO petshop;
	
	public ClienteDTO() {
		
	}

	public ClienteDTO(Long id, String name, Long cpf, Long telefone, PetshopDTO petshop) {
		this.id = id;
		this.name = name;
		this.cpf = cpf;
		this.telefone = telefone;
		this.petshop = petshop;
	}
	
	public ClienteDTO(Cliente entity) {
		id = entity.getId();
		name = entity.getName();
		cpf = entity.getCpf();
		telefone = entity.getTelefone();
		petshop = new PetshopDTO(entity.getPetshop());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getCpf() {
		return cpf;
	}

	public void setCpf(Long cpf) {
		this.cpf = cpf;
	}

	public Long getTelefone() {
		return telefone;
	}

	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}

	public PetshopDTO getPetshop() {
		return petshop;
	}

	public void setPetshop(PetshopDTO petshop) {
		this.petshop = petshop;
	}
}
