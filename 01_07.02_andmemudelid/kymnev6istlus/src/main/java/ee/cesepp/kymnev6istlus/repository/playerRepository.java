package ee.cesepp.kymnev6istlus.repository;

import ee.cesepp.kymnev6istlus.entity.Player;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {


    Page<Player> findByCountry(String country, Pageable pageable);
}

