package com.dictionary.dao.impl;

import com.dictionary.dao.NewsDAO;
import com.dictionary.model.Feed;
import com.dictionary.model.FeedMessage;
import com.dictionary.model.RSSFeedParser;
import com.dictionary.util.HibernateUtil;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by Jatin on 1/20/2016.
 */
public class NewsDAOImpl implements NewsDAO{
    public List<FeedMessage> fetchFeeds(){
        List<FeedMessage> results = null;
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String hql = "FROM FeedMessage";
            Query query = session.createQuery(hql);
            results = query.list();
            session.close();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return results;
    }

    public String postFeeds(){
        String response = "ERROR";
        RSSFeedParser parser = new RSSFeedParser("http://timesofindia.indiatimes.com/rssfeeds/3942693.cms");
        Feed feeds = parser.readFeed();
        try{
            deleteFeeds();
            for(FeedMessage feedMessage : feeds.getMessages()){

                Session session = HibernateUtil.getSessionFactory().openSession();
                session.beginTransaction();
                if(session != null){
                        session.save(feedMessage);
                }
                session.getTransaction().commit();
                session.close();
            }
            response = "SUCCESS";

        }catch(Exception e){
            e.printStackTrace();
            response = "ERROR";
        }
        return response;
    }

    private void deleteFeeds(){
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String hql = "delete from FeedMessage";
            Query query = session.createQuery(hql);
            query.executeUpdate();
            session.getTransaction().commit();
            session.close();
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
