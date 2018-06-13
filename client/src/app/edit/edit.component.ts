import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  company: string;
  title: string;
  category: string;
  linktopost: string;
  status: string;
  notes: string;
  error: string;
  job: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.job = this._httpService.selected;
  }

  submitButton() {
    const observable = this._httpService.editJob(this.job);
    observable.subscribe(data => {
      if ((data as any).message === 'Success') {
        console.log(data);
        this._router.navigate(['/home']);
      } else {
        console.log(data);
        if ((data as any).err.errors.name !== undefined) {
          this.error = 'Company name must be at least 3 characters';
        } else if ((data as any).err.errors.type !== undefined) {
          this.error = 'Title must be at least 3 characters';
        }
      }
    });
    console.log(this.company);
  }
}
