import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  @Output() sidenavToggle = new EventEmitter<void>();
  
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  public isMobile = false;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        this.isMobile = res.matches;

        if (this.isMobile) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.close();
        }
      });

    this.isMobile = this.observer.isMatched('(max-width: 800px)');
    if (!this.isMobile) {
      this.sidenav.close();
    }
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }
}
