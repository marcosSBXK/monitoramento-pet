package com.labes.monitoramentopet.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.labes.monitoramentopet.dto.VeterinarioDTO;
import com.labes.monitoramentopet.entities.Veterinario;
import com.labes.monitoramentopet.repositories.VeterinarioRepository;

@Service
public class VeterinarioService {

	@Autowired
	private VeterinarioRepository repository;
	
	public List<VeterinarioDTO> findAll() {
		List<Veterinario> result = repository.findAll();
		return result.stream().map(x -> new VeterinarioDTO(x)).collect(Collectors.toList());
	}
	
}
