/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
	"name" : "Evan Meshberg", 
	"role": "Web Developer", 
	"contacts" : { 
	"mobile" : "401-699-5315",
	"email" :  "emeshberge@gmail.com",
	"github" : "evan999",
    "twitter": "na",
	"location" : "Danielson, CT"
	},
	"welcomeMessage": "Welcome to my resume page!",
	"skills" : ["Javascript, HTML, CSS, jQuery, PHP, Python, SQL"],
	"bioPic": "fry.jpg"
};

var name= bio.name;
var formattedName= HTMLheaderName.replace("%data%", name);

function inName(){
    var name= window.name;
    name= name.trim().split("");
    console.log(name);
    name[1]= name[1].toUpperCase();
    name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " " + name[1];
}

var name= $("#name").text();

$('#main').append(internationalizeButton);

var role= bio.role;
var formattedRole= HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile= bio.contacts.mobile;
var formattedMobile= HTMLmobile.replace("%data%", mobile);

$("#topContacts").append(formattedMobile);

var email= bio.contacts.email;
var formattedEmail= HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github= bio.contacts.github;
var formattedGithub= HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);


var twitter= bio.contacts.twitter;
var formattedTwitter= HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);


var _location= bio.contacts.location;
var formattedLocation= HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic= bio.bioPic;
var formattedBioPic= HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage= HTMLwelcomeMsg.replace("%data%", welcomeMessage)
$("#header").append(formattedWelcomeMessage);

var skills= bio.skills;

if (bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    
    for(var i=0;i<=bio.skills.length-1;i++){

        var formattedSkill= HTMLskills.replace("%data%", skills[i]);
        $("#skills").append(formattedSkill);
    /*
    formattedSkill= HTMLskills.replace("%data%", skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill= HTMLskills.replace("%data%", skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill= HTMLskills.replace("%data%", skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill= HTMLskills.replace("%data%", skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill= HTMLskills.replace("%data%", skills[4]);
    $("#skills").append(formattedSkill);
    */
    }

}

var work= {
	"jobs":[
    { 
	 "employer": "QuEST Global NA",
	 "title": "Software Developer",
	 "location": "Windsor, CT",
	 "dates": "January 2016-September 2016",
	 "description": "Building Sharepoint sites and database applications for clients to serve client's business needs in generating reports and organizing and displaying helpful information"
    }
    ]
}

function displayWork(){

    for (var job in work.jobs){

        if(work.jobs.length>0){
        
            $("#workExperience").append(HTMLworkStart);
    
            formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
       // $("#workExperience").append(formattedEmployer);

            formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
       //$("#workExperience").append(formattedTitle);
            formattedEmployerTitle= formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

        
            formattedLocation= HTMLworkLocation.replace("%data%", 
            work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
        
            formattedDates= HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            formattedDescription= HTMLworkDescription.replace("%data%", 
            work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription); 
        }
    
    }

}

displayWork();

var projects= {
	"projects":[
	{
     "title": "AITP Web Application",
     "dates": "2013-2014",
     "description": "Client-based web application integrated with database",
     "images": ""

 	},

    {
      "title": "Interactive Resume",
      "dates": "2015-2017",
      "description": "Front-end website to show credentials, qualifications, and projects. Developed in JavaScript and HTML/CSS",
      "images": ""
    }

	]
    

}

projects.display= function (){

    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        formattedTitle= HTMLprojectTitle.replace("%data%", 
            projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        formattedDates= HTMLprojectDates.replace("%data%", 
            projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        formattedDesc= HTMLprojectDescription.replace("%data%", 
            projects.projects[project].description);
        $(".project-entry:last").append(formattedDesc);
        
        
        if(projects.projects[project].images.length>0){
            
            for (image in projects.projects.images){
                
                formattedImage= HTMLprojectImage.replace("%data%", 
                    projects.projects[projects].images[image]);
                $(".project-entry:last").append(formattedImage);

            }
        }
        
    }
    
}

projects.display();

/*
var displayProjects= function(){


   } 
}
*/




/*
work.position= "Lab Monitor";
work.employer= "ECSU ITS";
work.years= "2012-2015";
work.city= "Willimantic, CT";

*/
//$("#main").append(work["position"]);
/*
var education= {};

education["name"]= "Eastern Connecticut State University";
education["years"]= "2011-2015";
education["city"]= "Willimantic, CT";


$("#main").append(education.name);
*/

var education = {
    "schools": [
        {
            "name": "Eastern Connecticut State University",
            "city": "Willimantic, CT",
            "degree": "BS",
            "major": [
                "Computer Science"
            ],
            "minor": [
                "BIS"
            ],
            "years": "2011-2015"
        }
    ]
    
    "onlineCourses": [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "2015"
        },
        {
            "title": "Programming Foundations with Python",
            "school": "Udacity",
            "dates": "2015"
        },
        {
            "title": "Introduction to Computer Science",
            "school": "Udacity",
            "dates": "2014-2016"
        }
    ]
   
    
}

function displayEducation (){

    for (school in education.schools){

        $("#education").append(HTMLschoolStart);

        formattedName= HTMLschoolStart.replace("%data%", education.schools[school].name);
        $("education-entry:last").append(formattedName);

        formattedCity= HTMLschoolName.replace("%data%", education.schools[school].city);
        $("education-entry:last").append(formattedCity);

        formattedDegree= HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $("education-entry:last").append(formattedDegree);

        formattedDates= HTMLschoolDates.replace("%data%", education.schools[school].years);
        $("education-entry:last").append(formattedDates);

        formattedMajor= HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $("education-entry:last").append(formattedMajor);

        /*
        formattedMinor= HTMLschoolMinor.replace("%data%", education.schools[school].minor);
        $("education-entry:last").append(formattedLocation);
        */

    }
}

displayEducation();

//show map from Google Maps API 
$("#mapDiv").append(googleMap);