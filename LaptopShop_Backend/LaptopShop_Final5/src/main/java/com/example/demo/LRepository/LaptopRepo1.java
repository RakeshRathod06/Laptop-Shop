package com.example.demo.LRepository;

import com.example.demo.LEntity.Laptop1;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaptopRepo1 extends JpaRepository<Laptop1, Long> {
    // You can add custom query methods here if needed
}
