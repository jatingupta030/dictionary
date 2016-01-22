package com.dictionary.dao.impl;

import com.dictionary.dao.EditedWordDAO;
import com.dictionary.model.EditedWord;
import com.dictionary.util.HibernateUtil;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by Jatin on 1/22/2016.
 */
public class EditedWordDAOImpl implements EditedWordDAO{
    public List<EditedWord> fetchEditedWords(){
        List<EditedWord> editedWordList = null;
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String hql = "FROM EditedWord";
            Query query = session.createQuery(hql);
            editedWordList = query.list();
            session.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return editedWordList;
    }

    public EditedWord updateEditedWord(EditedWord editedWord){
        EditedWord newEditedWord = null;
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String queryString = "from EditedWord where editedWordID = :id";
            Query query = session.createQuery(queryString);
            query.setInteger("id", editedWord.getEditedWordID());
            newEditedWord =(EditedWord) query.uniqueResult();
            if(newEditedWord != null && editedWord != null) {
                newEditedWord.setName(editedWord.getName());
                newEditedWord.setMeaning(editedWord.getMeaning());
                newEditedWord.setDescription(editedWord.getDescription());
                session.update(newEditedWord);
                session.getTransaction().commit();
                session.close();
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return newEditedWord;
    }

    public EditedWord addEditedWord(EditedWord editedWord){
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            if(editedWord != null) {
                session.save(editedWord);
            }
            session.getTransaction().commit();
            session.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return editedWord;
    }

    public String deleteEditedWord(int id){
        String result = "ERROR";
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String queryString = "from EditedWord where editedWordID = :id";
            Query query = session.createQuery(queryString);
            query.setInteger("id", id);
            EditedWord editedWord =(EditedWord) query.uniqueResult();
            session.delete(editedWord);
            session.getTransaction().commit();
            session.close();
            result = "SUCCESS";
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }
}
