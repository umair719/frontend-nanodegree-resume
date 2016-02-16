"use strict";

var bio = {
    data: function () {
        return {
            "name": "Umair Khalid",
            "role": "Web Developer",
            "contacts": {
                "email": "fakeemail@gmail.com",
                "mobile": "123-456-7894",
                "github": "github.com/umair719",
                "twitter": "@umair719",
                "location": "Houston",
                "blog": "http://umair719.blogspot.com/"
            },
            "bioPic": "https://avatars3.githubusercontent.com/u/2522678?v=3&s=460",
            "welcomeMessage": "Welcome to My Resume",
            "skills": [
                "awesomeness",
                "delivering things",
                "PHP",
                "JavaScript"
            ]
        }
    },
    generate: {
        headerGen: function () {
            var d = bio.data();
            var header = HTMLheaderName.replace('%data%', d.name) +
                HTMLheaderRole.replace('%data%', d.role);
            $('#header').prepend(header);
        },
        skillsGen: function () {
            var d = bio.data();
            if (d.skills.length > 0) {
                $('#header').append(HTMLskillsStart);
                $.each(d.skills, function (index, value) {
                    $('#skills').append(HTMLskills.replace('%data%', value));
                });
            }
        },
        contactGen: function () {
            var d = bio.data();
            var c = d.contacts;
            var p = '%data%';
            var contact = HTMLemail.replace(p, c.email) +
                HTMLemail.replace(p, c.email) +
                HTMLgithub.replace(p, c.github) +
                HTMLtwitter.replace(p, c.twitter) +
                HTMLlocation.replace(p, c.location) +
                HTMLmobile.replace(p, c.mobile) +
                HTMLblog.replace(p, c.blog);
            $('#topContacts').append(contact);
        },
        picGen: function () {
            var d = bio.data();
            var pic = HTMLbioPic.replace('%data%', d.bioPic);
            $('#header').append(pic);
        },
        welcomeGen: function () {
            var d = bio.data();
            var message = HTMLwelcomeMsg.replace('%data%', d.welcomeMessage);
            $('#header').append(message);
        }
    },
    display: function () {
        this.generate.picGen();
        this.generate.welcomeGen();
        this.generate.headerGen();
        this.generate.skillsGen();
        this.generate.contactGen();
    }
};
var work = {
    data: function () {
        return {
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
        }
    },
    generate: function () {
        var d = work.data();
        for (var job in d.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var currentJob = d.jobs[job];
            var workTitle = HTMLworkEmployer.replace('%data%', currentJob.employer) +
                HTMLworkTitle.replace('%data%', currentJob.title) +
                HTMLworkLocation.replace('%data%', currentJob.location) +
                HTMLworkDates.replace('%data%', currentJob.dates.start + " - " + currentJob.dates.end) +
                HTMLworkDescription.replace('%data%', currentJob.description);
            $('.work-entry:last').append(workTitle);
        }
    },
    display: function () {
        this.generate();
    }
};
var projects = {
    data: function () {
        return {
            "projects": [{
                "title": "Interactive Resume",
                "dates": {
                    "start": 2015,
                    "end": 2015
                },
                "description": "Created an interactive resume in JS",
                "images": [
                    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                ]
            }]
        }
    },
    generate: function () {
        var d = projects.data();
        for (var project in d.projects) {
            $('#projects').append(HTMLprojectStart);
            var currentProject = d.projects[project];
            var thisProject = HTMLprojectTitle.replace('%data%', currentProject.title) +
                HTMLprojectDates.replace('%data%', currentProject.dates.start + " - " + currentProject.dates.end) +
                HTMLprojectDescription.replace('%data%', currentProject.description) +
                HTMLprojectImage.replace('%data%', (currentProject.images));
            $('.project-entry:last').append(thisProject);
        }
    },
    display: function () {
        this.generate();
    }

};
var education = {
    data: function () {
        return {
            "schools": [{
                "name": "University of Houston",
                "city": "Houston",
                "degree": "BS",
                "major": ['CompEng'],
                "dates": {
                    "start": 2006,
                    "end": 2010
                },
                "url": "uh.edu"
            }, {
                "name": "Texas A&M University",
                "city": "Houston",
                "degree": "MBA",
                "major": ["Management"],
                "dates": {
                    "start": 2016,
                    "end": 2018
                },
                "url": "tamu.edu"
            }],
            "onlineCourses": [{
                "title": "JavaScript Crash Course",
                "school": "Udacity",
                "dates": "2015",
                "url": "http://www.udacity.com/course/ud804"
            }]
        }
    },
    generate: {
        schools: function () {
            var d = education.data()['schools'];
            var p = '%data%';

            var formatMajors = function (d) {
                var majors = "";
                for (var m in d) {
                    majors += HTMLschoolMajor.replace('%data%', d[m]);
                }
                return majors;
            };

            var formatDates = function (d) {
                return HTMLschoolDates.replace('%data%', d.start + " - " + d.end);
            };

            for (var s in d) {
                $('#education').append(HTMLschoolStart);
                var thisSchool = HTMLschoolName.replace(p, d[s].name) +
                    HTMLschoolLocation.replace(p, d[s].city) +
                    HTMLschoolDegree.replace(p, d[s].degree) +
                    formatMajors(d[s].major) +
                    formatDates(d[s].dates) +
                    HTMLschoolUrl.replace(p, d[s].url).replace('%url%', d[s].url);
                $('.education-entry:last').append(thisSchool);
            }
        },
        onlineCourses: function () {
            var d = education.data()['onlineCourses'];
        }
    },
    display: function () {
        this.generate.schools();
        this.generate.onlineCourses();
    }

};
var maps = {
    data: function () {
        return ['Houston', 'karachi', 'los angles']
    },
    generate: function () {
        var d = this.data();
        var map;
        $('#mapDiv').append(googleMap);

        function initMap() {

            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 3
            });


            for (var loc in d) {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({'address': d[loc]}, function (results, status) {
                    var location = results[0].geometry.location;
                    var loc = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&' +
                        'exintro=&explaintext=&titles=' + encodeURIComponent(location.split(",")[0]);
                    var content;

                    function setContent(d) {
                        content = d;
                    }

                    if (status === google.maps.GeocoderStatus.OK) {
                        map.setCenter(location);
                        var marker = new google.maps.Marker({
                            map: map,
                            position: location,
                            visible: true
                        });


                        $.ajax({
                            url: loc,
                            method: 'GET',
                            dataType: "jsonp",
                            success: function (d) {
                                for (var first in d.query.pages) {
                                    setContent(d.query.pages[first].extract);
                                }
                            }
                        });


                        var infoWindow = new google.maps.InfoWindow({
                            content: content
                        });

                        marker.addListener('click', function () {
                            infoWindow.open(map, marker);
                        })
                    }
                });
            }
        }

        initMap();

    },
    display: function () {
        this.generate();
    }
};

var buildResume = function () {
    bio.display();
    work.display();
    projects.display();
    education.display();
    maps.display();
};

buildResume();