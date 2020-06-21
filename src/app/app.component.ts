import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  Username="Dilp Donka";
  alertcount=0;
  menu=[{name:"Applications"},
  {name:"Enhanced Reports"},
  {name:"Other"},
  {name:"MAI As-Hoc Data"}]
}
