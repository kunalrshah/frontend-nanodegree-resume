


var myBio = {
	"name" : {
		"firstName" : "Kunal",
		"middleInitial" : "R",
		"lastName" : "Shah"
	},
	"contactInfo" : {
		"phoneNum" : "9083340233", 
		"emailId" : "kunal.rajnikant.shah@gmail.com",
		"twitter" : "@kunalrshah",
		"github" : "kunalrshah",
		"location" : "Hillsborougn, NJ, US"
	},
	"role" : "Senior Solution Architect / Senior Technology Manager",	
	"bioPicUrl" : "images/kunalrshah.jpg",
	"skills" : ["application development", "business process management", "project management", "architecture delivery"],
	"welcomeMsg" : "Welcome To My Work Experience & Skills Summary"
}



var myEducation = {
	"schools" : [
		{
			"name" : "New Jersey Institute of Technology",
			"location" : "Newark, NJ, US",
			"degree" : "MS",
			"majors" : ["Computer Science"],
			"dates" : "1993"
		},
		{
			"name" : "Thadomal Shahani Engineering Collect, The university of Bombay",
			"location" : "Mumbai, MH, India",
			"degree" : "BE",
			"majors" : ["Computer Engineering", "English"],
			"dates" : "1989"
		}
	],
	"onlineCourses" : [
		{
			"name" : "Front-End Web Development Nanodegree",
			"provider" : "Udacity",
			"courseUrl" : "https://www.udacity.com/course/nd001",
			"dates" : "2015"
		},
		{
			"name" : "Data Scientist Specialization",
			"provider" : "Coursera",
			"courseUrl" : "https://www.coursera.org/specialization/jhudatascience/1?utm_medium=listingPage",
			"dates" : "2015"
		}
	]
}

var myProjects = {
	"projects" : [
		{
			"name" : "Cross-Functional Architecture across Compliance, Finance and Risk Management technology divisions",
			"designation" : "SVP / Senior Solution Architect - BigData Implementation for BI/Analytics",
			"dates" : "2015",
			"description" : "Cross-Functional Architecture across Compliance Tech, Finance Tech, Risk Management Tech and HR Tech. Some notable projects are with Data Innovation Office - on Data Governance Automation; Enterprise Analytics Platform, and Reusable Enterprise Assets Program",
			"images" : ["images/XfuncArch.jpg"],
		},
		{
			"name" : "HR Transformation / Global Manager Portal",
			"dates" : "2013-2015",
			"designation" : "SVP / Senior Technology Manager - Global HR Portal",
			"description" : "Tier-0 Self Service Capability for Global Population of People Managers",
			"images" : ["images/HRPortal.jpg"],
		},
		{
			"name" : "Portfolio Architecture Services for Risk Management Technology across all banking businesses",
			"dates" : "2010-2013",
			"designation" : "SVP / Sr. Portfolio Architect",
			"description" : "Provide end-to-end solution architecture services to $150MM portfolio of Risk Management Technology applications. Manage a small team of data architects, technical architects, as well as infrastructure architects",
			"images" : ["images/riskmgmt.jpg"],
		},
		{
			"name" : "eDelivery - Global Shared Utility (GSU) for Push eStatements",
			"dates" : "2008-2010",
			"designation" : "VP / Sr. Solutions Architect",
			"description" : "For an enterprise-wide green initiative, implement a global utility service for various business units to delegate their Push eStatement capability tothe  eDelivery GSU",
			"images" : ["images/estmt.jpg"],
		},
		{
			"name" : "Shared Technology Services for Business Process Management Systems",
			"dates" : "2006-2008",
			"designation" : "VP / Global Engineering Lead - BPMS",
			"description" : "Lead and managed a shared services organization / center of excellence for adoption & implementation of Business Process Management practices and technologies",
			"images" : ["images/ste.jpg"],
		}, 
		{
			"name" : "IT Consulting Engagement with COGNOS IT",
			"dates" : "2005",
			"designation" : "Senior Enterprise Integration Architect",
			"description" : "Formulated a long-term strategy to support rapid growth, improve data quality and consistency and ensure interoperability of Cognos IT systems.",
			"images" : ["images/cognos.png"],
		},			
		{
			"name" : "IT Consulting / Staff Augmentation Engagement with Morgan Stanley",
			"dates" : "1999-2005",
			"designation" : "Senior Principal Consultant / Application Delivery Manager / Lead Developer",
			"description" : "Re-Engineer an in-house built C++ system for  Acquisition and Distribution for Equity Derivatives Market Data - to a multi-tiered, message-oriented Pure Java solution",
			"images" : ["images/mktdata.jpg"],
		}
	],
	"display" : function() {

		var proj = {};

		for (proj in myProjects.projects)
		{
			$("#projects").append(HTMLprojectStart);

			var formattedProjTitle = HTMLprojectTitle.replace("%data%", myProjects.projects[proj].name);
			var formattedProjDates = HTMLprojectDates.replace("%data%", myProjects.projects[proj].dates);
			var formattedProjDescr = HTMLprojectDescription.replace("%data%", myProjects.projects[proj].description);
			var formattedProjRec = formattedProjTitle + formattedProjDates + formattedProjDescr;
			$(".project-entry:last").append(formattedProjRec);


			for (img in myProjects.projects[proj].images) {
				var formattedProjImage = HTMLprojectImage.replace("%data%", myProjects.projects[proj].images[img]);
				$(".project-entry:last").append(formattedProjImage);
			}
		}
	}
}

