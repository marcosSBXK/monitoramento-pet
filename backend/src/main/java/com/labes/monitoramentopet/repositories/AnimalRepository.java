package com.labes.monitoramentopet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.labes.monitoramentopet.entities.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Long> {
	

}
