import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Globalconstant } from 'src/app/shared/global-constant';
import emailjs from '@emailjs/browser';
import { Contact } from 'src/app/models/contact';
import { environment } from 'src/environments/environment';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  responseMessage: any;
  key = environment.emailJSKey;

  contactForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [null, [Validators.pattern(Globalconstant.nameRegex)]],
      email: [null, [Validators.pattern(Globalconstant.emailRegex)]],
      subject: [null, [Validators.minLength(10)]],
      message: [null, [Validators.minLength(20)]],
    });
  }

  async onSubmit() {
    emailjs.init(this.key);
    const formData = this.contactForm.value;
    let response = await emailjs.send('service_groma9h', 'template_94r6juq', {
      from_name: formData.name,
      to_name: 'Juyel',
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
    this.router.navigate(['/confirm']);
    // this.responseMessage = 'Thank you .';
    // this.snackbar.openSnackBar(this.responseMessage, '');
    this.contactForm.reset();
  }
}
