package com.dictionary.service;

import com.dictionary.dao.NewsDAO;
import com.dictionary.dao.VolumeDAO;
import com.dictionary.dao.impl.NewsDAOImpl;
import com.dictionary.dao.impl.VolumeDAOImpl;
import com.dictionary.model.FeedMessage;
import com.dictionary.model.Result;
import com.dictionary.model.Volume;
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

@Path("/service/volume")
public class VolumeService {

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Volume> fetchVolumes(){
        VolumeDAO volumeDAO = new VolumeDAOImpl();
        return volumeDAO.fetchVolumes();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Volume getVolumeDetail(@PathParam("id") String id){
        VolumeDAO volumeDAO = new VolumeDAOImpl();
        if(volumeDAO != null){
            return volumeDAO.getVolumeDetail(Integer.parseInt(id));
        }
        return null;
    }

    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Volume addVolume(Volume volume){
        VolumeDAO volumeDAO = new VolumeDAOImpl();
        if(volumeDAO != null){
            return volumeDAO.addVolume(volume);
        }
        return null;
    }
    
    @POST
    @Path("/update")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Volume updateVolume(Volume volume){
        VolumeDAO volumeDAO = new VolumeDAOImpl();
        if(volumeDAO != null){
            return volumeDAO.updateVolume(volume);
        }
        return null;
    }
    
    @POST
    @Path("/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Result deleteVolume(@PathParam("id") String id){
        VolumeDAO volumeDAO = new VolumeDAOImpl();
        Result result = new Result();
        if(volumeDAO != null){
        	result.setMessage(volumeDAO.deleteVolume(Integer.parseInt(id)));
        }
        return result;
    }
}
