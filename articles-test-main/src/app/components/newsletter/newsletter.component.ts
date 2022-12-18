import { NewsletterService } from './../../services/newsletter/newsletter.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent implements OnInit {
  submitted = false;
  public form: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly service: NewsletterService
  ) {
    this.form = this.fb.group({
      firstname: ['Andres', [Validators.required]],
      lastname: ['Arellano', [Validators.required]],
      email: ['aarellano@gmail.com', [Validators.required, Validators.email]],
      phone: [
        '994738488',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.service.send(this.form.value).subscribe((response) => {
      console.log(response);
    });
  }
}
