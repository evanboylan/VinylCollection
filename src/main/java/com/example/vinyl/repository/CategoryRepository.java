package com.example.vinyl.repository;

import com.example.vinyl.model.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {
}
