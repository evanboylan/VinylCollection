package com.example.vinyl.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Artist {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String imageUrl;

    @OneToMany(mappedBy = "artist")
    private Collection<Record> records;

    public Artist(String name, String imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }

    public Artist() {
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
