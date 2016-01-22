package com.dictionary.dao;

import com.dictionary.model.Word;

import java.util.List;

/**
 * Created by Jatin on 1/22/2016.
 */
public interface WordDAO {
    List<Word> fetchWords();
    Word addDictionaryWord(Word word);
    Word editDictionaryWord(Word word);
    String deleteDictionaryWord(int id);
}
