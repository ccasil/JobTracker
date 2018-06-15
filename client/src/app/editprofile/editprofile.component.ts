import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  firstname: string;
  lastname: string;
  resume: string;
  linkedin: string;
  github: string;
  personal: string;
  error: string;
  profile: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.profile = this._httpService.selected;
  }

  submitButton() {
    const observable = this._httpService.editProfile(this.profile);
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

  delete(profile) {
    const observable = this._httpService.deleteProfile(profile);
    observable.subscribe(data => {
      this._router.navigate(['/home']);
    });
  }
}
