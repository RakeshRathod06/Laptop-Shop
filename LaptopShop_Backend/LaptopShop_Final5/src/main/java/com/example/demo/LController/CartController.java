package com.example.demo.LController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.LEntity.Cart;
import com.example.demo.LService.CartService;

@RestController
@RequestMapping("/api/carts")
@CrossOrigin("*")
public class CartController {

    private final CartService cartService;

  
    
    
    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping
    public ResponseEntity<Cart> saveCart(@RequestBody Cart cart) {
        Cart savedCart = cartService.saveCart(cart);
        return new ResponseEntity<>(savedCart, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Cart> getAllCarts() {
        return cartService.getAllCarts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable Long id) {
        Cart cart = cartService.getCartById(id);
        return cart != null ? ResponseEntity.ok(cart) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cart> updateCart(@PathVariable Long id, @RequestBody Cart cart) {
        Cart updatedCart = cartService.updateCart(id, cart);
        return updatedCart != null ? ResponseEntity.ok(updatedCart) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCart(@PathVariable Long id) {
        Cart deletedCart = cartService.deleteCart(id);
        return deletedCart != null ? ResponseEntity.ok("Cart Deleted successfully...") : ResponseEntity.notFound().build();
    }

    // Other endpoints for cart-related operations
}
