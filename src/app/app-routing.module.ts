import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { PortfolioValuationComponent } from './pages/portfolio-valuation/portfolio-valuation.component';
import { ProjectValuationComponent } from './pages/project-valuation/project-valuation.component';

const routes: Routes = [

  {path: '', component: WebLayoutComponent, children:[
    { path:'' , component:HomepageComponent},
    { path:'home' , component:HomepageComponent},
    { path:'marketplace' , component:MarketplaceComponent},
    { path:'project-valuation' , component:ProjectValuationComponent},
    { path:'portfolio-valuation' , component:PortfolioValuationComponent},
    { path:'**' , redirectTo:'home' , pathMatch:'full'}, 
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
