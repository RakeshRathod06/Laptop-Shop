package com.example.demo.LController;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.LService.LAdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Dto.LAdminDto;
import com.example.demo.LEntity.LAdmin;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin("*")
public class LAdminController {

    private final LAdminService adminService;

    @Autowired
    public LAdminController(LAdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/register")
    public ResponseEntity<LAdmin> registerAdmin(@RequestBody LAdmin admin) {
        LAdmin registeredAdmin = adminService.registerAdmin(admin);
        return new ResponseEntity<>(registeredAdmin, HttpStatus.CREATED);
    }
    
    
    /*fixed ADMIN Credentials
    @PostMapping("/registered")
    public ResponseEntity<LAdmin> saveDefaultAdmin(@RequestBody LAdmin admin) {
        LAdmin defaultAdmin = adminService.saveDefaultAdmin(admin);
        return new ResponseEntity<>(defaultAdmin, HttpStatus.CREATED);
    }*/
    //fixed ADMIN Credentials
    @PostMapping("/registered")
    public ResponseEntity<LAdmin> saveDefaultAdmin() {
        LAdmin defaultAdmin = adminService.saveDefaultAdmin();
        return new ResponseEntity<>(defaultAdmin, HttpStatus.CREATED);
    }
    
    @PostMapping("/login")
    public ResponseEntity<LAdmin> loginAdmin(@RequestBody LAdminDto credentials) {
        String username = credentials.getUsername();
        String password = credentials.getPassword();

        LAdmin loggedInAdmin = adminService.loginAdmin(username, password);

        if (loggedInAdmin != null) {
            return ResponseEntity.ok(loggedInAdmin);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
