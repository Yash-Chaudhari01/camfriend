import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowItWorksComponent } from './components/userComponets/how-it-works/how-it-works.component';
import { WhyChoosesUsComponent } from './components/userComponets/why-chooses-us/why-chooses-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FeedbackComponent } from './components/userComponets/feedback/feedback.component';
import { LoginComponent } from './components/login-signup/login/login.component';
import { sign } from 'crypto';
import { signalUpdateFn } from '@angular/core/primitives/signals';
import { SigupComponent } from './components/login-signup/sigup/sigup.component';
import { ProductDetailsComponent } from './components/vender/product-details/product-details.component';
import { ProdcutlistComponent } from './components/productList/prodcutlist/prodcutlist.component';
import { UserProfileComponent } from './components/userComponets/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'working',
    component:HowItWorksComponent
  },
  {
     path:'whyChooseUs',
     component:WhyChoosesUsComponent
  },{
    path:'',
    component:HomePageComponent
  },
  {
    path:'testimonials',
    component:FeedbackComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SigupComponent
  }
  ,{
    path:'createPodcut',
    component:ProductDetailsComponent
  },
  {
    path:'list',
      component:ProdcutlistComponent
  }
  ,{
    path:'profileDetails',
    component:UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
