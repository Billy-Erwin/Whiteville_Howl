import {Component} from "@angular/core";

@Component({
	selector: 'body-1',
	template:`
		<div class="container-fluid">
			<div class="row">
				<div class="col col-sm-3">
					<howlSidebar></howlSidebar>
				</div>
				<div class="col col-sm-9">
					<content-port></content-port>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['howl.style.css']
})

export class Body1{
}
