package ee.cesepp.proovikontrolltoo1.repository;

import ee.cesepp.proovikontrolltoo1.entity.Numbrid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NumberRepository extends JpaRepository<Numbrid, Long> {
}
