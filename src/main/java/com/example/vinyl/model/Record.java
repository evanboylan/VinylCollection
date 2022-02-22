package com.example.vinyl.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Record {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String imageUrl;
    private String bigImageUrl;
    private String releaseYear;
    private String label;
    private String barcode;
    private String color;

    @ManyToMany(mappedBy = "records")
    private Collection<Category> categories;

    @ManyToOne
    private Artist artist;

    public Record(String name, String imageUrl, String bigImageUrl, String releaseYear, String label, String barcode, String color, Artist artist, Category... category) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.bigImageUrl = bigImageUrl;
        this.releaseYear = releaseYear;
        this.label = label;
        this.barcode = barcode;
        this.color = color;
        this.artist = artist;
        this.categories = Arrays.asList(category);
    }

    public Record() {
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

    public String getBigImageUrl() {
        return bigImageUrl;
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
