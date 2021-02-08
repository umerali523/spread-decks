import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-valuation',
  templateUrl: './portfolio-valuation.component.html',
  styleUrls: ['./portfolio-valuation.component.scss']
})
export class PortfolioValuationComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('SPREAD | Portfolio Valuation');
  }

}
