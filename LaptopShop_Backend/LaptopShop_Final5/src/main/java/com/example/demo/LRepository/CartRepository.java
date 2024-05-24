package com.example.demo.LRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.LEntity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

}
