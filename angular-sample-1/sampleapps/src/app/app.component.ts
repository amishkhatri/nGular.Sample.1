import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sampleapps';

  public name = "amish khatri";
  public topic = "new topic";

  public image = "/assets/Logo.png";

  public random = "";



onclick()
{
  console.log("Thanks for subscribing")
  
}

}

