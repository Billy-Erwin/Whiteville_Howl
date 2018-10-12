import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: []
})

export class AppComponent {
  onClickMe($event){
    console.log('Clicked', $event);
  }
  title = 'Whiteville Howl';
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  submitBtnText = 'Submit';
  isValid = false;
}
 // <bs-jumbotron>
// <!--<div class="heading">Hey, Look at Me!</div>-->
// <!--<div class="body">This is some stuff about some stuff</div>-->
// <!--<div class="button">Click Here</div>-->
// </bs-jumbotron>
// template: `<products></products><user-form></user-form>`,
