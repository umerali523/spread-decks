import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit,OnDestroy {

  navLabel:string = 'New';
  routerSub:any;
  constructor(
    private render2: Renderer2,
    private router: Router
  ) {
    
   }

  ngOnInit(): void {
    this.routerSub = this.router.events.subscribe(res =>{
      if(res instanceof NavigationEnd) {
        if(this.router.url == '/portfolio-valuation'||this.router.url == '/project-valuation'){
          this.navLabel = 'New';
        }else{
          this.navLabel = 'Beta';
        }
        console.log(this.router.url);
      } 
    });
    if(this.router.url == '/portfolio-valuation'||this.router.url == '/project-valuation'){
      this.navLabel = 'New';
    }else{
      this.navLabel = 'Beta';
    }
    let body = document.querySelector('body');
    this.render2.addClass(body, 'grey-bg');
  }
  
  ngOnDestroy() {
    let body = document.querySelector('body');
    this.render2.removeClass(body, 'grey-bg');
    if(this.routerSub){
      this.routerSub.unsubscribe();
    }
  }
  routeToSecurity(){
    this.router.navigate(['/security']);
  }

}
