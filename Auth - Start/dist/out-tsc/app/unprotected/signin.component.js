var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../shared/auth.service';
export var SigninComponent = (function () {
    function SigninComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.error = false;
        this.errorMessage = '';
    }
    SigninComponent.prototype.onSignin = function () {
        this.authService.signinUser(this.myForm.value);
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    };
    SigninComponent = __decorate([
        Component({
            template: "\n        <h3>Please sign up to use all features</h3>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSignin()\">\n            <div class=\"input-group\">\n                <label for=\"email\">E-Mail</label>\n                <input formControlName=\"email\" type=\"email\" id=\"email\">\n            </div>\n            <div class=\"input-group\">\n                <label for=\"password\">Password</label>\n                <input formControlName=\"password\" type=\"password\" id=\"password\">\n            </div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Sign In</button>\n        </form>\n    "
        }), 
        __metadata('design:paramtypes', [FormBuilder, AuthService])
    ], SigninComponent);
    return SigninComponent;
}());
//# sourceMappingURL=../../../../src/app/unprotected/signin.component.js.map