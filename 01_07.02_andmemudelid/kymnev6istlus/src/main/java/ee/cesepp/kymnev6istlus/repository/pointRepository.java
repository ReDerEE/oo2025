package ee.cesepp.kymnev6istlus.repository;

import ee.cesepp.kymnev6istlus.entity.Points;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PointRepository extends JpaRepository<Points, Long> {
}
