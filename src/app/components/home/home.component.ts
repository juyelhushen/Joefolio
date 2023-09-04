import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public isMobile = false;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(min-width: 800px)']).subscribe((res) => {
      this.isMobile = res.matches;
    });
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


  redirectToProject = () => {
    window.location.href = '#projects';
  };

  redirectToAbout = () => {
    window.location.href = '#about';
  };
}
