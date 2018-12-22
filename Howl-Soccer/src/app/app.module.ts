import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../../../newApp/src/app/header.component';
import { SidebarComponent } from '../../../newApp/src/app/sidebar.component';
import { MenuTabComponent } from '../../../newApp/src/app/menuTab.component';
import { NavigationBarComponent } from '../../../newApp/src/app/navigationBar.component';
import { ContentPortComponent } from '../../../newApp/src/app/contentPort.component';
import { SponsorsComponent } from '../../../newApp/src/app/sponsors.component';
import { FooterComponent } from '../../../newApp/src/app/footer.component';


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
