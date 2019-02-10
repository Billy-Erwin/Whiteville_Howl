import {Component, OnInit} from "@angular/core";
import {SidebarService} from "./sidebar.service";

@Component({
	styleUrls: ['howl.style.css'],
	selector: 'howlSidebar',
	template:`
		<div *ngIf="sidebarService.selectedSidebar && sidebarService.getSelectedNav() !== 'Home'" class="list-group theSide">
			<a href="#" class="list-group-item list-group-item-action active">
				{{sidebarService.selectedNav}}
			</a>
			<a *ngFor="let sideBarItem of sidebarService.selectedSidebar"
				class="list-group-item list-group-item-action">
				 {{sideBarItem}}
			</a>
		</div>
	`
})

export class SidebarComponent implements OnInit{

	constructor(public sidebarService: SidebarService) {}

	ngOnInit(){
		this.sidebarService.setSelectedNav('Home');
		this.sidebarService.setSidebar();
	}
}