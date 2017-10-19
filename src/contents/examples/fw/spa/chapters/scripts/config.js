define([
],function(){
	var config = {
	    "name" : "chaptersApp",  // default:app
	    "title": "A exmaple with navbar and a welcome view and three chapter views",
        "baseUrl": "/contents/examples/fw/spa/Chapters",
        "homePath": "/",

	    "page" : {
			"routeViewer" : "#yield"
		},
	    "plugins" : {
	      "highlight" : {
	      	  hookers: "routed",
	      	  controller : {
	      	  	type  : "scripts/plugins/highlight/HighlightController"
	      	  }
	      }
	    },
	    "routes" : {
	      "home": {
	          pathto : "/",
	          controller : {
	          	type : "scripts/routes/home/HomeController"
	          }
	      },
	      "chapter": {
	          pathto : "/chapter/:id",
	          controller : {
	          	type : "scripts/routes/chapter/ChapterController"
	          }
	      }
	    }
	};

	return config;
});
