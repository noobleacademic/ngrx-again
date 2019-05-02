import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {UserData} from '../../modal/userdata';

@Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
})
/** The login file is created and updated on Git */

export class LoginComponent implements OnInit {
      form:FormGroup;
      constructor(private formBuilder:FormBuilder,private loginService:LoginService){
            this.form = formBuilder.group({
                  email: ['poopu@mail.com', Validators.required],
                  password: ['123456', Validators.required]
            });  
      }
     
    //  private userLoginForm: any;
      private loginEmail: any;
      private loginPassword: any;
      ngOnInit(): void {
            // this.userLoginForm = this.formBuilder.group({
            //       subDomain: '',
            //       type: '',
            //       email: [this.loginEmail, [Validators.required]],
            //       password: [this.loginPassword, [Validators.required]]
            // });
      }
      login():void{
            const data = this.form.value;
            this.loginService.authenticateUser(data.email,data.password).subscribe(
                  ras =>{
                        localStorage.setItem('token', JSON.stringify(ras));
                              console.log(ras.access_token);
      });
            console.log(localStorage.getItem('token'));
             this.loginService.getUser().subscribe(
                  res=> (console.log(res))
            );
            
      }
      
      
}

