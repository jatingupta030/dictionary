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
public class Volume implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int volumeID ;
    String name;

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
}
