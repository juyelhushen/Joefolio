import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  finmart = () => {
  window.open(environment.finmart,'_blank')
  }

  corban = () => {
  window.open(environment.corban,'_blank')
  }

  biriyumee = () => {
  window.open(environment.biriyumee,'_blank')
  }
}
