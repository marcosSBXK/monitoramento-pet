package com.labes.monitoramentopet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.labes.monitoramentopet.dto.AnimalDTO;
import com.labes.monitoramentopet.services.AnimalService;

@RestController
@RequestMapping(value = "/animal")
public class AnimalController {
	
	@Autowired
	private AnimalService service;
	
	@GetMapping
	public ResponseEntity<List<AnimalDTO>> findAll() {
		List<AnimalDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}

}
