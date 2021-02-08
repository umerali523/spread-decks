import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-trade-shares',
  templateUrl: './trade-shares.component.html',
  styleUrls: ['./trade-shares.component.scss']
})
export class TradeSharesComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('SPREAD | Trade Shares');
  }

}
