import { Component } from '@angular/core';
import {SidebarService} from "./sidebar.service";
import {EmailService} from "./emailComponent/email.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [SidebarService, EmailService]
})
export class AppComponent {
	constructor(public sidebarService: SidebarService, public emailService: EmailService) {
	}

}