let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

let app = express();

mongoose.connect('mongodb://localhost/JobTracker');

let JobSchema = new mongoose.Schema({
    company: { type: String, required: true, minlength: [ 3, "company name must be at least 3 characters"] },
    title: { type: String, required: true, minlength: [ 3, "job title must be at least 3 characters"] },
    category: { type: String, required: true },
    linktopost: { type: String },
    status: { type: String },
    notes: { type: String },
    rating: { type: Number, default: 0}
}, { timestamps: true });

mongoose.model('Job', JobSchema);
let Job = mongoose.model('Job')

let ProfileSchema = new mongoose.Schema({
    firstname: { type: String, required: true, minlength: [3, "first name must be at least 3 characters"] },
    lastname: { type: String, required: true, minlength: [3, "last name must be at least 3 characters"] },
    resume: { type: String, required: true },
    linkedin: { type: String },
    github: { type: String },
    personal: { type: String }
});

mongoose.model('Profile', ProfileSchema);
let Profile = mongoose.model('Profile')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));

// Retrieve profiles
app.get('/profile', function (req, res) {
    Profile.find({}, null, { sort: '-firstname' }, function (err, profile) {
        console.log(profile)
        if (err) {
            res.json({ message: "Error", err: err })
        } else {
            res.json({ message: "Success", data: profile })
        }
    })
})

// Create a new profile
app.post('/newprofile', function (req, res) {
    let newProfile = new Profile(req.body);
    console.log("creating new profile");
    newProfile.save(function (err) {
        if (err) {
            console.log("error creating")
            res.json({ message: "Error creating a profile", err: err });
        } else {
            res.json({ message: "Success", id: newProfile._id })
        }
    })
})

// Update profile
app.put('/editprofile/:id', function (req, res) {
    console.log("editing profile")
    Profile.findOne({ _id: req.body.id }, function (err, profile) {
        console.log(profile)
        profile.firstname = req.body.firstname;
        profile.lastname = req.body.lastname;
        profile.resume = req.body.resume;
        profile.linkedin = req.body.linkedin;
        profile.github = req.body.github;
        profile.personal = req.body.personal;
        profile.save(function (err) {
            if (err) {
                res.json({ message: "Error", err: err });
            } else {
                res.json({ message: "Success", id: profile._id })
            }
        })
    })
})

// Delete profile
app.delete('/deleteprofile/:id', function (req, res) {
    console.log("deleting profile id: ", req.params.id)
    Profile.remove({ _id: req.params.id }, function (err) {
        if (err) {
            res.json({ message: "Error", err: err })
        } else {
            res.json({ message: "Success" })
        }
    })
})

// Retrieve all jobs
app.get('/jobs', function (req, res) {
    Job.find({}, null, { sort: '-rating' }, function (err, jobs) {
        console.log(jobs)
        if (err) {
            res.json({ message: "Error", err: err })
        } else {
            res.json({ message: "Success", data: jobs })
        }
    })
})

// Create a new job
app.post('/new', function (req, res) {
    let newJob = new Job(req.body);
    console.log("creating new job");
    newJob.save(function (err) {
        if (err) {
            console.log("error creating")
            res.json({ message: "Error creating a job", err: err });
        } else {
            res.json({ message: "Success", id: newJob._id })
        }
    })
})

// Retrieve job
app.get('/findjob/:id', function (req, res) {
    Job.findOne({ _id: req.params.id }, function (err, jobs) {
        console.log(jobs)
        if (err) {
            res.json({ message: "Error", err: err })
        } else {
            res.json({ message: "Success", data: jobs })
        }
    })
})

// Update job
app.put('/edit/:id', function (req, res) {
    console.log("editing job")
    Job.findOne({ _id: req.body.id }, function (err, job) {
        console.log(job)
        job.company = req.body.company;
        job.title = req.body.title;
        job.category = req.body.category;
        job.linktopost = req.body.linktopost;
        job.status = req.body.status;
        job.notes = req.body.notes;
        job.save(function (err) {
            if (err) {
                res.json({ message: "Error", err: err });
            } else {
                res.json({ message: "Success", id: job._id })
            }
        })
    })
})


// Delete job
app.delete('/delete/:id', function (req, res) {
    console.log("deleting author id: ", req.params.id)
    Job.remove({ _id: req.params.id }, function (err) {
        if (err) {
            res.json({ message: "Error", err: err })
        } else {
            res.json({ message: "Success" })
        }
    })
})

// Vote up job
app.put('/likejob/:id', function (req, res) {
    Job.findOne({ _id: req.body.job._id }, function (err, job) {
        console.log(job);
        job.rating++;
        job.save(function (err) {
            if (err) {
                res.json({ message: "Error", err: err });
            } else {
                res.json({ message: "Success", id: job._id })
            }
        })
    })
})

// Vote down job
app.put('/unlikejob/:id', function (req, res) {
    Job.findOne({ _id: req.body.job._id }, function (err, job) {
        console.log(job);
        job.rating--;
        job.save(function (err) {
            if (err) {
                res.json({ message: "Error", err: err });
            } else {
                res.json({ message: "Success", id: job._id })
            }
        })
    })
})

// Catch 'other' routes
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})