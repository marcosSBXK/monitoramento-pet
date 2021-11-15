package com.labes.monitoramentopet.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.labes.monitoramentopet.dto.PetshopDTO;
import com.labes.monitoramentopet.entities.Petshop;
import com.labes.monitoramentopet.repositories.PetshopRepository;

@Service
public class PetshopService {

	@Autowired
	private PetshopRepository repository;
	
	public List<PetshopDTO> findAll() {
		List<Petshop> result = repository.findAll();
		return result.stream().map(x -> new PetshopDTO(x)).collect(Collectors.toList());
	}
	
}
