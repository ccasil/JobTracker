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

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));

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
            res.json({ message: "Error creating a jon", err: err });
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