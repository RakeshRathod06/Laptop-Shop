package com.example.demo.LService;

import com.example.demo.LEntity.Laptop1;
import com.example.demo.LException.ResourceNotFoundException;
import com.example.demo.LRepository.LaptopRepo1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaptopServiceImpl1 implements LaptopService1 {
    private final LaptopRepo1 laptopRepository;

    @Autowired
    public LaptopServiceImpl1(LaptopRepo1 laptopRepository) {
        this.laptopRepository = laptopRepository;
    }

    @Override
    public Laptop1 saveLaptop(Laptop1 laptop) {
        return laptopRepository.save(laptop);
    }

    @Override
    public List<Laptop1> getAllLaptops() {
        return laptopRepository.findAll();
    }

    @Override
    public Laptop1 getLaptopById(Long id) {
        return laptopRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Laptop not found with id: " + id));
    }

    @Override
    public Laptop1 updateLaptop(Long id, Laptop1 laptop) {
        Laptop1 existingLaptop = laptopRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Laptop not found with id: " + id));
        if (existingLaptop != null) {
            existingLaptop.setBrand(laptop.getBrand());
            existingLaptop.setModel(laptop.getModel());
            existingLaptop.setPrice(laptop.getPrice());
            existingLaptop.setDescription(laptop.getDescription());
            existingLaptop.setImage(laptop.getImage());

            return laptopRepository.save(existingLaptop);
        }
        return null;
    }

    @Override
    public Laptop1 deleteLaptop(Long id) {
        laptopRepository.deleteById(id);
		return null;
    }
}
