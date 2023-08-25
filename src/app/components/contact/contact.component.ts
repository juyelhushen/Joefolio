import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Globalconstant } from 'src/app/shared/global-constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: any = FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [
        null,
        [Validators.pattern(Globalconstant.nameRegex)]
      ],
      email: [
        null,
        [Validators.pattern(Globalconstant.emailRegex)]
      ],
      number: [
        null,
        [Validators.pattern(Globalconstant.contactNumberRegex),Validators.maxLength(10)]
      ],
      message: [
        null,
        [Validators.minLength(20)]
      ]
    });
  }
}
