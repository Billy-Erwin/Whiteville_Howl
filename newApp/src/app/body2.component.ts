import {Component} from "@angular/core";

@Component({
	selector: 'body-2',
	template:`
		<div class="container" style="border:10px solid black;">
			<div
				id="carouselExampleSlidesOnly"
				class="carousel slide"
				data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							class="d-block"
							src="../assets/images/logo_no_banner_blue.png"
							alt="First slide">
					</div>
					<div class="carousel-item">
						<img
							class="d-block"
							src="../assets/images/logo_no_banner_bw.png"
							alt="Second slide">
					</div>
					<div class="carousel-item">
						<img
							class="d-block"
							src="../assets/images/logo_no_banner_grey.png"
							alt="Third slide">
					</div>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['howl.style.css']
})

export class Body2{
}
