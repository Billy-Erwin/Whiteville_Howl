import {Component} from "@angular/core";

@Component({
	styleUrls: ['howl.style.css'],
	selector: 'howlSidebar',
	template:`
		<div class="list-group theSide">
			<a href="#" class="list-group-item list-group-item-action active">
				About Us
			</a>
			<a href="#" class="list-group-item list-group-item-action">Our Mission</a>
			<a href="#" class="list-group-item list-group-item-action">Who We Are</a>
			<a href="#" class="list-group-item list-group-item-action">Current Staff</a>
			<a href="#" class="list-group-item list-group-item-action">Contact Us</a>
		</div>
	`
})

export class SidebarComponent{}