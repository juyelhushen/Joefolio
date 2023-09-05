import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  isHovered = false;

  toggleHover() {
    this.isHovered = !this.isHovered;
  }

}
