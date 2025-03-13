package ee.cesepp.kontrolltoo1.repository;

import ee.cesepp.kontrolltoo1.entity.Cipher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CipherRepository extends JpaRepository<Cipher, Long> {
}
