import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errores;
  public activoSpinner:boolean;
  public urlImg: string;
  public aleatorio: number;

   // tslint:disable-next-line: max-line-length
   private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private router: Router) {
    this.loginForm = this.createForm();
    this.errores = '';
   }

  ngOnInit(): void {
  }

  get email() { 
    return this.loginForm.get('email'); 
  }
  
  get password() { 
    return this.loginForm.get('password');
  }

  createForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)])
    });
  }

  onResetForm(): void {
    this.loginForm.reset();
    this.errores = '';
  }

  login():void{
    this.activoSpinner = true;
    if (this.loginForm.valid) {
       //  console.log(this.loginForm.value);
       //  this.activoSpinner = false;
       //  this.router.navigate(['admin']);
       //  this.onResetForm();
      const {email, password} = this.loginForm.value;
      this.router.navigate(['dashboard']); 


    } else {
      this.errores = '';
    }
  }

  registrarse():void{
   //this.router.navigate(['register']);
  }

  limpia(){
    return this.errores = '';
  }

  logout(){
    /* localStorage.removeItem('token');
    localStorage.clear(); */
  }




}
