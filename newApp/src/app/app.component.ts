import { Component } from '@angular/core';
import {SidebarService} from "./sidebar.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [SidebarService]
})
export class AppComponent {
	constructor(public sidebarService: SidebarService) {
	}

}