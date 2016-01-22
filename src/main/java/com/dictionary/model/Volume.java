package com.dictionary.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Jatin on 1/22/2016.
 */
@Entity
public class Volume implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int volumeID ;
    String name;

    /*@OneToMany(mappedBy = "volume")
    List<Word> words = new ArrayList<Word>();
*/
    public int getVolumeID() {
        return volumeID;
    }

    public void setVolumeID(int volumeID) {
        this.volumeID = volumeID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

  /*  public List<Word> getWords() {
        return words;
    }

    public void setWords(List<Word> words) {
        this.words = words;
    }*/
}
