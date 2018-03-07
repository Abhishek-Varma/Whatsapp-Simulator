const express = require('express');
const fs = require("fs");
const router = express.Router();
var multer = require('multer');

var DIR = './uploads/';
var upload = multer({dest: DIR}).single('input');
/* GET api listing. */
router.get('/', (req, res, next) => {

	// Asynchronous read
	fs.readFile('input.txt', function (err, data) {

	   	if (err) {
		      	return console.error(err);
		   	}

		   	//console.log("Asynchronous read: " + data.toString());

		   	var inputText= data.toString();
		   	inputText = inputText.trim();
		   	var matches = [];
		   	var initialRegexPattern=/(\d{2}[\/]\d{2}[\/]\d{4}[,]\s\d{2}[:]\d{2}\s[-]\s[A-Za-z\d\s']+[:]\s(.+?)+)/g;
		   	var newText= inputText.replace(initialRegexPattern,function(match,patternMatched){
		   		return "qqrqqrqqrqqrqqr"+patternMatched; // "qqrqqrqqrqqrqqr" is the delimeter pattern
		   	});
		   	newText = newText + "qqrqqrqqrqqrqqr";
		   	/* 	
		   		date : (\d{2}[\/]\d{2}[\/]\d{4})[,]
				time : (\d{2}[:]\d{2})\s[-]
				name : ([A-Za-z\d\s']+)[:]
				message : ([\s\S]+?(?=qqrqqrqqrqqrqqr))
			*/
		   	var regexPattern = /(\d{2}[\/]\d{2}[\/]\d{4})[,]\s(\d{2}[:]\d{2})\s[-]\s([A-Za-z\d\s']+)[:]\s([\s\S]+?(?=qqrqqrqqrqqrqqr))/g;

			newText.replace(regexPattern,function(match,date,time,name,message, worthless){
		   		matches.push({
		   			date: date,
		   			time: time,
		   			name: name,
		   			messageString: message  		
		   		});
		   	});
			console.log(matches);
			var id = 1;
			var lastName = '';
			var lastDate = '';
			for(var i = 0; i < matches.length; i++) {
				if( i == 0 ) {
					matches[i].id = id;
					lastName = matches[i].name;
					lastDate =matches[i].date;
				} else {
					if( matches[i].name == lastName) {

						if(lastDate == matches[i].date) {
							matches[i].id = -id;
						} else {
							matches[i].id = id;
						}

					} else {
						id = (id % 2) + 1;
						matches[i].id = id;
						lastName = matches[i].name;
						lastDate = matches[i].date;
					}
				}
			}

			var final_message = [];
			if(matches != null) {
				var date = matches[0].date;
				var temp = [];
				temp.push({
		   			time: matches[0].time,
		   			name: matches[0].name,
		   			messageString: matches[0].messageString,
		   			id: matches[0].id  		
		   		});
				for(var i=0;i<matches.length;i++) {
					if(date == matches[i].date) {
						temp.push({
				   			time: matches[i].time,
				   			name: matches[i].name,
				   			messageString: matches[i].messageString,
		   					id: matches[i].id 		
				   		});
					} else {
						final_message.push({
							date: date,
							messages: temp
						});
						temp = [];
						date = matches[i].date;
						temp.push({
				   			time: matches[i].time,
				   			name: matches[i].name,
				   			messageString: matches[i].messageString,
		   					id: matches[i].id
				   		});
					}
				}
				console.log('\n\n\n\n\n\n\n');
				for(var i=0;i<final_message.length;i++) {
					console.log(final_message[i].date+'\n');
					console.log('messages : '+JSON.stringify(final_message[i].messages));
				}
			}

			//console.log('Afterwards : \n'+JSON.stringify(matches));
		   	return res.status(200).json(final_message);

	}); // end of readFile('input.txt')
});

router.post('/', function(req, res, next) {
     var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured (server said)");
        }
       // No error occured.
        path = req.file.path;
       	fs.readFile(path, function(err, data) {
       		if (err) {
		      	return console.error(err);
		   	}

		   	//console.log("Asynchronous read: " + data.toString());

		   	var inputText= data.toString();
		   	inputText = inputText.trim();
		   	var matches = [];
		   	var initialRegexPattern=/(\d{2}[\/]\d{2}[\/]\d{4}[,]\s\d{2}[:]\d{2}\s[-]\s[A-Za-z\d\s']+[:]\s(.+?)+)/g;
		   	var newText= inputText.replace(initialRegexPattern,function(match,patternMatched){
		   		return "qqrqqrqqrqqrqqr"+patternMatched; // "qqrqqrqqrqqrqqr" is the delimeter pattern
		   	});
		   	newText = newText + "qqrqqrqqrqqrqqr";
		   	/* 	
		   		date : (\d{2}[\/]\d{2}[\/]\d{4})[,]
				time : (\d{2}[:]\d{2})\s[-]
				name : ([A-Za-z\d\s']+)[:]
				message : ([\s\S]+?(?=qqrqqrqqrqqrqqr))
			*/
		   	var regexPattern = /(\d{2}[\/]\d{2}[\/]\d{4})[,]\s(\d{2}[:]\d{2})\s[-]\s([A-Za-z\d\s']+)[:]\s([\s\S]+?(?=qqrqqrqqrqqrqqr))/g;

			newText.replace(regexPattern,function(match,date,time,name,message, worthless){
		   		matches.push({
		   			date: date,
		   			time: time,
		   			name: name,
		   			messageString: message  		
		   		});
		   	});
			console.log(matches);
			var id = 1;
			var lastName = '';
			var lastDate = '';
			for(var i = 0; i < matches.length; i++) {
				if( i == 0 ) {
					matches[i].id = id;
					lastName = matches[i].name;
					lastDate =matches[i].date;
				} else {
					if( matches[i].name == lastName) {

						if(lastDate == matches[i].date) {
							matches[i].id = -id;
						} else {
							matches[i].id = id;
						}

					} else {
						id = (id % 2) + 1;
						matches[i].id = id;
						lastName = matches[i].name;
						lastDate = matches[i].date;
					}
				}
			}

			var final_message = [];
			if(matches != null) {
				var date = matches[0].date;
				var temp = [];
				temp.push({
		   			time: matches[0].time,
		   			name: matches[0].name,
		   			messageString: matches[0].messageString,
		   			id: matches[0].id  		
		   		});
				for(var i=0;i<matches.length;i++) {
					if(date == matches[i].date) {
						temp.push({
				   			time: matches[i].time,
				   			name: matches[i].name,
				   			messageString: matches[i].messageString,
		   					id: matches[i].id 		
				   		});
					} else {
						final_message.push({
							date: date,
							messages: temp
						});
						temp = [];
						date = matches[i].date;
						temp.push({
				   			time: matches[i].time,
				   			name: matches[i].name,
				   			messageString: matches[i].messageString,
		   					id: matches[i].id
				   		});
					}
				}
				console.log('\n\n\n\n\n\n\n');
				for(var i=0;i<final_message.length;i++) {
					console.log(final_message[i].date+'\n');
					console.log('messages : '+JSON.stringify(final_message[i].messages));
				}
			}

			//console.log('Afterwards : \n'+JSON.stringify(matches));
		   	return res.status(200).json(final_message);
       	});
        //return res.status(200).send("Upload Completed for "+path); 
  });     
});

module.exports = router;