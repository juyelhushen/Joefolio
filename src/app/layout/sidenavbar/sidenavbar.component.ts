import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent {

  @ViewChild('drawer') drawer!: MatSidenav;

  toggleSidenav() {
    this.drawer.toggle();
  }

}
