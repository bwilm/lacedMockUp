import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { FeatureSliderComponent } from './components/feature-slider/feature-slider.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ProductGridComponent,
    FooterComponent,
    BestSellerComponent,
    FeatureSliderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
