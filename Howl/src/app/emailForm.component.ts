import {Component, Input} from "@angular/core";

import {EmailForm} from "./email-form";

@Component({
	selector: 'email-form',
	templateUrl: 'emailForm.component.html',
	styleUrls: ['howl.style.css']
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

	onSubmit() {
		this.submitted = true;
		console.log(JSON.stringify(this.model));
	}

	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }
}
