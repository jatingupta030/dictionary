package com.dictionary.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class FeedMessage implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int messageID;

    @Column(length = 1024)
    String title;

    @Column(length = 2048)
    String description;

    String link;

    String author;

    String guid;

    String publishDate;
    
    public int getMessageID() {
        return messageID;
    }

    public void setMessageID(int messageID) {
        this.messageID = messageID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGuid() {
        return guid;
    }

    public void setGuid(String guid) {
        this.guid = guid;
    }

	public String getPublishDate() {
		return publishDate;
	}

	public void setPublishDate(String publishDate) {
		this.publishDate = publishDate;
	}
    
}