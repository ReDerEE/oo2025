package ee.cesepp.kontrolltoo1.repository;

import ee.cesepp.kontrolltoo1.entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordRepository extends JpaRepository<Word, Long> {
}
