package com.labes.monitoramentopet.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.labes.monitoramentopet.dto.ClienteDTO;
import com.labes.monitoramentopet.entities.Cliente;
import com.labes.monitoramentopet.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Transactional(readOnly = true)
	public Page<ClienteDTO> findAll(Pageable pageable) {
		clienteRepository.findAll();
		Page<Cliente> result = repository.findAll(pageable);
		return result.map(x -> new ClienteDTO(x));
	}

}
