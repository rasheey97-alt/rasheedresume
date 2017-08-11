/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("KunleMichaels");


var formattedName, formattedRole;

formattedName = HTMLheaderName.replace("%data%", "uthman rasheed");

formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var skills = ["awesomeness", " programming", " teaching", " JS"];


var bio = {
    "name": "Uthman Rasheed",
    "role": "Software Engineer",
    "contacts": {
        "mobile": +2348189678585,
        "email": "rasheey97@yahoo.com",
        "twitter": "rasheey97",
        "github": "rasheey97",
        "blog": "worltech",
        "location": "lagos, jakande",
        
     },

    "picture": "images/fry.jpg",
    "welcomemsg": "Hi, Lets develop together",
    "skills": skills
  
    }

    

    $("#main").append();
    


var formattedcontact = HTMLcontactGeneric.replace("%contact%", "contact");
$("#header").append(formattedcontact);
/*var formattedcontact2 = HTMLcontactGeneric.replace("%data%", "contact");
$("HTMLcontactGeneric").append(formattedcontact2);*/ 

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedmobile);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedemail);

var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append(formattedtwitter);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedgithub);

var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#header").append(formattedblog);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedlocation);

var formattedpicture = HTMLbioPic.replace("%data%", bio.picture);
$("#header").prepend(formattedpicture);

var formattedwelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
$("#header").append(formattedwelcomemsg);

var formattedskills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedskills);

var work = { 
    "jobs": [
    {
        "title":"Software Engineer",
        "employer": "Sweskills",
        "date" : "2011",
        "location" :  "surelere, Lagos",
        "description": "I worked as an intern at Sweskills. My team worked on an in-house software and responsive website which was hosted for an organization. My main responsibility at Sweskills was to learn software Engineering skills to become a world class software Developer"
    },
    {
        "title":"Software Engineer",
        "employer": "Facebook",
        "date" : "2014",
        "location" :  "New-York, USA",  
        "description": "I was responsible for the in-house production and validation of mobile and pc applications"
    },
    {
        "title": "Software Engineer",
        "employer": "Google",
        "date" : "2017",
        "location" :  "Las Vargas",
        "description": "After my successul years at facebook, I was employed by Google. At Google, I was part of the team who develped a major software (Google AdSense). I also worked as a software and app validator and I have tutored at several Google seminar and workshops"
     }
 ]
}



var education = {}
 education["lastSchoolAttended"] = "Kwarapoly, Ilorin";
 education["years"] = "2014";
 education["city"] = "Ilorin";

 if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
 }

 function displayWork (){
 for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    
    var formattedEmployerTitle =(formattedEmployer + formattedTitle);
    $(".work-entry:first").append(formattedEmployerTitle);   

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date); 
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description); 

    $(".work-entry:first").append(formattedDates); 
    $(".work-entry:first").append(formattedDescription); 
 }
}

displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
      // your code goes here!
});

/*function locationizer (work) {
    var locationArray = []

    for(job in work.jobs){
        var newLocation = work.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}*/

$("#main").append(internationalizeButton);

function inName(name)   {
        name = name.trim().split(" ");
    var name1 = name[1].toUpperCase;

    var name0 = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    

    return name0 + " " + name1;
}





/*
$("#main").append(education.school);

$("#main").append(work.employer);
$("#main").append();
*/