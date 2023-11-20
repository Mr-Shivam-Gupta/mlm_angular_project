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
    // let xsid=this.activatedRoute.snapshot.paramMap.get('sid')
    // let vsid:string=xsid==null?"123456":xsid
    let vsid: string = this.route.snapshot.params['sid'] || '123456';
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
  
    if (this.authForm.invalid) {
      return;
    }
  
    const sid = this.authForm.get('sid')?.value || '';
  
    console.log('Submitting signup request:', {
      sid,
      name: this.f['name'].value,
      mobile: this.f['mobile'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
    });
  
    // Call the signup function from your AuthService
    this.authService
      .signup(
        sid,
        this.f['name'].value,
        this.f['mobile'].value,
        this.f['email'].value,
        this.f['password'].value
      )
      .then((res: any) => {
        console.log('Signup response:', res);
  
        if (res && res.result === 1) {
          this.router.navigate(['/dashboard/dashboard1']);
        } else {
          console.error('Registration failed.');
        }
      })
      .catch((error: any) => {
        console.error('Error during signup:', error);
        this.handleError(error);
      });
  }
  

  handleError(error: any) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Handle the error accordingly, e.g., show a user-facing error message.
    // You might want to use Angular's MatSnackBar or another method to notify the user.
  }
}
