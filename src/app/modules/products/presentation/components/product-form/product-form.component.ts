import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IProduct } from '../../../domain/product.interface';
import { NgClass } from '@angular/common';
import { FormatDatePipe } from '../../../../../lib/pipes/format-date.pipe';
import { isCurrentDateGreater } from './validators/input-validator';
import { addOneYear, convertStringToDate } from './helpers/convert-date';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  providers: [FormatDatePipe],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  @Input() product: Partial<IProduct>;
  @Input() isIdCreated!: boolean;
  @Output() submitEmitter: EventEmitter<IProduct>;
  @Output() validationIdEmitter: EventEmitter<string>;
  productForm!: FormGroup;
  dateRegex: RegExp;

  constructor(private readonly formatDate: FormatDatePipe) {
    this.submitEmitter = new EventEmitter<IProduct>();
    this.validationIdEmitter = new EventEmitter<string>();
    this.dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
    this.product = {};
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(
        {
          value: this.product.id ? this.product.id : '',
          disabled: this.product.id ? true : false,
        },
        [Validators.required, Validators.minLength(3), Validators.maxLength(10)]
      ),
      name: new FormControl(this.product.name ? this.product.name : '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      description: new FormControl(
        this.product.description ? this.product.description : '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ]
      ),
      logo: new FormControl(this.product.logo, [Validators.required]),
      date_release: new FormControl(
        this.product.date_release
          ? this.formatDate.transform(this.product.date_release)
          : '',
        [
          Validators.required,
          Validators.pattern(this.dateRegex),
          isCurrentDateGreater,
        ]
      ),
      date_revision: new FormControl({
        value: this.product.date_revision
          ? this.formatDate.transform(this.product.date_revision)
          : '',
        disabled: true,
      }),
    });
  }

  onSubmit() {
    const product = this.productForm.value as IProduct;

    product.date_release = convertStringToDate(
      this.productForm.controls['date_release'].value
    );

    product.date_revision = convertStringToDate(
      this.productForm.controls['date_revision'].value
    );

    product.id = this.productForm.controls['id'].value;

    this.submitEmitter.emit(product);
  }

  getError(controlName: string, errorType: string): boolean {
    const control = this.productForm.controls[controlName];
    return control.hasError(errorType);
  }

  onInput(): void {
    const date_release = this.productForm.controls['date_release'].value;
    const date_revision = addOneYear(date_release);
    const formattedDate = this.formatDate.transform(date_revision);
    this.productForm.controls['date_revision'].setValue(formattedDate);
  }

  verifyId() {
    if (this.productForm.controls['id'].valid) {
      this.validationIdEmitter.emit(this.productForm.controls['id'].value);
    }
  }
}
