import { Component } from '@angular/core';
import { RouterLink ,RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loggedIn(loginForm :any){
    // console.log(loginForm.value);
    console.log(loginForm.controls.email);

  }
}
