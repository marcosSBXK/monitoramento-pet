package com.labes.monitoramentopet.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.labes.monitoramentopet.dto.AlimentacaoDTO;
import com.labes.monitoramentopet.entities.Alimentacao;
import com.labes.monitoramentopet.repositories.AlimentacaoRepository;

@Service
public class AlimentacaoService {

	@Autowired
	private AlimentacaoRepository repository;
	
	public List<AlimentacaoDTO> findAll() {
		List<Alimentacao> result = repository.findAll();
		return result.stream().map(x -> new AlimentacaoDTO(x)).collect(Collectors.toList());
	}

	
}
