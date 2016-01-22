package com.dictionary.dao;

import com.dictionary.model.FeedMessage;
import org.json.simple.JSONArray;

import java.util.List;
/**
 * Created by Jatin on 1/20/2016.
 */


public interface NewsDAO {
     List<FeedMessage> fetchFeeds();
     String postFeeds();
}
