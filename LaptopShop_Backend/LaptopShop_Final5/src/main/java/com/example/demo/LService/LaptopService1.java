package com.example.demo.LService;


import com.example.demo.LEntity.Laptop1;

import java.util.List;

public interface LaptopService1 {
	   Laptop1 saveLaptop(Laptop1 laptop);
	    List<Laptop1> getAllLaptops();
	    Laptop1 getLaptopById(Long id);
	    Laptop1 updateLaptop(Long id, Laptop1 laptop);
	    Laptop1 deleteLaptop(Long id);
}

