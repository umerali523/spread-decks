import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  activeTab:string = 'overview';
  constructor() { }

  ngOnInit(): void {
  }

  toggleTab(activeTabe:string){
    this.activeTab = activeTabe;
  }

}
