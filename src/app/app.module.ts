import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFeaturesComponent } from './views/main-features/main-features.component';
import { HeaderComponent } from './common/header/header.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { BannerComponent } from './views/banner/banner.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FooterComponent } from './views/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    MainFeaturesComponent,
    HeaderComponent,
    PricingComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
