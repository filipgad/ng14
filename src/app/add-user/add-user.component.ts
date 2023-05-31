import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import {Observable} from 'rxjs';
import {FormService} from '../form/form.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {VersionService} from '../version/version.service';
import {NavButtonComponent} from '../nav-button/nav-button.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  templateUrl: './add-user.component.html',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    CommonModule,
    NavButtonComponent
  ],
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly formService = inject(FormService);
  protected readonly numberOfChecks$: Observable<number> = this.formService.getNumberOfChecks();
  protected readonly version = inject(VersionService);

  setVersion(version: number): void {
    this.version.setVersion(version);
  }

  // 1) Basic form
  form = new FormGroup({
    name: new FormControl('Dawid'),
    age: new FormControl(5),
  });

  checkValue(): void {
    const formValue = this.form.value;
    console.log(formValue.name);

    const formRawValue = this.form.getRawValue();
    console.log(formRawValue.name);

    const controlAge = this.form.controls.age;
    const getAge = this.form.get('age');

    this.formService.addCheck();
  }
  //
  // // getFirstLetter(): string {
  // //   const fieldValue = this.form.get('name')!.value;
  // //   return fieldValue.substring(1);
  // // }
  //
  setValues(): void {
    this.form.setValue({
      age: 6,
      name: 'Merry'
    });

    this.form.patchValue({
      age: 7,
    });
  }

  resetForm(): void {
    this.form.reset();
    console.log('FORM VALUE AFTER RESET', this.form.value);
  }
  // ---------------------

  // 2) Form with nonNullable
  // form = new FormGroup({
  //   name: new FormControl('Dawid'),
  //   age: new FormControl(5, { nonNullable: true }),
  // });
  //
  // resetForm(): void {
  //   this.form.reset();
  //   console.log('FORM VALUE AFTER RESET', this.form.value);
  // }
  // ---------------------

  // 3) Form build by NonNullableFormBuilder
  // form = this.fb.group({
  //   name: ['Dawid'],
  //   age: [5],
  // });
  //
  // resetForm(): void {
  //   this.form.reset();
  //   console.log('FORM VALUE AFTER RESET', this.form.value);
  // }
  // ---------------------

  // 4) FormControl with initial null value
  // formControlNull = this.fb.control(null);
  // formControl = this.fb.control<null | string>(null);
  //
  // setValueToControl(): void {
  //   this.formControlNull.setValue('abc');
  //   this.formControl.setValue('abc');
  // }
  // ---------------------

  // 5) FormGroup
  // form = new FormGroup<{
  //   name: FormControl<string | null>;
  //   age?: FormControl<number>;
  //   // lastName?: FormControl<string | null>;
  // }>({
  //   name: new FormControl('Dawid'),
  //   age: new FormControl(5, { nonNullable: true }),
  // });
  //
  // setControlToGroup(): void {
  //   this.form.setControl('lastName', this.fb.control('Doe'));
  // }
  //
  // removeControl(): void {
  //   this.form.removeControl('name');
  //   this.form.removeControl('age');
  // }
  // ---------------------

  // 6) FormRecord - dynamic form groups - we can add/remove controls
  // formRecord = this.fb.record<string | null>({});
  // // formRecord = this.fb.record({
  // //   test: this.fb.control('sdfgdf')
  // // });
  //
  // setControlToRecord(): void {
  //   this.formRecord.setControl('lastName', this.fb.control('Doe'));
  //   this.formRecord.setControl('lastName', this.fb.control(123));
  // }
  //
  // removeControlFromRecord(): void {
  //   this.formRecord.removeControl('lastName');
  // }
  // ---------------------

  // 7) FormArray
  // formArray = new FormArray([new FormControl(123)]);
  // emptyFormArray = new FormArray([]);
  // emptyFormArrayWithType = new FormArray<FormControl<string | null>>([]);
  //
  // addControlToArray(): void {
  //   this.formArray.push(new FormControl('abcd'));
  //   this.formArray.push(new FormControl(4321));
  //
  //   this.emptyFormArray.push(new FormControl('abcd'));
  //   this.emptyFormArray.push(new FormControl(123));
  //
  //   this.emptyFormArrayWithType.push(new FormControl('abcd'));
  //   this.emptyFormArrayWithType.push(new FormControl(123));
  // }
  // ---------------------

}
