import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PortfolioValuationComponent } from './portfolio-valuation/portfolio-valuation.component';
import { ProjectValuationComponent } from './project-valuation/project-valuation.component';

const routes: Routes = [
  { path:'' , component:HomepageComponent},
  { path:'home' , component:HomepageComponent},
  { path:'marketplace' , component:MarketplaceComponent},
  { path:'project-valuation' , component:ProjectValuationComponent},
  { path:'portfolio-valuation' , component:PortfolioValuationComponent},
  { path:'**' , redirectTo:'home' , pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
