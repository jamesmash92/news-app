"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage = __decorate([
        core_1.Component({
            selector: 'app-about',
            templateUrl: 'about.page.html',
            styleUrls: ['about.page.scss']
        })
    ], AboutPage);
    return AboutPage;
}());
exports.AboutPage = AboutPage;
//# sourceMappingURL=about.page.js.map