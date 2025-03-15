import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonService, MInputComponent } from 'leaf-dashboard';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MInputComponent, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputComponent {
  form: FormGroup;
  test = '';
  emailValidator: ValidatorFn =
    Validators.compose([Validators.required, Validators.email]) ?? (() => null);

  examples: string[] = [
    `<atom-m-input
      label="Favorite food"
      value="Sushi"
      placeholder="Ex. Pizza"
      [buttonClear]="true"
      (outputValue)="test = $event"
    >
    </atom-m-input>`,
    `<atom-m-input label="Disabled" [disabledValue]="true" placeholder="Will not be displayed" class="twenty-wide">
    </atom-m-input>`,
    `<atom-m-input label="Hint" placeholder="Ex. Anything" startHint="Start" endHint="End"> </atom-m-input>`,
    `<atom-m-input label="Hint count" placeholder="Ex. Anything" [countHint]="10"> </atom-m-input>`,
    `<atom-m-input label="Telephone" placeholder="95555-1234" [iconPrefix]="'phone'"> </atom-m-input>`,
    `<atom-m-input type="password" label="Password" placeholder=""> </atom-m-input>`,
    `<form [formGroup]="form" class="input-form">
      <atom-m-input
        *ngIf="form.get('email')"
        formControlName="email"
        [validators]="['Validators.required', 'Validators.email']"
        type="email"
        label="Email"
        placeholder="Ex. name@mail.com"
      >
      </atom-m-input>
      {{ form.get('email')?.value }}
    </form>`,
  ];
  constructor(
    private readonly fb: FormBuilder,
    private readonly commonService: CommonService
  ) {
    this.commonService.setTitle('Input - Examples');
    this.form = this.fb.group({
      email: [''],
    });
  }
}
