package ee.cesepp.kymnev6istlus.controller;

import ee.cesepp.kymnev6istlus.entity.Player;
import ee.cesepp.kymnev6istlus.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @PostMapping("player")
    public List<Player> addPlayer(@RequestBody Player player){
        if(player.getAge()==null||player.getName()==null||player.getCountry()==null){
            throw new RuntimeException("ERR_ALL_FIELDS_MUST_BE_FILLED");
        }
        playerRepository.save(player);
        return playerRepository.findAll();
    }
}
