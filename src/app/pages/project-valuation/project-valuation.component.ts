import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-valuation',
  templateUrl: './project-valuation.component.html',
  styleUrls: ['./project-valuation.component.scss']
})
export class ProjectValuationComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('SPREAD | Project Valuation');
  }

}
