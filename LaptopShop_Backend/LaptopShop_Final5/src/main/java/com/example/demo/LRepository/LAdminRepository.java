package com.example.demo.LRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.LEntity.LAdmin;

public interface LAdminRepository extends JpaRepository<LAdmin, Long> {
    LAdmin findByUsername(String username);
}


