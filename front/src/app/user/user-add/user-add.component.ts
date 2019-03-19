import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  form: FormGroup;

  buildForm(): void { //1
    this.form = this.formBuilder.group({
      username:["", [Validators.required, Validators.pattern(/^.{4,12}$/)]],
      name:["", [Validators.required, Validators.pattern(/^.{4,12}$/)]],
      email:["", [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password:["", [Validators.required, Validators.pattern(/^.{6,16}$/)]],
      passwordConfirmation:["", [Validators.required]],
    }, {
      validator: this.customValidation, //2
    });
  };

  customValidation(group: FormGroup) { //3
    var password = group.get('password');
    var passwordConfirmation = group.get('passwordConfirmation');
    if(password.dirty && passwordConfirmation.dirty && password.value != passwordConfirmation.value){
        passwordConfirmation.setErrors({'match': true});
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  submit() {
    console.log(1);
    if(this.form.valid){
      this.userService.add(this.form.value)
      .subscribe(
        response => {
          console.log('성공');
          //console.log(response);
        },
        error => {
          alert('error래');
          console.log(error);
        }
      );
    }
    

  }

}