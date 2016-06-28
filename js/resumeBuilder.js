var bio = {
  "name": "J Cornellio",
  "age": 45,
  "role": "DevOps Engineer",
  "bioPic": "images/pjc.jpg",
  "welcomeMessage": "lorem ipsum dolor sit amec",
  "contacts": {
    "email": "peter.cornell@me.com",
    "github": "cornellio",
    "twitter": "@9dreamer",
    "location": "Silicon Valley",
  },
  "message": "You you be healthy, may you be happy",
  "skills": [
    "vipassana",
    "mystic scuba",
    "green thinking"
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Virgin America",
      "title": "Sr. Linux System Engineer",
      "location": "SF Bay Area",
      "dates": "2013 - Present",
      "description": "Primed the planner plight in the fancy flower pickle jar taster contest."
    },
    {
      "employer": "Consultant ",
      "title": "Professional Services Engineer",
      "location": "SF Bay Area",
      "dates": "2011 - 2013",
      "description": "Saltine cracken jacking fancy flower pickle jar taster contest of the prancer parkers."
    }
  ]
};

var education = {
	"schools": [
    {
    	"name": "CU Boulder",
      "location": "Boulder, CO",
      "major": "Speech Sciences",
    	"dates": 1995,
    	"credential": "BA",
      "url": "http://"
    },
  	{
  		"name": "UC Berkeley Extention",
      "location": "San Francisco",
      "major": "",
  		"dates": 2003,
  		"credential": "Unix/Linux System Administration",
      "url": "http://"
  	}
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/ud804"
    }
  ]
};

var projects = {
  "project": [
    {
      "title": "Sr. Linux System Engineer",
      "dates": "2013 - Present",
      "description": "* Primed the planner plight",
      "images": []
    },
    {
      "title": "Professional Services Engineer",
      "dates": "2011 - 2013",
      "description": "* Saltine cracken jacking",
      "images": []
    }
  ]
};


for (item in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);

  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedWorkLocation = HTMLworkDates.replace("%data%", work.jobs[item].location);
  $(".work-entry:last").append(formattedWorkLocation);

  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
  $(".work-entry:last").append(formattedWorkDates)

  var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
  $(".work-entry:last").append(formattedWorkDescription)

  // var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
  // $("#workExperience").append(formattedWorkLocation);

}
