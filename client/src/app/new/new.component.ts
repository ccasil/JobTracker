import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  company: string;
  title: string;
  category: string;
  linktopost: string;
  status: string;
  notes: string;
  error: string;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  submitButton() {
    const observable = this._httpService.newJob(this.company, this.title, this.category, this.linktopost, this.status, this.notes);
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
