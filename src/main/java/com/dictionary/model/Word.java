package com.dictionary.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Jatin on 1/22/2016.
 */
@Entity
public class Word implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int wordID ;
    String name;
    String pronunciation;
    String meaning;
    String description;

    /*@ManyToOne
    @JoinColumn(name = "volume")
    Volume volume;*/

    public int getWordID() {
        return wordID;
    }

    public void setWordID(int wordID) {
        this.wordID = wordID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPronunciation() {
        return pronunciation;
    }

    public void setPronunciation(String pronunciation) {
        this.pronunciation = pronunciation;
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

    /*public Volume getVolume() {
        return volume;
    }

    public void setVolume(Volume volume) {
        this.volume = volume;
    }*/
}
