import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { MenuTabComponent } from './menuTab.component';
import { NavigationBarComponent } from './navigationBar.component';
import { ContentPortComponent } from './contentPort.component';
import { SponsorsComponent } from './sponsors.component';
import { FooterComponent } from './footer.component';
import { Body1 } from './body1';
import { Body2 } from './body2.component';
import {SocialMediaComponent} from "./socialMedia.component";
import {EmailFormComponent} from "./emailComponent/emailForm.component";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		MenuTabComponent,
		NavigationBarComponent,
		ContentPortComponent,
		SponsorsComponent,
		FooterComponent,
		Body1,
		SocialMediaComponent,
		EmailFormComponent,
		Body2
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
