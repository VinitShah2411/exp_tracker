import { Component, ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  firstName:String=""
  email="" // auto - string 
  password:String=""
  
  signup(){
  console.log(this.firstName)
  console.log(this.email);
  console.log(this.password);
}
}
