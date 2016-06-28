var bio = {
  "name": "J Cornellio",
  "age": 45,
  "role": "DevOps Engineer",
  "bioPic": "images/pjc.jpg",
  "contacts": {
    "email": "peter.cornell@me.com",
    "github": "cornellio",
    "twitter": "@9dreamer",
    "city": "Silicon Valley",
  },
  "message": "You you be healthy, may you be happy",
  "skills": [
    "vipassana",
    "mystic scuba",
    "green thinking"
  ]
};

var work = {
  "title": "Sr. Linux System Engineer",
  "employer": "Virgin America",
  "location": "SF Bay Area",
  "dates": "2013 - Present",
  "description": "* Primed the planner plight \
    <br>* Shebanged the planks \
    <br>* Ran lines"
};

var education = {
  "name": "CU Boulder",
  "years": "1990-1995",
  "credential": "BA"
};

// bio
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.city);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#header").append(formattedLocation);

// work experience

var formattedWorkEmployer =  HTMLworkEmployer.replace("%data%", work.employer );
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title );
var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates );
var formattedWorkLocation =  HTMLworkLocation.replace("%data%", work.location );
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description );

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDescription);


// school
var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchoolName);


// skills
if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);

  // $("#main").append(skills)
}
