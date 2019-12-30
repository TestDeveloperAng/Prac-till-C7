import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  
  value = 1;

  servers = [
    {
      name : 'server 1',
      ping : '200ms'
    },
    {
      name : 'server 2',
      ping : '400ms'
    }
  ]

  serveractive = true;

  constructor(){
    setInterval(() => {
      this.serveractive = !this.serveractive;
    },2000)
  }

}