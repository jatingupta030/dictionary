package com.dictionary.dao;

import com.dictionary.model.FeedMessage;
import com.dictionary.model.Volume;

import java.util.List;

/**
 * Created by Jatin on 1/20/2016.
 */


public interface VolumeDAO {
    List<Volume> fetchVolumes();
    Volume getVolumeDetail(int id);
    Volume addVolume(Volume volume);
}
