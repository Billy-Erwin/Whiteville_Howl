import {Component, Input} from "@angular/core";
import {SidebarService} from "./sidebar.service";

@Component({
	selector: 'menu-tab',
	templateUrl: 'menuTab.component.html',
	styleUrls: ['howl.style.css']
})

export class MenuTabComponent{
	@Input() menuTabData;

	constructor(private sidebarService: SidebarService) {}

	updateSidebar(navItem){
		this.sidebarService.setSelectedNav(navItem);
		this.sidebarService.setSidebar();
	}
}
