import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {

  isMenuOpen: boolean = false;

  isMobile: boolean = false;

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(
    private observer: BreakpointObserver,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      this.isMobile = res.matches;
    });
  }

  toggleSidenav = () => {
    let menu = this.el.nativeElement.querySelector('#humMenu');
    this.renderer.addClass(menu,'openMenu');
    this.isMenuOpen = !this.isMenuOpen;
    this.sidenavToggle.emit();
  };
}
