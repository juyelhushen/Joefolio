import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TopbarComponent } from '../topbar/topbar.component';
import { RippleGlobalOptions } from '@angular/material/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
})
export class SidenavbarComponent   {


  radius: number = 20;
  color: string = '#00909c';

  @ViewChild(TopbarComponent) topbar!: TopbarComponent;

  public isMobile = false;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {
    this.observer.observe(['(min-width: 800px)']).subscribe((res) => {
      this.isMobile = res.matches;
    });
  }

  toggle = () => {
    this.topbar.toggleSidenav();
  };
}
