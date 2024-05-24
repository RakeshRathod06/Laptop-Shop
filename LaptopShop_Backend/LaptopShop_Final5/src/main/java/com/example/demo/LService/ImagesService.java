package com.example.demo.LService;

import java.util.List;

import com.example.demo.LEntity.Images;

public interface ImagesService {

Images saveImages(Images images);
List<Images> getAllImages();
Images getImagesById(Long id);
Images updateImages(Long id, Images images);
void deleteImages(Long id);
}