package com.example.demo.LService;

import java.util.List;

import com.example.demo.LEntity.Cart;
import com.example.demo.LEntity.Laptop1;

	public interface CartService {
	
		   Cart saveCart(Cart cart);
		    List<Cart> getAllCarts();
		    Cart getCartById(Long id);
		    Cart updateCart(Long id, Cart cart);
		    Cart deleteCart(Long id);
	}

