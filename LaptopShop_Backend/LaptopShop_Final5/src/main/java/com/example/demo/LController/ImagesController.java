package com.example.demo.LController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.LEntity.Images;
import com.example.demo.LService.ImagesService;

import java.util.List;

@RestController
@RequestMapping("/api/images")
@CrossOrigin("*")
public class ImagesController {

    private final ImagesService imagesService;

    @Autowired
    public ImagesController(ImagesService imagesService) {
        this.imagesService = imagesService;
    }

    @PostMapping
    public ResponseEntity<Images> saveImages(@RequestBody Images images) {
        Images savedImages = imagesService.saveImages(images);
        return new ResponseEntity<>(savedImages, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Images> getAllImages() {
        return imagesService.getAllImages();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Images> getImagesById(@PathVariable Long id) {
        Images images = imagesService.getImagesById(id);
        return images != null ? ResponseEntity.ok(images) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Images> updateImages(@PathVariable Long id, @RequestBody Images images) {
    	Images updatedImages = imagesService.updateImages(id, images);
        return updatedImages != null ? ResponseEntity.ok(updatedImages) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteImages(@PathVariable Long id) {
    	imagesService.deleteImages(id);
        return ResponseEntity.ok("Laptop Deleted successfully...");
    }
}
