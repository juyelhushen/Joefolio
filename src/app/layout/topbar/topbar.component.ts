import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  isMenuOpen: boolean = false;
  isMobile: boolean = false;

  @ViewChild('indicator') indicator!: ElementRef;

  private subscription!: Subscription;

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(
    private observer: BreakpointObserver,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.subscription = this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        this.isMobile = res.matches;
      });
  }

  setActive = (id: string) => {
    const navLink = this.el.nativeElement.querySelectorAll('.navItems a');
    navLink.forEach((e: HTMLElement) => {
      this.renderer.removeClass(e, 'active');
    });
    const activeLink = this.el.nativeElement.querySelector(
      `.navItems a[href='#${id}']`
    );
    this.renderer.addClass(activeLink, 'active');
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidenav = () => {
    let menu = this.el.nativeElement.querySelector('#humMenu');
    this.renderer.addClass(menu, 'openMenu');
    this.isMenuOpen = !this.isMenuOpen;
    this.sidenavToggle.emit();
  };
}
