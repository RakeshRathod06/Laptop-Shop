package com.example.demo.LRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.LEntity.LUser;

public interface LUserRepository extends JpaRepository<LUser, Long> {
    LUser findByUsername(String username);
}
