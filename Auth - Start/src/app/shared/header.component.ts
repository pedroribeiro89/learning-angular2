import { Component, OnDestroy } from "@angular/core";
import { AuthService } from '../shared/auth.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'my-header',
    template: `

        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">

                    <ul class="nav navbar-nav">

                        <li><a [routerLink]="['signup']">Sign Up</a></li>
                        <li><a [routerLink]="['signin']">Sign In</a></li>
                        <li><a [routerLink]="['protected']">Protected</a></li>

                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">

                        <li><a (click)="onLogout()" style="cursor: pointer">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->

            </nav>

        </header>
    `
})
export class HeaderComponent implements OnDestroy {

  isAutheticaded = false;
  private subscription: Subscription;

  constructor(private authService: AuthService) {
    this.subscription = this.authService.isAutheticaded().subscribe(
      authStatus => this.isAutheticaded = authStatus
    );
  }

  isAuth() {
    return this.isAutheticaded;
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
