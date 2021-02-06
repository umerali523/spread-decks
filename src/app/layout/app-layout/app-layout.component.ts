import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor(
    private render2: Renderer2,

  ) { }

  ngOnInit(): void {
    let body = document.querySelector('body');
    this.render2.addClass(body, 'grey-bg');
  }
  
  ngOnDestroy() {
    let body = document.querySelector('body');
    this.render2.removeClass(body, 'grey-bg');
  }


}