var myWorkHistory = {
	"myJobs" : [
		{
			"employer" : "Citigroup, Inc",
			"position" : "Senior Solution Architect / Technology Manager",
			"dates" : "02/2006-Present",
			"location" : "Warren, NJ, US",
			"jobDescription" : "Responsibilities include variety of roles ranging from Product Engineering, Solution Architecture, Management of Application Delivery, and Massively Parallel Processing for Analytical Models",
			"isCurrentJob" : 1
		},
		{
			"employer" : "GENPACT",
			"position" : "Senior Enterprise Integration Architect (Consulting)",
			"dates" : "06/2005-01/2006",
			"location" : "New York, NY, US",
			"jobDescription" : "Consulting Integration Architect for a short-term (sdix months) engagement with COGNOS IT; guiding them in their efforts to rationalize their IT application portfolio and help them re-engineer their systems interactions to utilize a centralized Customer Data Hub and enfore Master Data Management standards.",
			"isCurrentJob" : 0
		},
		{
			"employer" : "KEANE",
			"position" : "Senior Principal Consultant",
			"dates" : "08/1999-06/2005",
			"location" : "Princeton Junction, NJ, US",
			"jobDescription" : "Manage, Lead and Develop the next generation solution for capturing real-time market data from various stock exchanges as well as reuters; and establish a publish/subscribe mechanism to distribute the same to downstream systems for their timely utilization.",
			"isCurrentJob" : 0
		}
	]
}


function initializeResume()
{
	//var myName = myBio.name.firstName + " " + myBio.name.lastName;
	var myName = inName(myBio.name.firstName.trim(), myBio.name.lastName.trim());

	var myEmail = myBio.contactInfo.emailId;
	var myRole = myBio.role;

	var formattedName = HTMLheaderName.replace("%data%", myName);
	var formatterRole = HTMLheaderRole.replace("%data%", myRole);
	var formattedEmail = HTMLemail.replace("%data%", myEmail);


	$("#header").prepend(formatterRole);
	$("#header").prepend(formattedName);


}


function displayMyContactInfo() {

	//var formattedContactInfo = HTMLcontactGeneric.replace("%data$%", )

	var formattedMobileNum = HTMLmobile.replace("%data%", myBio.contactInfo.phoneNum);
	var formattedEmail = HTMLemail.replace("%data%", myBio.contactInfo.emailId);
	var formattedGitHub = HTMLgithub.replace("%data%", myBio.contactInfo.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", myBio.contactInfo.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", myBio.contactInfo.location);

	$("#topContacts").append(formattedMobileNum + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", myBio.bioPicUrl);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", myBio.welcomeMsg);

	$("#header").append(formattedBioPic + formattedWelcomeMsg);

    if (myBio.skills.length > 0)
    {
      $("#header").append(HTMLskillsStart);

      var formattedSkill = "";
      var skillsLen = myBio.skills.length;
      for (i = 0; i < skillsLen; i++)
      {
        formattedSkill = HTMLskills.replace("%data%", myBio.skills[i]);  
        $("#skills").append(formattedSkill);
      }
    }

}

function displayMyWorkHistory() {

	//console.log(myWorkHistory.myJobs.length);

	var job = {};

	for (job in myWorkHistory.myJobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", myWorkHistory.myJobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", myWorkHistory.myJobs[job].position);
		var formattedWorkDates = HTMLworkDates.replace("%data%", myWorkHistory.myJobs[job].dates);
		var formattedWorkDescr = HTMLworkDescription.replace("%data%", myWorkHistory.myJobs[job].jobDescription);
		var formattedJobRec = formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkDescr;

		$(".work-entry:last").append(formattedJobRec);

	}	

	myProjects.display();
}

function displayMyEducation() {

	for (sch in myEducation.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", myEducation.schools[sch].name);
		var formattedSchoolDeg = HTMLschoolDegree.replace("%data%", myEducation.schools[sch].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", myEducation.schools[sch].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", myEducation.schools[sch].location);

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDeg + formattedSchoolDates + formattedSchoolLocation);

		for (mj in myEducation.schools[sch].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", myEducation.schools[sch].majors[mj]);
			$(".education-entry:last").append(formattedSchoolMajor);			
		}
	}


//	$("#online-courses").append(HTMLonlineClasses);

	for (course in myEducation.onlineCourses) {

		$("#online-courses").append(HTMLonlineCourseStart);		
		var formattedCourseTitle = HTMLonlineTitle.replace("%data%", myEducation.onlineCourses[course].name);
		var formattedCourseProvider = HTMLonlineSchool.replace("%data%", myEducation.onlineCourses[course].provider);
		var formattedCourseDates = HTMLonlineDates.replace("%data%", myEducation.onlineCourses[course].dates);
		var formattedCourseUrl = HTMLonlineURL.replace("%data%", myEducation.onlineCourses[course].courseUrl);

		//$(".education-entry:last").append(formattedCourseTitle + formattedCourseProvider + formattedCourseDates + formattedCourseUrl);
		$(".course-entry:last").append(formattedCourseTitle + formattedCourseProvider + formattedCourseDates + formattedCourseUrl);
	}

	$("#mapDiv").append(googleMap);
	// $("#main").append(internationalizeButton);
}

function inName(fName, lName)
{
	var fN = fName.charAt(0).toUpperCase() + fName.substr(1).toLowerCase();
	var lN = lName.toUpperCase();

	return (fN + " " + lN);
}


initializeResume();
displayMyContactInfo();
displayMyWorkHistory();
displayMyEducation();



$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});






