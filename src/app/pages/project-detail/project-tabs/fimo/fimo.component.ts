import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fimo',
  templateUrl: './fimo.component.html',
  styleUrls: ['./fimo.component.scss']
})
export class FimoComponent implements OnInit {

  activeRow: string = 'activa';
  activeTab = {
    tabName : 'activa',
    status : false
  }
  equityCollapsed : boolean = true;




  constructor() { }

  ngOnInit(): void {
  }

  collapseTableRow(tabName:string){
    if(this.activeTab.tabName!='' && this.activeTab.tabName!=tabName){
      this.activeTab.status = false;
    }
    if(this.activeTab.tabName == tabName){
      this.activeTab.status = !this.activeTab.status;
    }
    this.activeTab.tabName = tabName;
  }
}
