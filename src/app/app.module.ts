import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { PortfolioValuationComponent } from './pages/portfolio-valuation/portfolio-valuation.component';
import { ProjectValuationComponent } from './pages/project-valuation/project-valuation.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { TradeSharesComponent } from './pages/trade-shares/trade-shares.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { FimoComponent } from './pages/project-detail/project-tabs/fimo/fimo.component';
import { ChartsModule } from 'ng2-charts';
import { OwnerComponent } from './pages/owner/owner.component';
import { LayoutWithSidebarComponent } from './layout/layout-with-sidebar/layout-with-sidebar.component';
import { SecurityComponent } from './pages/security/security.component';
import { SecondaryOwnerComponent } from './pages/secondary-owner/secondary-owner.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MarketplaceComponent,
    PortfolioValuationComponent,
    ProjectValuationComponent,
    AppLayoutComponent,
    WebLayoutComponent,
    BlankLayoutComponent,
    TradeSharesComponent,
    ProjectDetailComponent,
    FimoComponent,
    OwnerComponent,
    LayoutWithSidebarComponent,
    SecurityComponent,
    SecondaryOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
  }
}
