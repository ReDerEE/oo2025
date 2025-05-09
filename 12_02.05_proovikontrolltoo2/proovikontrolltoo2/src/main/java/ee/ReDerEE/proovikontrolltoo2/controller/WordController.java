package ee.ReDerEE.proovikontrolltoo2.controller;

import ee.ReDerEE.proovikontrolltoo2.entity.EntityField;
import ee.ReDerEE.proovikontrolltoo2.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class WordController {
    @Autowired
    WordRepository wordRepository;

    @GetMapping("words")
    public List<EntityField> getWords(){

        return wordRepository.findAll();
    }

    @GetMapping("pagedWords")
    public Page<EntityField> getPagedWords(/*@RequestParam String word,*/ Pageable pageable) {
        return wordRepository.findAll(pageable);
    }

    @GetMapping("words/{id}")
    public EntityField getSingleWord(@PathVariable Long id){
        return wordRepository.findById(id).orElseThrow();
    }

    @PostMapping("words")
    public List<EntityField> addWords(@RequestBody EntityField entityField){
        wordRepository.save(entityField);
        return wordRepository.findAll();
    }

    @PutMapping("words")
    public List<EntityField> editWord(@RequestBody EntityField entityField){
        if(entityField.getId() == null){
            throw new RuntimeException("ERROR_CANNOT_EDIT_WITHOUT_ID");
        }
        else{
            wordRepository.save(entityField);
            return wordRepository.findAll();
        }
    }

    @DeleteMapping("words/{id}")
    public List<EntityField> deleteWord(@PathVariable Long id){
        wordRepository.deleteById(id);
        return wordRepository.findAll();
    }
}
