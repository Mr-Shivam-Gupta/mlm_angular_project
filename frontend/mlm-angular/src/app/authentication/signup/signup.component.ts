import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import correct form-related modules
import { AuthService } from '@core';
import { UnsubscribeOnDestroyAdapter } from '@shared';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  authForm!:  FormGroup; // Use the correct FormGroup type
  submitted = false;
  returnUrl!: string;
  sidname!: string;
  sid: string = ""; 
  hide = true;
  chide = true;// Initialize sid
  handleError: any;

  constructor(
    private formBuilder: FormBuilder, // Use the correct FormBuilder
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    let xsid = this.route.snapshot.paramMap.get('sid');
    let vsid: string = xsid == null ? "123456" : xsid;
    console.log('sid: ' + vsid);

    // Assuming AuthService has a function called checksid
    this.authService.checksid(vsid).then((data: any) => {
      let datax: any = data;
      if (datax.result == 0) {
        this.sid = '123456';
        this.sidname = 'Grow Token';
      } else {
        this.sid = vsid;
        this.sidname = datax.name;
      }
    });

    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      sid: [''],
      // name: ['', Validators.required],
      // mobile: ['', Validators.required],
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
  
    // Call the signup function from your AuthService
    this.authService.signup(
      this.f['username'].value,
      this.f['email'].value,
      this.f['password'].value
    )
    .then((res: any) => {
      if (res && res.result === 1) {
        this.router.navigate(['/dashboard/dashboard1']);
      } else {
        console.error('Registration failed.');
      }
    })
    .catch((error: any) => {
      this.handleError(error);
    });
  } 
}
