package com.dictionary.service;

import com.dictionary.dao.NewsDAO;
import com.dictionary.dao.impl.NewsDAOImpl;
import com.dictionary.model.FeedMessage;
import com.dictionary.model.Result;
import com.dictionary.model.Word;
import com.dictionary.util.HibernateUtil;
import org.hibernate.Session;

import javax.ws.rs.*;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Jatin on 1/17/2016.
 */

@Path("/service/news")
public class NewsService {

    @POST
    @Path("/post")
    @Produces(MediaType.APPLICATION_JSON)
    public Result postFeeds(){
       NewsDAO newsDAO = new NewsDAOImpl();
        String response = newsDAO.postFeeds();
        Result result = new Result();
        result.setMessage(response);
        return result;
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<FeedMessage> fetchFeeds(){
        NewsDAO newsDAO = new NewsDAOImpl();
        return (ArrayList<FeedMessage>)newsDAO.fetchFeeds();
    }

}
