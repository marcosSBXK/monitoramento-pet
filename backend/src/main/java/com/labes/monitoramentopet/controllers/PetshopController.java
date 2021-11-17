package com.labes.monitoramentopet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.labes.monitoramentopet.dto.PetshopDTO;
import com.labes.monitoramentopet.services.PetshopService;

@RestController
@RequestMapping(value = "/petshop")
public class PetshopController {
	
	@Autowired
	private PetshopService service;
	
	@GetMapping
	public ResponseEntity<List<PetshopDTO>> findAll() {
		List<PetshopDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}

}
