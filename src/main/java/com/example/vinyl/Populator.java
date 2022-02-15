package com.example.vinyl;

import com.example.vinyl.model.Artist;
import com.example.vinyl.model.Category;
import com.example.vinyl.model.Record;
import com.example.vinyl.repository.ArtistRepository;
import com.example.vinyl.repository.CategoryRepository;
import com.example.vinyl.repository.RecordRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private RecordRepository recordRepo;
    private CategoryRepository categoryRepo;
    private ArtistRepository artistRepo;

    public Populator(RecordRepository recordRepo, CategoryRepository categoryRepo, ArtistRepository artistRepo) {
        this.recordRepo = recordRepo;
        this.categoryRepo = categoryRepo;
        this.artistRepo = artistRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Category videoGame = new Category("Video Games");
        Category anime = new Category("Anime");
        Category hipHop = new Category("Hip Hop");
        Category jazz = new Category("Jazz");
        Category electronic = new Category("Electronic");
        categoryRepo.save(videoGame);
        categoryRepo.save(anime);
        categoryRepo.save(hipHop);
        categoryRepo.save(jazz);
        categoryRepo.save(electronic);

        Artist darrenKorb = new Artist("Darren Korb", "https://i.discogs.com/CRywv_FoFFeKgH1WXDnV6sH09lyfpV1hnAyvv6Py32Y/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWltYWdlcy9BLTI0/MzA4OTktMTM4NTEx/NTg1OC05OTQ3Lmpw/ZWc.jpeg");
        Artist seatbelts = new Artist("Seatbelts", "https://i.discogs.com/47PjicGiwZLaaZiju9iCkg7ZEb6IR0WnkgVMTeefPiE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWltYWdlcy9BLTI4/OTgyOC0xMzM1NzAy/Mjk3LmpwZWc.jpeg");
        artistRepo.save(darrenKorb);
        artistRepo.save(seatbelts);

        Record transistor = new Record("Transistor", "https://i.discogs.com/0PDfsUDgSUGZjfQTqRRBq_stRpGBlm0SM0RcSz9qEII/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTYz/OTIyNzgtMTQxODA5/NzQxNy01OTM1Lmpw/ZWc.jpeg", "2014", "Supergiant Games", "SGG-01", "Clear Milky", darrenKorb, videoGame);
        Record cowboyBebop = new Record("Cowboy Bebop", "https://i.discogs.com/Rpes57v509z7BYI9jJ8JxJXRjvsdXnxsDCQdvM4plLE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTEw/NDM4NzYtMTE4NzQ3/NjcyNS5qcGVn.jpeg", "1998", "Milan Records", "19439787681", "Purple Translucent", seatbelts, anime, jazz, hipHop, electronic);
        recordRepo.save(transistor);
        recordRepo.save(cowboyBebop);
    }
}
