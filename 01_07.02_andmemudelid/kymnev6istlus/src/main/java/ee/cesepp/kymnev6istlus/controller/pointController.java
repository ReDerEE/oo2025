package ee.cesepp.kymnev6istlus.controller;

import ee.cesepp.kymnev6istlus.entity.points;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class pointController {
    @Autowired
    private ee.cesepp.kymnev6istlus.repository.pointRepository pointRepository;

    @GetMapping("points")
    public List<points> getResults(){
        return pointRepository.findAll();
    }


}
