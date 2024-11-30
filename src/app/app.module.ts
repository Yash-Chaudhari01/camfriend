import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HowItWorksComponent } from './components/userComponets/how-it-works/how-it-works.component';
import { WhyChoosesUsComponent } from './components/userComponets/why-chooses-us/why-chooses-us.component';
import { FeedbackComponent } from './components/userComponets/feedback/feedback.component';
import { SigupComponent } from './components/login-signup/sigup/sigup.component';
import { LoginComponent } from './components/login-signup/login/login.component';
import { ProductDetailsComponent } from './components/vender/product-details/product-details.component';
import { ProdcutlistComponent } from './components/productList/prodcutlist/prodcutlist.component';
import { UserProfileComponent } from './components/userComponets/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HowItWorksComponent,
    WhyChoosesUsComponent,
    FeedbackComponent,
    SigupComponent,
    LoginComponent,
    ProductDetailsComponent,
    ProdcutlistComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
