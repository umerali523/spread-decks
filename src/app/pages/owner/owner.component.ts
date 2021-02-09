import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('SPREAD | Owner');
  }
  activeRow: string = 'activa';
  activeTab = {
    tabName : 'activa',
    status : false
  }
  equityCollapsed : boolean = true;

  activaTabCollapsed : boolean = true;
  passivaTabCollapsed : boolean = true;
 
  collapseTableRow(tabName:string){
    // if(this.activeTab.tabName!='' && this.activeTab.tabName!=tabName){
    //   this.activeTab.status = false;
    // }
    // if(this.activeTab.tabName == tabName){
    //   this.activeTab.status = !this.activeTab.status;
    // }
    // this.activeTab.tabName = tabName;
  }

}
