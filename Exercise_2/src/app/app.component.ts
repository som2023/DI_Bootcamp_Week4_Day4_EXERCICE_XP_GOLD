import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise_2_Validating_A_Template_Based_Form';

  location = {
    address: "BP 03 bouake"
  }

  saveEvent(value: any) {
    console.log(value)
  }
}
