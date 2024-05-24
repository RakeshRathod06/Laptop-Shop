package com.example.demo.LRepository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.LEntity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Custom queries or methods if needed
}
