import {Component, Input} from "@angular/core";
import {MenuTabService} from "./menuTab.service";

@Component({
  selector: 'menu-tab',
  templateUrl: 'menuTab.component.html',
  styleUrls: ['howl.style.css']
})

export class MenuTabComponent{
  @Input() menuTabData;
}
