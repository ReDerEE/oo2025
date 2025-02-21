package ee.cesepp.kymnev6istlus.repository;

import ee.cesepp.kymnev6istlus.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
