package ee.cesepp.kymnev6istlus.controller;

import ee.cesepp.kymnev6istlus.entity.Player;
import ee.cesepp.kymnev6istlus.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:5173")
@RestController

public class PlayerController {
    @Autowired
    PlayerRepository playerRepository;


    @GetMapping("player")
    public List<Player> getPlayer(){
        List list = playerRepository.findAll();
        
        System.out.println(list);
        return playerRepository.findAll();
    }

    @GetMapping("player/{id}")
    public Player getSinglePlayer(@PathVariable Long id) {
        return playerRepository.findById(id).orElseThrow(); //SELECT * FROM         extends JpaRepository<Product>
    }

    @GetMapping("player-country")
    public Page<Player> getCountryPlayer (@RequestParam String country, Pageable pageable){
        if(Objects.equals(country, "ALL")){
            return playerRepository.findAll(pageable);
        }
        return playerRepository.findByCountry(country, pageable);
    }

    @PostMapping("player")
    public List<Player> addPlayer(@RequestBody Player player){
        if(player.getAge()==null||player.getName()==null||player.getCountry()==null){
            throw new RuntimeException("ERR_ALL_FIELDS_MUST_BE_FILLED");
        }
        playerRepository.save(player);
        return playerRepository.findAll();
    }

    @PutMapping("player") // postman
    public List<Player> editPlayer(@RequestBody Player player) {
        if (player.getId() == null) {
            throw new RuntimeException("ERROR_CANNOT_EDIT_WITHOUT_ID");
        }

        playerRepository.save(player);
        return playerRepository.findAll();
    }


}
