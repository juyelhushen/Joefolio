import { Component } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  tooltipPosition: TooltipPosition = 'after';

  rocketImage: any = document.getElementById('rocket') as HTMLImageElement;

  scrollToTopWithDelay(delay: number) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, delay);
  }
}
