package com.dictionary.dao.impl;

import com.dictionary.dao.VolumeDAO;
import com.dictionary.model.EditedWord;
import com.dictionary.model.Volume;
import com.dictionary.util.HibernateUtil;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by Jatin on 1/22/2016.
 */
public class VolumeDAOImpl implements VolumeDAO {
    public List<Volume> fetchVolumes(){
        List<Volume> volumeList = null;
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String hql = "FROM EditedWord";
            Query query = session.createQuery(hql);
            volumeList = query.list();
            session.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return volumeList;
    }

    public Volume getVolumeDetail(int id){
        Volume volume = null;
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            String hql = "FROM Volumewhere volumeID = :id";
            Query query = session.createQuery(hql);
            query.setInteger("id", id);
            volume = (Volume) query.uniqueResult();
            session.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return volume;
    }

    public Volume addVolume(Volume volume){
        try{
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            if(volume != null) {
                session.save(volume);
            }
            session.getTransaction().commit();
            session.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return volume;
    }
}
