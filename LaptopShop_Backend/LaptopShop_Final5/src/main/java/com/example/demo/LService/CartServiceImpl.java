package com.example.demo.LService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.LEntity.Cart;
import com.example.demo.LException.ResourceNotFoundException;
import com.example.demo.LRepository.CartRepository;

@Service
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;

    @Autowired
    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    @Override
    public Cart getCartById(Long id) {
        return cartRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found with id: " + id));
    }

    @Override
    public Cart updateCart(Long id, Cart cart) {
        Cart existingCart = cartRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found with id: " + id));

        existingCart.setBrand(cart.getBrand());
        existingCart.setModel(cart.getModel());
        existingCart.setPrice(cart.getPrice());
        existingCart.setDescription(cart.getDescription());
        existingCart.setImage(cart.getImage());

        return cartRepository.save(existingCart);
    }

    @Override
    public Cart deleteCart(Long id) {
        Cart cartToDelete = cartRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found with id: " + id));

        cartRepository.delete(cartToDelete);
		return cartToDelete;
    }

    // Implement other methods of CartService
}
