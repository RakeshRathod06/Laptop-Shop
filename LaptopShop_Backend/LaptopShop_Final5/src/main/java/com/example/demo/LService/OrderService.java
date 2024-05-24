package com.example.demo.LService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.LEntity.Order;
import com.example.demo.LException.ResourceNotFoundException;
import com.example.demo.LRepository.OrderRepository;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found with id: " + id));
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order updateOrder(Long id, Order updatedOrder) {
        Order existingOrder = orderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found with id: " + id));
        if (existingOrder != null) {
            // Update the fields as needed
            existingOrder.setBrand(updatedOrder.getBrand());
            existingOrder.setModel(updatedOrder.getModel());
            existingOrder.setPrice(updatedOrder.getPrice());
            existingOrder.setImage(updatedOrder.getImage());
            existingOrder.setDescription(updatedOrder.getDescription());           


            return orderRepository.save(existingOrder);
        }
        return null;
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
