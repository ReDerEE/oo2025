package ee.ReDerEE.proovikontrolltoo2.repository;

import ee.ReDerEE.proovikontrolltoo2.entity.EntityField;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface WordRepository extends JpaRepository<EntityField, Long> {


    Page<EntityField> findByWord(String word, Pageable pageable);
}
