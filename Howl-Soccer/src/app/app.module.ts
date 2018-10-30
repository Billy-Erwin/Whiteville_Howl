import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { MenuTabComponent } from './menuTab.component';
import { NavigationBarComponent } from './navigationBar.component';
import { ContentPortComponent } from './contentPort.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		MenuTabComponent,
		NavigationBarComponent,
		ContentPortComponent
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
