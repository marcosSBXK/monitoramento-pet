package com.labes.monitoramentopet.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.labes.monitoramentopet.dto.AnimalDTO;
import com.labes.monitoramentopet.entities.Animal;
import com.labes.monitoramentopet.repositories.AnimalRepository;

@Service
public class AnimalService {

	@Autowired
	private AnimalRepository repository;
	
	public List<AnimalDTO> findAll() {
		List<Animal> result = repository.findAll();
		return result.stream().map(x -> new AnimalDTO(x)).collect(Collectors.toList());
	}

	
}
