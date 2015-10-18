"use strict";

var bio = {
    "name": "Umair Khalid",
    "role": "Web Developer",
    "contacts": {
        "email": "fakeemail@gmail.com",
        "mobile": "123-456-7894",
        "github": "www.github.com/umair719",
        "twitter": "@umair719",
        "location": "Houston"
    },
    "bioPic": "https://avatars3.githubusercontent.com/u/2522678?v=3&s=460",
    "welcomeMessage": "Welcome to My Resume",
    "skills": [
        "awasomeness",
        "delivering things",
        "PHP",
        "JavaScript"
    ]
};

var work = {
    "jobs": [{
        "employer": "Hewlett Packard",
        "title": "Software Developer",
        "location": "Houston, Texas, US",
        "dates": {
            "start": 2013,
            "end": "Present"
        },
        "description": "Developed applications for HP Enterprise Services"
    }, {
        "employer": "Hewlett Packard",
        "title": "Linux Engineer",
        "location": "Houston, Texas, US",
        "dates": {
            "start": 2010,
            "end": 2013
        },
        "description": "Build Linux and UNIX servers"
    }]
};

var projects = {
    "projects": [{
        "title": "Interactive Resume",
        "dates": {
            "start": 2015,
            "end": 2015
        },
        "description": "Created an interactive resume in JS",
        "images": [
            "www.google.com"
        ]
    }]
};


var education = {
    "schools": [{
        "name": "University of Houston",
        "city": "Houston",
        "degree": "BS",
        "major": ['CompEng'],
        "dates": 2010,
        "url": "www.uh.edu"
    }, {
        "name": "Texas A&M University",
        "city": "Houston",
        "degree": "MBA",
        "major": "Management"
    }],
    "onlineCourses": [{
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://www.udacity.com/course/ud804"
    }]
};

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    $.each(bio.skills, function (index, value) {
        $('#skills').append(value);
    });
}

for (var job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var currentJob = work.jobs[job]
    var workTitle = HTMLworkEmployer.replace('%data%', currentJob.employer) +
        HTMLworkTitle.replace('%data%', currentJob.title) +
        HTMLworkLocation.replace('%data%', currentJob.location) +
        HTMLworkDates.replace('%data%', currentJob.dates.start + " - " + currentJob.dates.end) +
        HTMLworkDescription.replace('%data%', currentJob.description);
    $('.work-entry:last').append(workTitle);
}


