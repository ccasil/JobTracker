import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  selected: any;

  constructor(private _http: HttpClient) { }

  getProfiles() {
    return this._http.get('/profile');
  }

  findProfile(id) {
    return this._http.get('/findprofile/' + id);
  }

  newProfile(firstname, lastname, resume, linkedin, github, personal) {
    return this._http.post('/newprofile', {
      firstname: firstname,
      lastname: lastname,
      resume: resume,
      linkedin: linkedin,
      github: github,
      personal: personal
    });
  }

  editProfile(profile) {
    return this._http.put('/editprofile/' + profile._id, {
      id: profile._id,
      firstname: profile.firstname,
      lastname: profile.lastname,
      resume: profile.resume,
      linkedin: profile.linkedin,
      github: profile.github,
      personal: profile.personal
    });
  }

  deleteProfile(profile) {
    console.log('deleting ', profile);
    return this._http.delete('/deleteprofile/' + profile._id);
  }

  getJobs() {
    return this._http.get('/jobs');
  }

  findJob(id) {
    return this._http.get('/findjob/' + id);
  }

  newJob(company, title, category, linktopost, status, notes) {
    return this._http.post('/new', {
      company: company,
      title: title,
      category: category,
      linktopost: linktopost,
      status: status,
      notes: notes
    });
  }

  editJob(job) {
    return this._http.put('/edit/' + job._id, {
      id: job._id,
      company: job.company,
      title: job.title,
      category: job.category,
      linktopost: job.linktopost,
      status: job.status,
      notes: job.notes
    });
  }

  deleteJob(job) {
    console.log('deleting ', job);
    return this._http.delete('/delete/' + job._id);
  }

  likeJob(job) {
    console.log('like job service');
    return this._http.put('/likejob/' + job._id, { job: job });
  }

  unlikeJob(job) {
    console.log('unlike job service');
    return this._http.put('/unlikejob/' + job._id, { job: job });
  }


}
