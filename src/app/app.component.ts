import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Joefolio';

  isConfirmationRoute: boolean = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isConfirmationRoute =
          activatedRoute.firstChild?.snapshot.routeConfig?.path === 'confirm';
      });
  }

  ngOnInit() {
    Aos.init();
  }
}
