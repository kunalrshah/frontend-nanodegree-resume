var myName = "Kunal R Shah";
var myEmail = "kunal.rajnikant.shah@gmail.com";
var formattedName = HTMLheaderName.replace("%data%", myName);


var myRole = "Senior Solution Architect";
var formatterRole = HTMLheaderRole.replace("%data%", myRole);

var formattedEmail = HTMLemail.replace("%data%", myEmail);


$("#header").prepend(formatterRole);
$("#header").prepend(formattedName);



var myBio = {
	"name" : {
		"fistName" : "Kunal",
		"middleInitial" : "R",
		"lastName" : "Shah"
	},
	"contactInfo" : {
		"phoneNum" : "9083340233", 
		"emailId" : "kunal.rajnikant.shah@gmail.com",
		"twitter" : "@kunalrshah",
		"github" : "kunalrshah",
		"city" : "Hillsborough",
		"state" : "New Jersey"
	},
	"role" : "Senior Solution Architect / Senior Technology Manager",	
	"bioPicUrl" : "images/kunalrshah.jpg",
	"skills" : ["application development", "business process management", "requirements management", "project management", "architecture delivery"],
	"welcomeMsg" : "Welcome To My Work Experience & Skills Summary"
}

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

var myEducation = {
	"schools" : [
		{
			"name" : "New Jersey Institute of Technology",
			"city" : "Newark, NJ, US",
			"degree" : "MS",
			"major" : ["Computer Science"],
			"graduationYear" : 1993
		},
		{
			"name" : "Thadomal Shahani Engineering Collect, The university of Bombay",
			"city" : "Mumbai, MH, India",
			"degree" : "BE",
			"major" : ["Computer Engineering"],
			"graduationYear" : 1989
		}
	],
	"onlineCourses" : [
		{
			"name" : "Front-End Web Development Nanodegree",
			"provider" : "Udacity",
			"dates" : "01/2015-Present"
		},
		{
			"name" : "Data Scientist Specialization",
			"provider" : "Coursera",
			"dates" : "01/2015-Present"
		}
	]
}

var myWorkHistory = {
	"myJobs" : [
		{
			"employer" : "Citigroup, Inc",
			"position" : "Senior Solution Architect / Technology Manager",
			"dates" : "02/2006-Present",
			"location" : "Warren, NJ, US",
			"jobDescription" : "Responsibilities include variety of roles ranging from Product Engineering, Solution Architecture, Management of Application Delivery, and Massively Parallel Processing for Analytical Models",
			"projects" : [
				{
					"name" : "Cross-Functional Architecture across Compliance, Finance and Risk Management technology divisions",
					"designation" : "SVP / Senior Solution Architect - BigData Implementation for BI/Analytics",
					"description" : "Cross-Functional Architecture across Compliance Tech, Finance Tech, Risk Management Tech and HR Tech. Some notable projects are with Data Innovation Office - on Data Governance Automation; Enterprise Analytics Platform, and Reusable Enterprise Assets Program"
				},
				{
					"name" : "HR Transformation / Global Manager Portal",
					"designation" : "SVP / Senior Technology Manager - Global HR Portal",
					"description" : "Tier-0 Self Service Capability for Global Population of People Managers"
				},
				{
					"name" : "Portfolio Architecture Services for Risk Management Technology across all banking businesses",
					"designation" : "SVP / Sr. Portfolio Architect",
					"description" : "Provide end-to-end solution architecture services to $150MM portfolio of Risk Management Technology applications. Manage a small team of data architects, technical architects, as well as infrastructure architects"
				},
				{
					"name" : "eDelivery - Global Shared Utility (GSU) for Push eStatements",
					"designation" : "VP / Sr. Solutions Architect",
					"description" : "For an enterprise-wide green initiative, implement a global utility service for various business units to delegate their Push eStatement capability tothe  eDelivery GSU"
				},
				{
					"name" : "Shared Technology Services for Business Process Management Systems",
					"designation" : "VP / Global Engineering Lead - BPMS",
					"description" : "Lead and managed a shared services organization / center of excellence for adoption & implementation of Business Process Management practices and technologies"
				}
			],
			"isCurrentJob" : 1
		},
		{
			"employer" : "GENPACT",
			"position" : "Senior Enterprise Integration Architect (Consulting)",
			"dates" : "06/2005-01/2006",
			"location" : "New York, NY, US",
			"jobDescription" : "Consulting Integration Architect for a short-term (sdix months) engagement with COGNOS IT; guiding them in their efforts to rationalize their IT application portfolio and help them re-engineer their systems interactions to utilize a centralized Customer Data Hub and enfore Master Data Management standards.",
			"projects" : [
				{
					"name" : "IT Consulting Engagement with COGNOS IT",
					"designation" : "Senior Enterprise Integration Architect",
					"description" : "Formulated a long-term strategy to support rapid growth, improve data quality and consistency and ensure interoperability of Cognos IT systems."
				}
			],
			"isCurrentJob" : 0
		},
		{
			"employer" : "KEANE",
			"position" : "Senior Principal Consultant",
			"dates" : "08/1999-06/2005",
			"location" : "Princeton Junction, NJ, US",
			"jobDescription" : "Manage, Lead and Develop the next generation solution for capturing real-time market data from various stock exchanges as well as reuters; and establish a publish/subscribe mechanism to distribute the same to downstream systems for their timely utilization.",
			"projects" : [
				{
					"name" : "IT Consulting / Staff Augmentation Engagement with Morgan Stanley",
					"designation" : "Senior Principal Consultant / Application Delivery Manager / Lead Developer",
					"description" : "Re-Engineer an in-house built C++ system for  Acquisition and Distribution for Equity Derivatives Market Data - to a multi-tiered, message-oriented Pure Java solution"
				}
			],
			"isCurrentJob" : 0
		}
	]
}




console.log(myWorkHistory.myJobs.length);

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

// $("#main").append(myCurrentJob["myPosition"]);
// $("#main").append(myEducation.mySchoolName);

// console.log(myCurrentJob);

// $("#myFName").append(myBio.name.fName);
// $("#myMInit").append(myBio["name"]["mInit"]);
// $("#myLName").append(myBio.name.lName);

// var formattedEmployer = HTMLworkEmployer.replace("%data%", myCurrentJob.employer);
// var	formattedWorkDates = HTMLworkDates.replace("%data%", myCurrentJob.workDates);
// var formattedWorkTitle = HTMLworkTitle.replace("%data%", myCurrentJob["myPosition"]);

// var formattedSchoolName = HTMLschoolName.replace("%data%", myEducation.mySchoolName);

// console.log(formattedSchoolName);
// console.log(formattedWorkTitle);
// $("#workExperience").append(formattedWorkTitle);
// $("#education").append(formattedSchoolName);




