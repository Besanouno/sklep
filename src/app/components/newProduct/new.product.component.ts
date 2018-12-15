import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-product-component',
  templateUrl: './new.product.component.html',
  styleUrls: ['./new.product.component.css']
})
export class NewProductComponent {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initializeFormGroup();
    }


  private initializeFormGroup() {
    this.form = this.formBuilder.group({
      name: '',
      price: '',
      desc: '',
      photoSrc: '',
      amount: 0
    });
  }

}
