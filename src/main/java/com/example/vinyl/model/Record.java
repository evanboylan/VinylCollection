package com.example.vinyl.model;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Record {

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String imageUrl;
    private String releaseYear;
    private String label;
    private String barcode;
    private String color;

    @ManyToMany
    private Collection<Category> categories;

    @ManyToOne
    private Artist artist;

    public Record(String name, String imageUrl, String releaseYear, String label, String barcode, String color, Artist artist, Category... category) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.releaseYear = releaseYear;
        this.label = label;
        this.barcode = barcode;
        this.color = color;
        this.artist = artist;
        this.categories = Arrays.asList(category);
    }

    public Record() {
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getReleaseYear() {
        return releaseYear;
    }

    public String getLabel() {
        return label;
    }

    public String getBarcode() {
        return barcode;
    }

    public String getColor() {
        return color;
    }

    public Collection<Category> getCategories() {
        return categories;
    }

    public Artist getArtist() {
        return artist;
    }
}
