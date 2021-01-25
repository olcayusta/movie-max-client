import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      email: ['olcay@gmail.com', [Validators.required]],
      password: ['123456', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    this.authService.login();
  }
}
