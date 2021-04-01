import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginApp';
  emailid: any;
  formdata: any;
  
  ngOnInit(){
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password: new FormControl("")
    });
  }

  onClickSubmit(data: { emailid: any; }){
    this.emailid = data.emailid;
  }
}
