import { Component } from '@angular/core';
import { Tools } from 'src/app/models/tools';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  finTools: Tools[] = [
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

  corTools: Tools[] = [
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

  joeTools: Tools[] = [
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
    {
      name: 'AOS',
    },
  ];

  birTools: Tools[] = [
    {
      name: 'outsystem',
    },
  ]
  finmart = () => {
    window.open(environment.finmart, '_blank');
  };

  corban = () => {
    window.open(environment.corban, '_blank');
  };

  joefolio = () => {
    window.open(environment.joefolio, '_blank');
  };
  biriyumee = () => {
    window.open(environment.biriyumee, '_blank');
  };
}
