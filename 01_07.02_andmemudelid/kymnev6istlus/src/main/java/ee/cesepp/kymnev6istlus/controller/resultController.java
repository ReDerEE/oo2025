package ee.cesepp.kymnev6istlus.controller;

import ee.cesepp.kymnev6istlus.entity.results;
import ee.cesepp.kymnev6istlus.repository.resultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class resultController {
    @Autowired
    resultRepository resultRepository;

    @GetMapping("results")
    public List<results> getResults(){
        return resultRepository.findAll();
    }
    @PostMapping("results")
    public List<results> addResults(@RequestBody results results){

        resultRepository.save(results);
        return resultRepository.findAll();
    }
}
