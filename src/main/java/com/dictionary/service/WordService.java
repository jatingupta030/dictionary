package com.dictionary.service;

import com.dictionary.dao.WordDAO;
import com.dictionary.dao.impl.WordDAOImpl;
import com.dictionary.model.Word;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Jatin on 1/22/2016.
 */
@Path("/service/word")
public class WordService {

    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Word addEditedWord(Word word){
        WordDAO wordDAO = new WordDAOImpl();
        if(word != null){
            word = wordDAO.addDictionaryWord(word);
        }
        return word;
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Word> fetchEditedWords(){
        WordDAO wordDAO = new WordDAOImpl();
        return wordDAO.fetchWords();
    }

    @POST
    @Path("/delete/{id}")
    public Response deleteEditedWords(@PathParam("id") String id){
        WordDAO wordDAO = new WordDAOImpl();
        String result = "ERROR";
        if(id != null)
            result = wordDAO.deleteDictionaryWord(Integer.parseInt(id));
        return Response.status(201).entity(result).build();
    }


    @POST
    @Path("/update")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Word updateEditedWord(Word word){
        Word newWord = null;
        WordDAO wordDAO = new WordDAOImpl();
        if(word != null){
            newWord = wordDAO.editDictionaryWord(word);
        }
        return newWord;
    }

}

