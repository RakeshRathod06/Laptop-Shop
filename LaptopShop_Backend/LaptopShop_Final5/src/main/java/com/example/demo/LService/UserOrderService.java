package com.example.demo.LService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.LEntity.UserOrder;
import com.example.demo.LException.ResourceNotFoundException;
import com.example.demo.LRepository.OrderRepository;
import com.example.demo.LRepository.UserOrderRepository;




@Service
public class UserOrderService {
    private final UserOrderRepository userorderRepository;

    @Autowired
    public UserOrderService(UserOrderRepository userorderRepository) {
        this.userorderRepository = userorderRepository;
    }

    public List<UserOrder> getAllUserOrders() {
        return userorderRepository.findAll();
    }

    public UserOrder getUserOrderById(Long id) {
        return userorderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("UserOrder not found with id: " + id));
    }

    public UserOrder createUserOrder(UserOrder order) {
        return userorderRepository.save(order);
    }

    public UserOrder updateUserOrder(Long id, UserOrder updatedUserOrder) {
        UserOrder existingUserOrder = userorderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("UserOrder not found with id: " + id));
        if (existingUserOrder != null) {
            // Update the fields as needed
        	existingUserOrder.setUsername(updatedUserOrder.getUsername());
        	existingUserOrder.setEmail(updatedUserOrder.getEmail());
        	existingUserOrder.setContact(updatedUserOrder.getContact());
existingUserOrder.setAddress(updatedUserOrder.getAddress());
existingUserOrder.setProduct(updatedUserOrder.getProduct());
existingUserOrder.setItems(updatedUserOrder.getItems());
existingUserOrder.setStatus(updatedUserOrder.getStatus());

            return userorderRepository.save(existingUserOrder);
        }
        return null;
    }

    public void deleteUserOrder(Long id) {
    	userorderRepository.deleteById(id);
    }
}

