package com.labes.monitoramentopet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.labes.monitoramentopet.dto.AlimentacaoDTO;
import com.labes.monitoramentopet.services.AlimentacaoService;

@RestController
@RequestMapping(value = "/alimentacao")
public class AlimentacaoController {
	
	@Autowired
	private AlimentacaoService service;
	
	@GetMapping
	public ResponseEntity<List<AlimentacaoDTO>> findAll() {
		List<AlimentacaoDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}

}
