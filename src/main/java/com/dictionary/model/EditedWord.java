package com.dictionary.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by Jatin on 1/22/2016.
 */
@Entity
public class EditedWord implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int editedWordID ;
    String name;
    String meaning;
    String description;

    public int getEditedWordID() {
        return editedWordID;
    }

    public void setEditedWordID(int editedWordID) {
        this.editedWordID = editedWordID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMeaning() {
        return meaning;
    }

    public void setMeaning(String meaning) {
        this.meaning = meaning;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}
