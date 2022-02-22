package com.example.vinyl.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

@Entity
public class Category {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String imageUrl;

    @ManyToMany
    @JsonIgnore
    private Collection<Record> records;

    public Category(String name, String imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }

    public Category() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Collection<Record> getRecords() {
        return records;
    }
}
