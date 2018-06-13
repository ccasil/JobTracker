import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  job: any;
  // count = false;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.job = this._httpService.selected;
  }

  findJob(job) {
    console.log(job);
    const observable = this._httpService.findJob(job);
    observable.subscribe(data => {
    this.job = (data as any).data;
    });
  }

  like(job) {
    const observable = this._httpService.likeJob(job);
    console.log(this.job);
    observable.subscribe(data => {
      // this.count = true;
      // if (this.count = true) {
      //   (document.getElementById('like') as any).disabled = true;
      //   this.count = false;
      // }
      this.findJob(this.job._id);
    });
  }

  unlike(job) {
    const observable = this._httpService.unlikeJob(job);
    console.log(this.job);
    observable.subscribe(data => {
      // this.count = true;
      // if (this.count = true) {
      //   (document.getElementById('unlike') as any).disabled = true;
      //   this.count = false;
      // }
      this.findJob(this.job._id);
    });
  }

  delete(job) {
    const observable = this._httpService.deleteJob(job);
    observable.subscribe(data => {
      this._router.navigate(['/home']);
    });
  }

}
