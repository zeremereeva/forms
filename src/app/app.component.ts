import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { delay, filter, finalize, map, mergeMap, tap } from 'rxjs/operators';
import { ITask } from './model';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: ITask[] = [
    {
      image: '/assets/images/Image1.png',
      title: 'Website',
    },
    {
      image: '/assets/images/Image2.png',
      title: 'Discord',
    },
    {
      image: '/assets/images/Image3.png',
      title: 'Instagram',
    },
    {
      image: '/assets/images/Image4.png',
      title: 'Youtube chanel',
    },
    {
      image: '/assets/images/Image5.png',
      title: 'Facebook',
    },
    {
      image: '/assets/images/Image6.png',
      title: 'Tiktok',
    },
  ];
  loading = false;

  myForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    secondName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    bio: new FormControl(),
    age: new FormControl(28),
  });

  constructor(private formService: FormService) {
    this.formService.myData().subscribe((result) => console.log(result));
  }

  saveForm(): void {
    this.loading = true;

    this.formService
      .save(this.myForm.value)
      .pipe(
        delay(2000),
        // map((val) => val.email),
        mergeMap((form) =>
          this.formService
            .changeAge()
            .pipe(map((age) => ({ ...form, age: age })))
        ),
        tap((val) => {
          this.myForm.reset();
          this.myForm.updateValueAndValidity();
          console.log('form value', val);
          localStorage.setItem('Users', JSON.stringify(val));
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe();
  }
}
