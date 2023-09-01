import { Component } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { environment } from 'src/environments/environment';

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


  redirectToLinkdin = (): void => {
    window.open(environment.linkedinLink, '-blank');
  };

  redirectToYoutube = () => {
    window.open(environment.youtubeLink, '-blank');
  };

  redirectToFB = () => {
    window.open(environment.fbLink, '-blank');
  };

  redirectToGithub = () => {
    window.open(environment.githubLink, '-blank');
  };

  redirectToInsta = () => {
    window.open(environment.instaLink, '-blank');
  };

}
