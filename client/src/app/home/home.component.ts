import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs = [];
  profiles = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getProfiles();
    this.getJobs();
  }

  getProfiles() {
    const observable = this._httpService.getProfiles();
    observable.subscribe(data => {
      console.log(data);
      this.profiles = (data as any).data;
    });
  }

  editProfile(profile) {
    console.log(profile);
    this._httpService.selected = profile;
    this._router.navigate(['/editprofile/' + profile._id]);
  }

  getJobs() {
    const observable = this._httpService.getJobs();
    observable.subscribe(data => {
      console.log(data);
      this.jobs = (data as any).data;
    });
  }

  editJob(job) {
    console.log(job);
    this._httpService.selected = job;
    this._router.navigate(['/edit/' + job._id]);
  }

  viewJob(job) {
    this._httpService.selected = job;
    this._router.navigate(['/details/' + job._id]);
  }
}
