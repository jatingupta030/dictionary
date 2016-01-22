package com.dictionary.dao.impl;

import com.dictionary.dao.WordDAO;
import com.dictionary.model.Word;
import com.dictionary.util.HibernateUtil;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by Jatin on 1/22/2016.
 */
public class WordDAOImpl implements WordDAO{

    public List<Word> fetchWords(){
        List<Word> words = null;
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String hql = "FROM EditedWord";
            Query query = session.createQuery(hql);
            words = query.list();
            session.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return words;
    }

    public Word addDictionaryWord(Word word){
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            if(word != null) {
                session.save(word);
            }
            session.getTransaction().commit();
            session.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return word;
    }

    public Word editDictionaryWord(Word word){
        Word newWord = null;
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String queryString = "from Word where wordID = :id";
            Query query = session.createQuery(queryString);
            query.setInteger("id", word.getWordID());
            newWord =(Word) query.uniqueResult();
            if(newWord != null && word != null) {
                newWord.setName(word.getName());
                newWord.setMeaning(word.getMeaning());
                newWord.setDescription(word.getDescription());
                newWord.setPronunciation(word.getPronunciation());
                newWord.setVolume(word.getVolume());
                session.update(newWord);
                session.getTransaction().commit();
                session.close();
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return newWord;
    }

    public String deleteDictionaryWord(int id){
        String result = "ERROR";
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String queryString = "from Word where wordID = :id";
            Query query = session.createQuery(queryString);
            query.setInteger("id", id);
            Word word =(Word) query.uniqueResult();
            session.delete(word);
            session.getTransaction().commit();
            session.close();
            result = "SUCCESS";
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;

    }
}
