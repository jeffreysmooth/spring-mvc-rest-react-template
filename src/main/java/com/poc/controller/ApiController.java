package com.poc.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poc.model.MessageModel;

@RestController
@RequestMapping("/api")
public class ApiController {
	@RequestMapping("greeting")
	public String greeting() {
		return "Hello!!! Welcome to our site.";
	}
	
	@RequestMapping("greeting/json")
	public MessageModel getJson() {
		MessageModel obj=new MessageModel();
		obj.setMessage("Greeting message in JSON format");
		obj.setType("Greeting");
		return obj;
	}

}
