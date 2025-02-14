package ee.cesepp.kymnev6istlus.controller;

import ee.cesepp.kymnev6istlus.entity.player;
import ee.cesepp.kymnev6istlus.repository.playerRepository;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@RestController
public class playerController {
    @Autowired
    playerRepository playerRepository;


    @GetMapping("player")
    public List<player> getPlayer(){
        List list = playerRepository.findAll();
        
        System.out.println(list);
        return playerRepository.findAll();
    }

    @PostMapping("player")
    public List<player> addPlayer(@RequestBody player player){
        playerRepository.save(player);
        return playerRepository.findAll();
    }
}
