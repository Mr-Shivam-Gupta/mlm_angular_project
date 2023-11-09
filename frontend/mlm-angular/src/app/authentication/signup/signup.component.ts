import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '@core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  sidname!:string
  sid:string=""
  hide = true;
  chide = true;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private authService:AuthService
  ) {}
  ngOnInit() {
    let xsid=this.activatedRoute.snapshot.paramMap.get('sid')
    let vsid:string=xsid==null?"123456":xsid
    console.log('sid : '+vsid)
    this.authService.checksid(vsid).then(data=>{
      let datax:any=data;
      if(datax.result==0)
      {
        this.sid='123456';
        this.sidname='Grow Token'
      }
      else
      {
        this.sid=vsid
        this.sidname=datax.name;
      }
      
    })
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      sid:[''],
      name:['',Validators.required],
      mobile:['',Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      this.router.navigate(['/admin/dashboard/main']);
    }
  }
}
