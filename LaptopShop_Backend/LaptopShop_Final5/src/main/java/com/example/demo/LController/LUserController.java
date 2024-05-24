package com.example.demo.LController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.LService.LUserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Dto.LAdminDto;
import com.example.demo.Dto.LUserDTO;
import com.example.demo.LEntity.LAdmin;
import com.example.demo.LEntity.LUser;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class LUserController {

    private final LUserService userService;

    @Autowired
    public LUserController(LUserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<LUser> registerUser(@RequestBody LUserDTO userDto) {
        LUser registeredUser = userService.registerUser(userDto);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }
    
    @PostMapping("/login")
    public ResponseEntity<LUser> loginAdmin(@RequestBody LUserDTO credentials) {
        String username = credentials.getUsername();
        String password = credentials.getPassword();

        LUser loggedInUser = userService.loginUser(username, password);

        if (loggedInUser != null) {
            return ResponseEntity.ok(loggedInUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    
    
    
    
    //get all
    @GetMapping
    public ResponseEntity<List<LUser>> getAllUsers() {
        List<LUser> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    // GET - retrieve a single user by ID
    @GetMapping("/{id}")
    public ResponseEntity<LUser> getUserById(@PathVariable Long id) {
        LUser user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    // PUT - update an existing user
    @PutMapping("/{id}")
    public ResponseEntity<LUser> updateUser(@PathVariable Long id, @RequestBody LUser user) {
        LUser updatedUser = userService.updateUser(id, user);
        return ResponseEntity.ok(updatedUser);
    }

    // DELETE - delete a user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

}
