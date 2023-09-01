import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
