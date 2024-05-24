package com.example.demo.LRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.LEntity.UserOrder;

public interface UserOrderRepository extends JpaRepository<UserOrder, Long> {

}