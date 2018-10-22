import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { RatingComponent } from './rating.component';
import { JumboTronComponent } from './jumboTron.component';
import { UserFormComponent } from './user-form.component';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { MenuTabComponent } from './menuTab.component';
import { NavigationBarComponent } from './navigationBar.component';

import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    RatingComponent,
    TruncatePipe,
    JumboTronComponent,
    UserFormComponent,
    HeaderComponent,
    SidebarComponent,
    MenuTabComponent,
    NavigationBarComponent
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
