package com.labes.monitoramentopet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.labes.monitoramentopet.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
