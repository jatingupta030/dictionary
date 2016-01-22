package com.dictionary.service;

import com.dictionary.dao.NewsDAO;
import com.dictionary.dao.impl.NewsDAOImpl;
import com.dictionary.model.FeedMessage;
import com.dictionary.model.Word;
import com.dictionary.util.HibernateUtil;
import org.hibernate.Session;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Jatin on 1/17/2016.
 */

@Path("/service/news")
public class NewsService {

    @GET
    @Path("/post")
    public Response postFeeds(){
       NewsDAO newsDAO = new NewsDAOImpl();
        String response = newsDAO.postFeeds();
        return Response.status(200).entity(response).build();
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public List<FeedMessage> fetchFeeds(){
        NewsDAO newsDAO = new NewsDAOImpl();
        return newsDAO.fetchFeeds();
    }

}
