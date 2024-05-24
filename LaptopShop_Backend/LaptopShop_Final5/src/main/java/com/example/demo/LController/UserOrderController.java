package com.example.demo.LController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.LEntity.UserOrder;
import com.example.demo.LService.UserOrderService;





@RestController
@RequestMapping("/api/userorders")
@CrossOrigin("*")
public class UserOrderController {
    private final UserOrderService userorderService;

    @Autowired
    public UserOrderController(UserOrderService userorderService) {
        this.userorderService = userorderService;
    }

    @GetMapping
    public ResponseEntity<List<UserOrder>> getAllUserOrders() {
        List<UserOrder> userorders = userorderService.getAllUserOrders();
        return new ResponseEntity<>(userorders, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserOrder> getUserOrderById(@PathVariable Long id) {
        UserOrder userorder = userorderService.getUserOrderById(id);
        if (userorder != null) {
            return new ResponseEntity<>(userorder, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<UserOrder> createUserOrder(@RequestBody UserOrder userorder) {
        UserOrder createdUserOrder = userorderService.createUserOrder(userorder);
        return new ResponseEntity<>(createdUserOrder, HttpStatus.CREATED);
    }
    @PostMapping("/add")
    public ResponseEntity<UserOrder> createUserOrder1(@RequestBody UserOrder userorder) {
        UserOrder createdUserOrder = userorderService.createUserOrder(userorder);
        return new ResponseEntity<>(createdUserOrder, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserOrder> updateUserOrder(@PathVariable Long id, @RequestBody UserOrder updatedUserOrder) {
        UserOrder updated = userorderService.updateUserOrder(id, updatedUserOrder);
        if (updated != null) {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserOrder(@PathVariable Long id) {
        userorderService.deleteUserOrder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
