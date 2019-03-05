import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../../../Howl/src/app/header.component';
import { SidebarComponent } from '../../../Howl/src/app/sidebar.component';
import { MenuTabComponent } from '../../../Howl/src/app/menuTab.component';
import { NavigationBarComponent } from '../../../Howl/src/app/navigationBar.component';
import { ContentPortComponent } from '../../../Howl/src/app/contentPort.component';
import { SponsorsComponent } from '../../../Howl/src/app/sponsors.component';
import { FooterComponent } from '../../../Howl/src/app/footer.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		MenuTabComponent,
		NavigationBarComponent,
		ContentPortComponent,
		SponsorsComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
