package com.example.demo.LController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.LEntity.Laptop1;
import com.example.demo.LService.LaptopService1;

import java.util.List;

@RestController
@RequestMapping("/api/laptops")
@CrossOrigin("*")
public class LController {

    private final LaptopService1 laptopService;

    @Autowired
    public LController(LaptopService1 laptopService) {
        this.laptopService = laptopService;
    }

    @PostMapping
    public ResponseEntity<Laptop1> saveLaptop(@RequestBody Laptop1 laptop) {
        Laptop1 savedLaptop = laptopService.saveLaptop(laptop);
        return new ResponseEntity<>(savedLaptop, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Laptop1> getAllLaptops() {
        return laptopService.getAllLaptops();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Laptop1> getLaptopById(@PathVariable Long id) {
        Laptop1 laptop = laptopService.getLaptopById(id);
        return laptop != null ? ResponseEntity.ok(laptop) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Laptop1> updateLaptop(@PathVariable Long id, @RequestBody Laptop1 laptop) {
        Laptop1 updatedLaptop = laptopService.updateLaptop(id, laptop);
        return updatedLaptop != null ? ResponseEntity.ok(updatedLaptop) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteLaptop(@PathVariable Long id) {
        laptopService.deleteLaptop(id);
        return ResponseEntity.ok("Laptop Deleted successfully...");
    }
}
