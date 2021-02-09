import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LayoutWithSidebarComponent } from './layout/layout-with-sidebar/layout-with-sidebar.component';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { OwnerComponent } from './pages/owner/owner.component';
import { PortfolioValuationComponent } from './pages/portfolio-valuation/portfolio-valuation.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectValuationComponent } from './pages/project-valuation/project-valuation.component';
import { TradeSharesComponent } from './pages/trade-shares/trade-shares.component';

const routes: Routes = [

  {path: '', component: WebLayoutComponent, children:[
    { path:'' , component:HomepageComponent},
    { path:'home' , component:HomepageComponent},
    { path:'marketplace' , component:MarketplaceComponent},
    { path:'trade-shares' , component:TradeSharesComponent},

 
  ]},
  {path: '', component: LayoutWithSidebarComponent, children:[
    { path:'secondary' , component:OwnerComponent},
  ]},
  {path:'' , component:AppLayoutComponent, children:[
    { path:'project-valuation' , component:ProjectValuationComponent},
    { path:'portfolio-valuation' , component:PortfolioValuationComponent},
    { path:'project-valuation-details' , component:ProjectDetailComponent},
  ]},
  { path:'**' , redirectTo:'home' , pathMatch:'full'}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
