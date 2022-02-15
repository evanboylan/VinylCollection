package com.example.vinyl.repository;

import com.example.vinyl.model.Record;
import org.springframework.data.repository.CrudRepository;

public interface RecordRepository extends CrudRepository<Record, Long> {
}
