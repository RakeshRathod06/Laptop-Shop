package com.example.demo.LRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.LEntity.Images;

public interface ImagesRepository extends JpaRepository<Images, Long> {
    // You can add custom query methods here if needed
}
