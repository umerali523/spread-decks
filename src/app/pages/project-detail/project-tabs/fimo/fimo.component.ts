import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fimo',
  templateUrl: './fimo.component.html',
  styleUrls: ['./fimo.component.scss']
})
export class FimoComponent implements OnInit {

  activeRow: string = 'activa';
  
  
  showHideRow: boolean = false;
  rowID:number = 0;





  constructor() { }

  ngOnInit(): void {
  }

  collapseTableRow(rowID:number, isActiveRow:boolean){
    this.showHideRow =! this.showHideRow;   
    this.rowID = rowID;
  }
}
