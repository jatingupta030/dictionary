package com.dictionary.service;

import com.dictionary.dao.EditedWordDAO;
import com.dictionary.dao.NewsDAO;
import com.dictionary.dao.impl.EditedWordDAOImpl;
import com.dictionary.dao.impl.NewsDAOImpl;
import com.dictionary.model.EditedWord;
import com.dictionary.model.FeedMessage;
import com.dictionary.model.Result;
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

@Path("/service/edited/word")
public class EditedWordService {

    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public EditedWord addEditedWord(EditedWord word){
        EditedWordDAO editedWordDAO = new EditedWordDAOImpl();
        if(word != null){
            word = editedWordDAO.addEditedWord(word);
        }
        return word;
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<EditedWord> fetchEditedWords(){
        EditedWordDAO editedWordDAO = new EditedWordDAOImpl();
        return editedWordDAO.fetchEditedWords();
    }

    @POST
    @Path("/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Result deleteEditedWords(@PathParam("id") String id){
        EditedWordDAO editedWordDAO = new EditedWordDAOImpl();
        Result result = new Result();
        if(id != null)
            result.setMessage(editedWordDAO.deleteEditedWord(Integer.parseInt(id)));
        return result;
    }


    @POST
    @Path("/update")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public EditedWord updateEditedWord(EditedWord word){
        EditedWord editedWord = null;
        EditedWordDAO editedWordDAO = new EditedWordDAOImpl();
        if(word != null){
            editedWord = editedWordDAO.updateEditedWord(word);
        }
        return editedWord;
    }

}
