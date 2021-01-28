import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PortfolioValuationComponent } from './portfolio-valuation/portfolio-valuation.component';
import { ProjectValuationComponent } from './project-valuation/project-valuation.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MarketplaceComponent,
    PortfolioValuationComponent,
    ProjectValuationComponent
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
