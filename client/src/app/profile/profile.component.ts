import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstname: string;
  lastname: string;
  resume: string;
  linkedin: string;
  github: string;
  personal: string;
  error: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  submitButton() {
    const observable = this._httpService.newProfile(this.firstname, this.lastname, this.resume, this.linkedin, this.github, this.personal);
    observable.subscribe(data => {
      if ((data as any).message === 'Success') {
        console.log(data);
        this._router.navigate(['/home']);
      } else {
        console.log(data);
        if ((data as any).err.errors.firstname !== undefined) {
          this.error = 'First Name must be at least 3 characters';
        }
        if ((data as any).err.errors.lastname !== undefined) {
          this.error = 'Last Name must be at least 3 characters';
        } else if ((data as any).err.errors.resume !== undefined) {
          this.error = 'Resume must be submitted';
        }
      }
    });
    console.log(this.resume);
  }
}
