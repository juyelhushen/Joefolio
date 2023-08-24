import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Responsive]'
})
export class ResponsiveDirective {
  constructor(
    private element: ElementRef,
    private breakPointObserver: BreakpointObserver

  ) {
    this.breakPointObserver
      .observe([Breakpoints .HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.element.nativeElement.classList.remove('pc');
              }

              if (breakpoint === Breakpoints.WebLandscape) {
                this.element.nativeElement.classList.add('pc');
              }
            }
          }
        },
      });
  }
}
