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
      "description": "* Primed the planner plight"
    },
    {
      "employer": "Consultant ",
      "title": "Professional Services Engineer",
      "location": "SF Bay Area",
      "dates": "2011 - 2013",
      "description": "* Saltine cracken jacking"
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

for (job in work) {
  $("#workExperience").append(HTMLworkStart);

  for (entry in work[job]) {

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[job][entry]["employer"])
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[job][entry]["title"])
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[job][entry]["location"])
    var formattedWorkDates = HTMLworkDates.replace("%data%", work[job][entry]["dates"])
    var formattedWorkDesc = HTMLworkDescription.replace("%data%", work[job][entry]["description"])

    $("#workExperience").append(formattedWorkEmployer)
    $("#workExperience").append(formattedWorkTitle)
    $("#workExperience").append(formattedWorkLocation)
    $("#workExperience").append(formattedWorkDates)
    $("#workExperience").append(formattedWorkDescription)

    console.log(formattedWorkEmployer)
  }
// console.log(work[job][0].employer);

}
