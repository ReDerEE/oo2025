package ee.cesepp.kontrolltoo1.controller;


import ee.cesepp.kontrolltoo1.entity.Word;
import ee.cesepp.kontrolltoo1.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WordController {
    @Autowired
    WordRepository wordRepository;

    @PostMapping("addWord")
    public List<Word> addWord(@RequestBody Word word){
        if (word.getWord()==null){
            throw new RuntimeException("ERROR_WORD_FIELD_MUST_BE_FILLED");
        }
        System.out.println(word.getWord());
        String testWord = word.getWord();
        for(int i = 0;i < testWord.length(); i++){
            if(Character.getNumericValue(testWord.charAt(i)) >= 0 && Character.getNumericValue(testWord.charAt(i)) <= 9){
                throw new RuntimeException("ERROR_WORD_CANNOT_CONTAIN_NUMBERS");
            }
        }
        word.setWord((word.getWord()).toLowerCase());
        wordRepository.save(word);
        return wordRepository.findAll();
    }

    @GetMapping("words")
    public List<Word> getWords(){
        return wordRepository.findAll();
    }
}
