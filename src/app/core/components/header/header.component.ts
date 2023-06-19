import { Router } from '@angular/router';
import { AuthService } from './../../../modules/auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {

  username?: string

  constructor(private oauthService: OAuthService, private router: Router){
    this.username = JSON.parse(localStorage.getItem('id_token_claims_obj')!).name
  }

  logoff(){
    this.oauthService.logOut(true);
    this.router.navigate(['/login']);
  }
}
