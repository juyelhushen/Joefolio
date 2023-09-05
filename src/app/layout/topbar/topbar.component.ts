import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

declare var windows: Window;

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {

  isMobile: boolean = false;

  @Output()sidenavToggle = new EventEmitter<void>();

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      this.isMobile = res.matches;
    });
    this.isMobile = this.observer.isMatched('(max-width: 800px)');
    if (!this.isMobile) {
      this.sidenav.close();
    }
  }

  toggleSidenav = () => {
    let menu = document.getElementById('menu');
    menu?.classList.toggle('openmenu');
    this.sidenavToggle.emit();
  }
}
