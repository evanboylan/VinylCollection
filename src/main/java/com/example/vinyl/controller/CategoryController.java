package com.example.vinyl.controller;

import com.example.vinyl.model.Artist;
import com.example.vinyl.model.Category;
import com.example.vinyl.repository.ArtistRepository;
import com.example.vinyl.repository.CategoryRepository;
import com.example.vinyl.repository.RecordRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private RecordRepository recordRepo;
    private ArtistRepository artistRepo;
    private CategoryRepository categoryRepo;

    public CategoryController(RecordRepository recordRepo, ArtistRepository artistRepo, CategoryRepository categoryRepo) {
        this.recordRepo = recordRepo;
        this.artistRepo = artistRepo;
        this.categoryRepo = categoryRepo;
    }

    @GetMapping("/")
    public Iterable<Category> retrieveAllCategories(){
        return categoryRepo.findAll();
    }
}
