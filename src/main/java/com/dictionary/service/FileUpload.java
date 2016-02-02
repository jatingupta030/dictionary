package com.dictionary.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.dictionary.model.Result;
import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.FormDataParam;

@Path("/service/file")
public class FileUpload {
	final static String UPLOAD_PATH = "/var/dictionaryApp/images/uploads/";
	@POST
	@Path("/upload")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON)
	public Result uploadFile(
		@FormDataParam("file") InputStream uploadedInputStream,
		@FormDataParam("file") FormDataContentDisposition fileDetail,
		@FormDataParam("path") String path) {
		Result result = new Result();
		if(fileDetail != null){
			String uploadedFileLocation = UPLOAD_PATH + fileDetail.getFileName();
			File f = new File(UPLOAD_PATH);
			if(!f.exists()){
				f.mkdir();
			}
			String message = writeToFile(uploadedInputStream, uploadedFileLocation);
			if(message.equals("SUCCESS")){
				result.setMessage(fileDetail.getFileName());
			}
			else{
				result.setMessage(message);
			}
		}
		return result;
	}
	
	private String writeToFile(InputStream uploadedInputStream,
			String uploadedFileLocation) {
			String message = "ERROR";
			try {
				OutputStream out = new FileOutputStream(new File(uploadedFileLocation));
				int read = 0;
				byte[] bytes = new byte[1024];

				//out = new FileOutputStream(new File(uploadedFileLocation));
				while ((read = uploadedInputStream.read(bytes)) != -1) {
					out.write(bytes, 0, read);
				}
				out.flush();
				out.close();
				message = "SUCCESS";
			} catch (IOException e) {
				e.printStackTrace();
			}
			return message;
		}
}
