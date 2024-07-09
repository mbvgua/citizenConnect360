import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterEmailComponent } from "./register-email/register-email.component";
import { LoginEmailComponent } from "./login-email/login-email.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegisterEmailComponent, LoginEmailComponent, ForgotPasswordComponent]
})
export class AppComponent {
  title = 'frontend';
}
