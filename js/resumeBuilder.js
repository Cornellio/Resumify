/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "marker";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "DevOps Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = [
  "Python",
  "Puppet",
  "Linux"
]

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(skills)
