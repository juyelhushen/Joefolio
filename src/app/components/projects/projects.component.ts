import { Component } from '@angular/core';
import { Tools } from 'src/app/models/tools';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  firstPoject: Tools[] = [
    {
      name: 'Java',
    },
    {
      name: 'Spring boot',
    },
    {
      name: 'Angular',
    },
    {
      name: 'Strapi',
    },
    {
      name: 'AWS',
    },
    {
      name: 'Docker',
    },
    {
      name: 'GIT',
    },
    {
      name: 'Gitlab',
    },
  ];

  secoundProject: Tools[] = [
    {
      name: 'Java',
    },
    {
      name: 'Spring boot',
    },
    {
      name: 'React',
    },
    {
      name: 'Jhipster',
    },
    {
      name: 'Redis',
    },
    {
      name: 'ActiveMQ',
    },
    {
      name: 'Apache Camel',
    },
    {
      name: 'Docker',
    },
    {
      name: 'Grafana',
    },
    {
      name: 'GIT',
    },
    {
      name: 'GITHub',
    },
  ];

  thirdProject: Tools[] = [
    {
      name: 'HTML',
    },
    {
      name: 'SCSS',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'Angular',
    },
    {
      name: 'Aungular Material',
    },
  ];

  projectOne = () => {
    window.open(environment.projectOne, '_blank');
  };

  projectTwo = () => {
    window.open(environment.projectTwo, '_blank');
  };

  projectThree = () => {
    window.open(environment.projectThree, '_blank');
  };
}
