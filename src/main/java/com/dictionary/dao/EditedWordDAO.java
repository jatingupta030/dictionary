package com.dictionary.dao;

import com.dictionary.model.EditedWord;

import java.util.List;

/**
 * Created by Jatin on 1/22/2016.
 */
public interface EditedWordDAO {
    List<EditedWord> fetchEditedWords();
    EditedWord updateEditedWord(EditedWord editedWord);
    EditedWord addEditedWord(EditedWord editedWord);
    String deleteEditedWord(int id);
}
