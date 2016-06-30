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
      "location": "Burlingame, CA",
      "dates": "2013 - Present",
      "description": "Primed the planner plight in the fancy flower pickle jar taster contest."
    },
    {
      "employer": "Consultant ",
      "title": "Professional Services Engineer",
      "location": "San Francisco, CA",
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
      "title": "Dashing dashboards",
      "dates": "2015",
      "description": "* Primed the planner plight",
      "images": ["https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fposition-relative%2Fsocial-2%2F128%2Fgithub-icon.png&f=1", "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fposition-relative%2Fsocial-2%2F128%2Fgithub-icon.png&f=1"]
    },
    {
      "title": "Puppet Riak Module",
      "dates": "2015",
      "description": "* Saltine cracken jacking",
      "images": ["https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fposition-relative%2Fsocial-2%2F128%2Fgithub-icon.png&f=1", "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fposition-relative%2Fsocial-2%2F128%2Fgithub-icon.png&f=1"]
    }
  ]
};

header.display = function() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  // var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.city);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedGithub);
  // $("#header").append(formattedLocation);

}

work.display = function() {
  for (item in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
    $(".work-entry:last").append(formattedWorkDates)

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
    $(".work-entry:last").append(formattedWorkDescription)

    // var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
    // $("#workExperience").append(formattedWorkLocation);

  }
}

function showClicks() {

  $(document).click(function(loc) {
      var x = loc.pageX;
      var y = loc.pageY;
      logClicks(x,y);
  });
}

function locationizer(work) {
  // operate on work.jobs.location
  var locations = []
  for (var item in work.jobs) {
    locations.push(work.jobs[item].location);
  }
  return locations;
}

function inName(name) {
  // convert last name to caps
  name = name.split(" ");
  var fname = name[0];
  var lname = name[1].toUpperCase();
  name = fname + " " + lname;

  return name;
}

projects.display = function() {
  // .append() all project info to projects section
  // start each project with HTMLprojectStart

  for (item in projects.project) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.project[item].images.length > 0) {

        for (image in projects.project[item].images) {
          var formattedImg = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
          $(".project-entry:last").append(formattedImg);
        }
      }
  }
}

header.display()
work.display()
showClicks()
projects.display()

console.log(inName("Peter cornell"));
