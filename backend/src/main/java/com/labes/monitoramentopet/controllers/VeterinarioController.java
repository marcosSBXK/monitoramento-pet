package com.labes.monitoramentopet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.labes.monitoramentopet.dto.VeterinarioDTO;
import com.labes.monitoramentopet.services.VeterinarioService;

@RestController
@RequestMapping(value = "/veterinario")
public class VeterinarioController {
	
	@Autowired
	private VeterinarioService service;
	
	@GetMapping
	public ResponseEntity<List<VeterinarioDTO>> findAll() {
		List<VeterinarioDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}

}
