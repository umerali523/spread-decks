import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { PortfolioValuationComponent } from './pages/portfolio-valuation/portfolio-valuation.component';
import { ProjectValuationComponent } from './pages/project-valuation/project-valuation.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { TradeSharesComponent } from './pages/trade-shares/trade-shares.component';
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
    TradeSharesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas,far);
  }
}
