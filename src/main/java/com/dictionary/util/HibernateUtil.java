package com.dictionary.util;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

/**
 * Created by Jatin on 1/20/2016.
 */
public class HibernateUtil {


    private static  SessionFactory sessionFactory;

    private static SessionFactory buildSessionFactory(){
        try{
            if(sessionFactory == null){
                Configuration cfg = new Configuration().configure();
                StandardServiceRegistryBuilder serviceRegistryBuilder = new StandardServiceRegistryBuilder();
                serviceRegistryBuilder.applySettings(cfg.getProperties());
                ServiceRegistry serviceRegistry = serviceRegistryBuilder.build();
                sessionFactory = cfg.buildSessionFactory(serviceRegistry);
            }
            return sessionFactory;
        }catch(Throwable ex){
            ex.printStackTrace();
            throw new ExceptionInInitializerError(ex);
        }
    }

    public static SessionFactory getSessionFactory()
    {
        return buildSessionFactory();
    }

    public static void shutdown()
    {
        getSessionFactory().close();
    }

    private void getString1(){
        System.out.println("dsfsdf");
    }


}
