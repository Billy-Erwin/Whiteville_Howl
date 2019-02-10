export class SidebarService{
	public itemMap = new Map();
	public selectedNav;
	public selectedSidebar;

	getSidebar(){
		return this.itemMap.get(this.selectedNav);
	}

	getSelectedNav(){
		return this.selectedNav;
	}

	setSelectedNav(navItem){
		this.selectedNav = navItem;
	}

	setSidebar(){
		this.selectedSidebar = this.itemMap.get(this.selectedNav);
	}

	constructor(){
		// this.itemMap.set('Home', ['Welcome', 'Location', 'Age Groups', 'Fees']);
		this.itemMap.set('About', ['Our Mission', 'Current Staff', 'Current Players', 'Affiliates', 'Contact Us']);
		this.itemMap.set('Galleries', ['Howl Team Photos', 'Howl vs. Lazer', 'Howl vs. Raeford', 'Howl vs. Myrtle Beach', 'Howl Family Day']);
		this.itemMap.set('Sponsors', ['Total Health', 'BB&T', 'J Ray Realty', 'Wards Grill', 'San Jose\'s', 'WhataBurger']);
		this.itemMap.set('Events', ['Full Schedule', 'Practice', 'Upcoming Games', 'Payment Due Dates', 'Registration']);
		// this.itemMap.set('Sports', ['Soccer 12U', 'Soccer 14U', 'Girls Volleyball 10U', 'Girls Volleyball 12U']);
		this.itemMap.set('Payment', ['Pay Pal', 'Zele', 'Checks', 'Cash']);
	}
}

