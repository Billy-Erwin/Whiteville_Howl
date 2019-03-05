import {Component} from "@angular/core";
import {EmailService} from "./email.service";
import {EmailForm} from "./email-form";

@Component({
	selector: 'email-form',
	templateUrl: 'emailForm.component.html',
	styleUrls: ['../howl.style.css']
})

export class EmailFormComponent{

	model = new EmailForm(
		'Billy',
		'Erwin',
		'Billys Burritos',
		'williamcerwin@gmail.com',
		9105472960,
		'hey there');

	submitted = false;

	constructor(private emailService: EmailService) {}


	onSubmit() {
		this.submitted = true;
		// console.log(JSON.stringify(this.model));
		this.emailService.getUser(this.model).subscribe(data => console.log(data));
	}

	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }
}
