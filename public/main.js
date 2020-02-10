(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<layout>\n    <h5>Home</h5>\n\n</layout>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-sm sticky-top navbar-dark bg-dark\">\n\n    <button class=\"btn m-0 p-0\" data-target=\"#menu\" data-toggle=\"collapse\" role=\"button\">\n        <div class=\"d-block d-sm-block d-md-none mr-3\">\n            <i class=\"fa fa-bars fa-lg\" style=\"color: #FFFFFF;\"></i>\n        </div>\n\n    </button>\n\n    <div class=\"btn m-0 p-0\">\n        <div class=\"d-none d-md-block mr-3\">\n            <i class=\"fa fa-bars fa-lg\" style=\"color: #FFFFFF;\"></i>\n        </div>\n    </div>\n\n    <div class=\"navbar-brand\">\n        <i class=\"fab fa-old-republic fa-lg\"></i> M5\n    </div>\n\n    <ul class=\"nav justify-content-end ml-auto mr-3\">\n        <li class=\"nav-item\">\n            <div (click)=\"logout()\"><i class=\"fas fa-sign-out-alt fa-lg\"></i></div>\n        </li>\n    </ul>\n</nav>\n\n\n<div class=\"container-fluid\">\n\n    <div class=\"row\">\n\n        <div id=\"menu\" class=\"overlay fade collapse col-5 col-sm-3 col-md-2 col-lg-2 col-xl-2 d-md-none d-lg-none d-xl-none bg-dark\">\n            <div class=\"sticky-top\">\n                <menu class=\"px-0 py-0 my-0 mx-0\"></menu>\n            </div>\n        </div>\n\n        <div class=\"col-5 col-sm-3 col-md-2 col-lg-2 col-xl-2 d-none d-md-block d-lg-block d-xl-block bg-dark\" style=\"max-width: 12em;\">\n            <div class=\"sticky-top sticky-offset\">\n                <menu class=\"px-0 py-0 my-0 mx-0\"></menu>\n            </div>\n        </div>\n\n        <div class=\"col col-12 col-sm-11 col-md-9 col-lg-8 mt-4 mx-auto\">\n            <ng-content></ng-content>\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col my-3\">\n            <hr class=\"justify-content-sm-center\" />\n            <div class=\"text-center\">\n                <small>made by <a href=\"http://wiki.unix7.org\">oleg borodin</a></small>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm sticky-top navbar-dark bg-dark mb-4\">\n    <span class=\"navbar-text ml-3\">\n        <i class=\"fab fa-old-republic fa-lg\"></i>\n        M5 Login\n    </span>\n\n    <ul class=\"nav justify-content-end ml-auto\">\n\n    </ul>\n</nav>\n\n<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-8 col-sm-6 col-md-4 border p-4 mt-sm-5 ml-3 mr-3\">\n\n            <form accept-charset=\"UTF-8\" [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm)\">\n\n                <div class=\"form-group\">\n                    <label for=\"username\">Login name:</label>\n                    <input id=\"username\" class=\"form-control\" type=\"text\" formControlName=\"username\" />\n\n                    <small *ngIf=\"loginFormUsername.invalid && (loginFormUsername.dirty || loginFormUsername.touched)\" class=\"form-text text-muted\">\n                        <span *ngIf=\"loginFormUsername.errors.required\">Value is required</span>\n                    </small>\n\n\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Password:</label>\n                    <input id=\"password\" class=\"form-control\" type=\"password\" formControlName=\"password\" />\n\n                    <small *ngIf=\"loginFormPassword.invalid && (loginFormPassword.dirty || loginFormPassword.touched)\" class=\"form-text text-muted\">\n                        <span *ngIf=\"loginFormPassword.errors.required\">Value is required</span>\n                    </small>\n\n                </div>\n\n                <div class=\"text-center\">\n                    <button class=\"btn btn-primary btn-sm\" type=\"submit\" [disabled]=\"!loginForm.valid\">Submit</button>\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col mt-5\">\n            <hr class=\"justify-content-sm-center\" />\n            <div class=\"text-center\">\n                <small>made by <a href=\"http://wiki.unix7.org\">oleg borodin</a></small>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-2\">\n    <div class=\"dropdown-divider\"></div>\n    <div class=\"dropdown-item active\"><i class=\"fas fa-hammer\"></i> Menu </div>\n\n    <a class=\"dropdown-item\" routerLink=\"/\"><i class=\"fas fa-home\"></i> Home </a>\n    <a class=\"dropdown-item\" routerLink=\"/users\"><i class=\"fas fa-users\"></i> Users </a>\n\n    <div class=\"dropdown-divider mb-3\"></div>\n\n    <div class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Logout </div>\n    <div class=\"dropdown-divider mb-3\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<layout>\n    <h5>404 Page not found</h5>\n</layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pager/pager.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pager/pager.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n    <ul class=\"pagination pagination-sm\">\n\n        <ng-container *ngIf=\"currentPage() > 0\">\n            <li class=\"page-item\" (click)=\"onCellClick(currentPage() - 1)\">\n                <div class=\"page-link\">\n                    <small>&laquo;</small>\n                </div>\n            </li>\n        </ng-container>\n\n        <ng-container *ngIf=\"currentPage() == 0\">\n            <li class=\"page-item\">\n                <div class=\"page-link disabled\">\n                    <small>&laquo;</small>\n                </div>\n            </li>\n        </ng-container>\n\n        <ng-container *ngFor=\"let item of pageArray(); let i = index;\">\n\n            <!-- always show current page cell -->\n            <ng-container *ngIf=\"i == currentPage()\">\n                 <li class=\"page-item active\" (click)=\"onCellClick(i)\">\n                        <div class=\"page-link\">\n                            <small>{{ showRange(i) }}</small>\n                        </div>\n                 </li>\n            </ng-container>\n\n            <!-- for not current page cell -->\n            <ng-container *ngIf=\"i != currentPage()\">\n\n                <!-- always show first page cell -->\n                <ng-container *ngIf=\"i == 0\">\n                     <li class=\"page-item\" (click)=\"onCellClick(i)\">\n                            <div class=\"page-link\">\n                                <small>{{ showRange(i) }}</small>\n                            </div>\n                     </li>\n                </ng-container>\n\n                <!-- always show last page cell -->\n                <ng-container *ngIf=\"i == countPages() - 1\">\n                     <li class=\"page-item\" (click)=\"onCellClick(i)\">\n                            <div class=\"page-link\">\n                                <small>{{ showRange(i) }}</small>\n                            </div>\n                     </li>\n                </ng-container>\n\n                <!-- for not last or first page cell -->\n                <ng-container *ngIf=\"i != 0 && i != countPages() - 1 \">\n                    <!-- subrange lower of current cell -->\n                    <ng-container *ngIf=\"i > (currentPage() - 3) && i < currentPage()\">\n                         <li class=\"page-item\" (click)=\"onCellClick(i)\">\n                                <div class=\"page-link\">\n                                    <small>{{ showRange(i) }}</small>\n                                </div>\n                         </li>\n                    </ng-container>\n\n                    <!-- subrabge upper of cuttern cell -->\n                    <ng-container *ngIf=\"i > currentPage() && i < (currentPage() + 3)\">\n                         <li class=\"page-item\" (click)=\"onCellClick(i)\">\n                                <div class=\"page-link\">\n                                    <small>{{ showRange(i) }}</small>\n                                </div>\n                         </li>\n                    </ng-container>\n\n                    <!-- low bordure page cell -->\n                    <ng-container *ngIf=\"i == (currentPage() - 3)\">\n                         <li class=\"page-item\" (click)=\"onCellClick(i)\">\n                                <div class=\"page-link\">\n                                    <small>...</small>\n                                </div>\n                         </li>\n                    </ng-container>\n\n                    <!-- upper bordure page cell -->\n                   <ng-container *ngIf=\"i == (currentPage() + 3)\">\n                         <li class=\"page-item\" (click)=\"onCellClick(i)\">\n                                <div class=\"page-link\">\n                                    <small>...</small>\n                                </div>\n                         </li>\n                    </ng-container>\n\n                </ng-container> <!-- *ngIf=\"i != 0 && i != countPages()\" -->\n\n            </ng-container> <!-- *ngIf=\"i != currentPage()\" -->\n\n        </ng-container> <!-- *ngFor=\"let item of pageArray(); let i = index;\" -->\n\n        <ng-container *ngIf=\"currentPage() < (countPages() - 1)\">\n            <li class=\"page-item\" (click)=\"onCellClick(currentPage() + 1)\">\n                <div class=\"page-link\">\n                    <small>&raquo;</small>\n                </div>\n            </li>\n        </ng-container>\n\n        <ng-container *ngIf=\"currentPage() == (countPages() - 1)\">\n            <li class=\"page-item disabled\">\n                <div class=\"page-link\">\n                    <small>&raquo;</small>\n                </div>\n            </li>\n        </ng-container>\n\n\n\n\n    </ul>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-create/user-create.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-create/user-create.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\"><i class=\"fas fa-plus fa-lg\"></i></a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"createUser(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Create user</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('username') }}\">Username:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('username') }}\" formControlName=\"username\">\n\n                            <small *ngIf=\"formUsername.invalid && (formUsername.dirty || formUsername.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formUsername.errors.required\">Value is required</span>\n                                <span *ngIf=\"formUsername.errors.minlength\">Value is too short</span>\n                            </small>\n\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('password') }}\">Password:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('password') }}\" formControlName=\"password\">\n\n                            <small *ngIf=\"formPassword.invalid && (formPassword.dirty || formPassword.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formPassword.errors.required\">Value is required</span>\n                                <span *ngIf=\"formPassword.errors.minlength\">Value is too short</span>\n                            </small>\n                        </div>\n\n                        <div class=\"form-group form-check\">\n                            <input id=\"{{ formId('superuser') }}\" class=\"form-check-input\" type=\"checkbox\" formControlName=\"isadmin\" />\n                            <label class=\"form-check-label\" for=\"{{ formId('superuser') }}\"> Admin role </label>\n                        </div>\n\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Create</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-delete/user-delete.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-delete/user-delete.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\"><i class=\"far fa-trash-alt\"></i> Delete </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"deleteUser(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete user [{{ formUsername.value }}]</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n                        <div class=\"form-group form-check\">\n                            <input id=\"{{ formId('confirmation') }}\" class=\"form-check-input\" type=\"checkbox\" formControlName=\"confirmation\" />\n                            <label class=\"form-check-label\" for=\"{{ formId('superuser') }}\"> Confirmation </label>\n                        </div>\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Delete</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-option/user-option.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-option/user-option.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\">\n        <ng-content></ng-content>\n    </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">User [{{ user.username }}] option</h5>\n                    <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                        <span>&times;</span>\n                    </button>\n                </div>\n\n                <div class=\"modal-body\">\n\n                    <div class=\"dropdown-item\">\n                        <user-update [user]=\"user\" (update)=\"onUpdate()\"></user-update>\n                    </div>\n\n                    <div class=\"dropdown-item\">\n                        <user-delete [user]=\"user\" (update)=\"onUpdate()\"></user-delete>\n                    </div>\n\n                </div>\n\n\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-update/user-update.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-update/user-update.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\"><i class=\"far fa-edit\"></i> Update </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"updateUser(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Update user [{{ formUsername.value }}]</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('username') }}\">Username:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('username') }}\" formControlName=\"username\">\n\n                            <small *ngIf=\"formUsername.invalid && (formUsername.dirty || formUsername.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formUsername.errors.required\">Value is required</span>\n                                <span *ngIf=\"formUsername.errors.minlength\">Value is too short</span>\n                            </small>\n\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('password') }}\">Password:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('password') }}\" formControlName=\"password\">\n\n                            <small *ngIf=\"formPassword.invalid && (formPassword.dirty || formPassword.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formPassword.errors.invalidPassword\">Value is too short</span>\n                            </small>\n                        </div>\n\n                        <div class=\"form-group form-check\">\n                            <input id=\"{{ formId('superuser') }}\" class=\"form-check-input\" type=\"checkbox\" formControlName=\"isadmin\" />\n                            <label class=\"form-check-label\" for=\"{{ formId('superuser') }}\"> Admin role </label>\n                        </div>\n\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Update</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<layout>\n\n    <div className=\"container-fluid\">\n        <div className=\"row mb-3\">\n            <div class=\"float-right\">\n                <user-create (update)=\"list()\"></user-create>\n            </div>\n            <h5>\n                <i class=\"fas fa-users\"></i>\n                <span> Users </span>\n                <a (click)=\"list()\"><i class=\"fas fa-sync fa-sm\"></i></a>\n            </h5>\n        </div>\n    </div>\n\n    <!-- Alert box -->\n    <ng-container *ngIf=\"alertMessage\">\n        <div class=\"alert alert-danger\" role=\"alert\" id=\"alert\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissAlert()\">\n                <span>&times;</span>\n            </button>\n            <h5>Alert</h5>\n            {{ alertMessage }}\n        </div>\n    </ng-container>\n\n    <!-- Notice box -->\n    <ng-container *ngIf=\"noticeMessage\">\n        <div class=\"alert alert-success\" role=\"alert\" id=\"notice\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissNotice()\">\n                <span>&times;</span>\n            </button>\n            {{ noticeMessage }}\n        </div>\n    </ng-container>\n\n\n    <form accept-charset=\"UTF-8\" [formGroup]=\"searchForm\">\n        <div class=\"form-row\">\n\n            <div class=\"col-sm-5 my-1\">\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">Users: {{ page.total }}</div>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"user-pattern\" formControlName=\"userPattern\" />\n                </div>\n            </div>\n\n            <div class=\"col-sm-2 my-1 ml-auto float-right d-inline-block\">\n\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <div class=\"input-group-prepend\">\n                        <label class=\"input-group-text\" for=\"page-limit\">Per page</label>\n                    </div>\n                    <select class=\"custom-select\" formControlName=\"pageLimit\" id=\"page-limit\">\n                        <option [ngValue]=\"3\">3</option>\n                        <option [ngValue]=\"5\">5</option>\n                        <option [ngValue]=\"10\">10</option>\n                        <option [ngValue]=\"25\">25</option>\n                        <option [ngValue]=\"50\">50</option>\n                    </select>\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n    <ng-container *ngIf=\"page.users\">\n        <table class=\"table table-striped table-hover table-sm\">\n\n            <thead class=\"thead-light\">\n                <tr>\n                    <th>#</th>\n                    <th>name</th>\n                    <th>mode</th>\n<!--\n                    <th><i class=\"far fa-edit\"></i></th>\n                    <th><i class=\"far fa-trash-alt\"></i></th>\n-->\n                </tr>\n            </thead>\n\n            <tbody>\n                <ng-container *ngFor=\"let item of page.users; let i = index\">\n                    <tr>\n                        <td>{{ i + 1 + page.offset }}</td>\n                        <td><user-option [user]=\"item\"  (update)=\"list()\">{{ item.username  }}</user-option></td>\n                        <td>\n                            <span *ngIf=\"item.isadmin\"><i class=\"fas fa-user-plus\"></i></span>\n                            <span *ngIf=\"!item.isadmin\"><i class=\"fas fa-microchip\"></i></span>\n                        </td>\n<!--\n                        <td><user-update [user]=\"item\" (update)=\"list()\"></user-update></td>\n                        <td><user-delete [user]=\"item\" (update)=\"list()\"></user-delete></td>\n-->\n                    </tr>\n                </ng-container>\n            </tbody>\n\n        </table>\n\n        <pager [limit]=\"page.limit\" [total]=\"page.total\" [offset]=\"page.offset\" (newOffset)=\"setNewOffset($event)\" ></pager>\n\n\n    </ng-container>\n\n</layout>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.routes = _routing_module__WEBPACK_IMPORTED_MODULE_2__["routes"];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'application',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/user-create/user-create.component.ts");
/* harmony import */ var _user_update_user_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-update/user-update.component */ "./src/app/user-update/user-update.component.ts");
/* harmony import */ var _user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-delete/user-delete.component */ "./src/app/user-delete/user-delete.component.ts");
/* harmony import */ var _user_option_user_option_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-option/user-option.component */ "./src/app/user-option/user-option.component.ts");
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pager/pager.component */ "./src/app/pager/pager.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_13__["UserCreateComponent"],
                _user_update_user_update_component__WEBPACK_IMPORTED_MODULE_14__["UserUpdateComponent"],
                _user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_15__["UserDeleteComponent"],
                _user_option_user_option_component__WEBPACK_IMPORTED_MODULE_16__["UserOptionComponent"],
                _pager_pager_component__WEBPACK_IMPORTED_MODULE_17__["PagerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");




var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LayoutComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(['/login']);
    };
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")).default]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



var LoginService = /** @class */ (function () {
    function LoginService() {
        this.loginStatus = false;
        this.cookieName = 'session';
    }
    LoginService.prototype.isLogin = function () {
        var cookie = js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"](this.cookieName);
        if (cookie == null) {
            this.loginStatus = false;
        }
        return this.loginStatus;
    };
    LoginService.prototype.login = function () {
        this.loginStatus = true;
    };
    LoginService.prototype.logout = function () {
        this.loginStatus = false;
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["remove"](this.cookieName);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, userService, loginService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.login = function (event) {
        var _this = this;
        var username = event.value.username;
        var password = event.value.password;
        this.userService.check(username, password).subscribe(function (response) {
            if (response.error == false) {
                _this.error = response.error;
                _this.message = null;
                _this.user = response.result[0];
                _this.loginService.login();
                _this.loginForm.reset();
                _this.router.navigate(["/"]);
            }
        }, function (error) {
            console.log(error);
            _this.error = true;
            _this.message = error.message;
            _this.user = null;
            _this.loginService.logout();
        });
        this.loginForm.reset();
    };
    Object.defineProperty(LoginComponent.prototype, "loginFormUsername", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "loginFormPassword", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ["user1", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ["12345", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        if (this.loginService.isLogin()) {
            this.router.navigate(["/"]);
            return;
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    MenuComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(['/login']);
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")).default]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'not-found',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")).default]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/page.guard.ts":
/*!*******************************!*\
  !*** ./src/app/page.guard.ts ***!
  \*******************************/
/*! exports provided: PageGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageGuard", function() { return PageGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");




var PageGuard = /** @class */ (function () {
    function PageGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    PageGuard.prototype.canActivate = function (next, state) {
        console.log('canActivate:', this.loginService.isLogin());
        //if (this.loginService.isLogin() == true) {
        //    return true
        //}
        //this.router.navigate(['/login'])
        //return false
        return true;
    };
    PageGuard.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PageGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PageGuard);
    return PageGuard;
}());



/***/ }),

/***/ "./src/app/pager/pager.component.scss":
/*!********************************************!*\
  !*** ./src/app/pager/pager.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pager/pager.component.ts":
/*!******************************************!*\
  !*** ./src/app/pager/pager.component.ts ***!
  \******************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.newOffset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PagerComponent.prototype.onCellClick = function (pageNumber) {
        var offset = this.limit * pageNumber;
        this.newOffset.emit(offset);
    };
    PagerComponent.prototype.cellBottom = function (pageNumber) {
        return (this.limit * pageNumber) + 1;
    };
    PagerComponent.prototype.cellTop = function (pageNumber) {
        var top = (this.limit * pageNumber) + this.limit;
        if (top > this.total) {
            top = this.total;
        }
        return top;
    };
    PagerComponent.prototype.showRange = function (i) {
        return String(i + 1);
        //var bottom = this.cellBottom(i)
        //var top = this.cellTop(i)
        //if (bottom == top) {
        //    return String(bottom)
        //}
        //return bottom + "-" + top
    };
    PagerComponent.prototype.pageArray = function () {
        return new Array(this.countPages());
    };
    PagerComponent.prototype.countPages = function () {
        return Math.floor((this.total / this.limit) - 0.000001) + 1;
    };
    PagerComponent.prototype.currentPage = function () {
        return Math.floor(this.offset / this.limit - 0.000001) + 1;
    };
    PagerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PagerComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PagerComponent.prototype, "limit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PagerComponent.prototype, "offset", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PagerComponent.prototype, "newOffset", void 0);
    PagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pager',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pager/pager.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pager.component.scss */ "./src/app/pager/pager.component.scss")).default]
        })
    ], PagerComponent);
    return PagerComponent;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: routes, RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _page_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.guard */ "./src/app/page.guard.ts");








var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], data: { name: "Login" } },
    { path: "users", component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_7__["PageGuard"]], data: { name: "Users" } },
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_7__["PageGuard"]], data: { name: "Home" } },
    { path: "notfound", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_7__["PageGuard"]] },
    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_7__["PageGuard"]] },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/user-create/user-create.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user-create/user-create.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-create/user-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-create/user-create.component.ts ***!
  \******************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alertMessage = "";
        this.minUsernameLength = 5;
        this.minPasswordLength = 5;
    }
    UserCreateComponent.prototype.onCreateUser = function () {
        this.update.emit(null);
    };
    UserCreateComponent.prototype.createUser = function (event) {
        var _this = this;
        var payload = {
            username: event.value.username,
            password: event.value.password,
            isadmin: event.value.isadmin
        };
        this.userService.create(payload).subscribe(function (response) {
            if (response.error == false) {
                _this.dismissForm();
                _this.onCreateUser();
                return;
            }
            if (response.message != null) {
                _this.showAlert("Backend error: " + response.message);
            }
            else {
                _this.showAlert("Backend error.");
            }
        }, function (error) {
            _this.showAlert("Connection error: " + error.message);
        });
    };
    UserCreateComponent.prototype.modalId = function () {
        return "user-create-modal";
    };
    UserCreateComponent.prototype.formId = function (base) {
        return "user-create-form-" + base;
    };
    UserCreateComponent.prototype.showForm = function () {
        this.alertMessage = "";
        this.form.reset();
        //this.form.patchValue({
        //    username: "",
        //    password: "",
        //    isadmin: false
        //})
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    UserCreateComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
        this.form.reset();
    };
    Object.defineProperty(UserCreateComponent.prototype, "formUsername", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "formPassword", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    UserCreateComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    UserCreateComponent.prototype.dismissAlert = function () {
        this.alertMessage = "";
    };
    UserCreateComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength)]],
            isadmin: [false, []]
        });
    };
    UserCreateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UserCreateComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], UserCreateComponent.prototype, "update", void 0);
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-create/user-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-create.component.scss */ "./src/app/user-create/user-create.component.scss")).default]
        })
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/user-delete/user-delete.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user-delete/user-delete.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGVsZXRlL3VzZXItZGVsZXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-delete/user-delete.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-delete/user-delete.component.ts ***!
  \******************************************************/
/*! exports provided: UserDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeleteComponent", function() { return UserDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var UserDeleteComponent = /** @class */ (function () {
    function UserDeleteComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alertMessage = "";
    }
    UserDeleteComponent.prototype.onDeleteUser = function () {
        this.update.emit(null);
    };
    UserDeleteComponent.prototype.deleteUser = function (event) {
        var _this = this;
        var payload = {
            id: event.value.id,
        };
        this.userService.deletex(payload).subscribe(function (response) {
            if (response.error == false) {
                _this.dismissForm();
                _this.onDeleteUser();
                return;
            }
            if (response.message != null) {
                _this.showAlert("Backend error: " + response.message);
            }
            else {
                _this.showAlert("Backend error.");
            }
        }, function (error) {
            _this.showAlert("Connection error: " + error.message);
        });
    };
    UserDeleteComponent.prototype.modalId = function () {
        return "user-delete-modal-" + this.user.username;
    };
    UserDeleteComponent.prototype.formId = function (base) {
        return "user-delete-form-" + base + "-" + this.user.username;
    };
    UserDeleteComponent.prototype.showForm = function () {
        this.alertMessage = "";
        this.form.reset();
        this.form.patchValue({
            id: this.user.id,
            username: this.user.username,
            confirmation: false
        });
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    UserDeleteComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
        this.form.reset();
    };
    UserDeleteComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    UserDeleteComponent.prototype.dismissAlert = function () {
        this.alertMessage = "";
    };
    Object.defineProperty(UserDeleteComponent.prototype, "formUsername", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    UserDeleteComponent.prototype.confirmationValidator = function () {
        return function (control) {
            var value = control.value;
            if (value == null) {
                return { invalidConfirmation: "Invalid confirmation" };
            }
            if (value == false) {
                return { invalidConfirmation: "Invalid confirmation" };
            }
            return null;
        };
    };
    UserDeleteComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            username: ["", []],
            confirmation: [false, [this.confirmationValidator()]]
        });
    };
    UserDeleteComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UserDeleteComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], UserDeleteComponent.prototype, "update", void 0);
    UserDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-delete',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-delete/user-delete.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-delete.component.scss */ "./src/app/user-delete/user-delete.component.scss")).default]
        })
    ], UserDeleteComponent);
    return UserDeleteComponent;
}());



/***/ }),

/***/ "./src/app/user-option/user-option.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user-option/user-option.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItb3B0aW9uL3VzZXItb3B0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-option/user-option.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-option/user-option.component.ts ***!
  \******************************************************/
/*! exports provided: UserOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOptionComponent", function() { return UserOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserOptionComponent = /** @class */ (function () {
    function UserOptionComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserOptionComponent.prototype.onUpdate = function () {
        console.log("event");
        this.update.emit(null);
        this.dismissForm();
    };
    UserOptionComponent.prototype.modalId = function () {
        return "user-option-modal-" + this.user.username;
    };
    UserOptionComponent.prototype.showForm = function () {
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    UserOptionComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
    };
    UserOptionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UserOptionComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], UserOptionComponent.prototype, "update", void 0);
    UserOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-option',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-option/user-option.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-option.component.scss */ "./src/app/user-option/user-option.component.scss")).default]
        })
    ], UserOptionComponent);
    return UserOptionComponent;
}());



/***/ }),

/***/ "./src/app/user-update/user-update.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user-update/user-update.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItdXBkYXRlL3VzZXItdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-update/user-update.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-update/user-update.component.ts ***!
  \******************************************************/
/*! exports provided: UserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateComponent", function() { return UserUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var UserUpdateComponent = /** @class */ (function () {
    function UserUpdateComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alertMessage = "";
        this.minUsernameLength = 5;
        this.minPasswordLength = 5;
    }
    UserUpdateComponent.prototype.onUpdateUser = function () {
        this.update.emit(null);
    };
    UserUpdateComponent.prototype.updateUser = function (event) {
        var _this = this;
        var payload = {
            id: event.value.id,
            username: event.value.username,
            password: event.value.password,
            isadmin: event.value.isadmin
        };
        this.userService.update(payload).subscribe(function (response) {
            if (response.error == false) {
                _this.dismissForm();
                _this.onUpdateUser();
                return;
            }
            if (response.message != null) {
                _this.showAlert("Backend error: " + response.message);
            }
            else {
                _this.showAlert("Backend error.");
            }
        }, function (error) {
            _this.showAlert("Connection error: " + error.message);
        });
    };
    UserUpdateComponent.prototype.modalId = function () {
        return "user-update-modal-" + this.user.username;
    };
    UserUpdateComponent.prototype.formId = function (base) {
        return "user-update-form-" + base + "-" + this.user.username;
    };
    UserUpdateComponent.prototype.showForm = function () {
        this.alertMessage = "";
        this.form.reset();
        this.form.patchValue({
            id: this.user.id,
            username: this.user.username,
            password: "",
            isadmin: this.user.isadmin
        });
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    UserUpdateComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
        this.form.reset();
    };
    Object.defineProperty(UserUpdateComponent.prototype, "formUsername", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserUpdateComponent.prototype, "formPassword", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    UserUpdateComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    UserUpdateComponent.prototype.dismissAlert = function () {
        this.alertMessage = "";
    };
    UserUpdateComponent.prototype.passwordValidator = function () {
        var _this = this;
        return function (control) {
            var value = control.value;
            if (value == null) {
                return null;
            }
            if (value.length > 0 && value.length < _this.minPasswordLength) {
                return { invalidPassword: "Password too short" };
            }
            return null;
        };
    };
    UserUpdateComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength)]],
            password: ["", [this.passwordValidator()]],
            isadmin: [false, []]
        });
    };
    UserUpdateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UserUpdateComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], UserUpdateComponent.prototype, "update", void 0);
    UserUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-update',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-update/user-update.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-update.component.scss */ "./src/app/user-update/user-update.component.scss")).default]
        })
    ], UserUpdateComponent);
    return UserUpdateComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.list = function (page) {
        return this.httpClient.post("/api/v1/user/list", {
            "limit": page.limit,
            "offset": page.offset,
            "user_pattern": page.user_pattern
        });
    };
    UserService.prototype.check = function (username, password) {
        return this.httpClient.post("/api/v1/user/login", {
            "username": username,
            "password": password
        });
    };
    UserService.prototype.create = function (user) {
        return this.httpClient.post("/api/v1/user/create", {
            "username": user.username,
            "password": user.password,
            "isadmin": user.isadmin
        });
    };
    UserService.prototype.update = function (user) {
        return this.httpClient.post("/api/v1/user/update", {
            "id": user.id,
            "username": user.username,
            "password": user.password,
            "isadmin": user.isadmin
        });
    };
    UserService.prototype.deletex = function (user) {
        return this.httpClient.post("/api/v1/user/delete", {
            "id": user.id
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var UsersComponent = /** @class */ (function () {
    function UsersComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.noticeMessage = null;
        this.alertMessage = null;
        this.page = {
            total: 0,
            limit: 3,
            offset: 0,
            user_pattern: "",
            users: null
        };
        this.minUsernameLength = 5;
        this.minPasswordLength = 5;
        this.currentPage = 0;
    }
    UsersComponent.prototype.setNewOffset = function (newOffset) {
        this.page.offset = newOffset;
        this.list();
    };
    UsersComponent.prototype.list = function () {
        var _this = this;
        this.userService.list(this.page).subscribe(function (response) {
            if (response.error == false) {
                _this.page = response.result;
                _this.paginate();
            }
        }, function (error) {
            console.log(error);
            _this.users = null;
        });
    };
    UsersComponent.prototype.createUser = function (event) {
        var _this = this;
        var payload = {
            username: event.value.username,
            password: event.value.password
        };
        this.dismissCreateForm();
        this.userService.create(payload).subscribe(function (response) {
            if (response.error == true) {
                _this.showAlert("Operation error");
                return;
            }
            _this.showNotice("User created");
            _this.list();
        }, function (error) {
            _this.showAlert("Connection error");
            console.log(error);
        });
    };
    UsersComponent.prototype.updateUser = function (event) {
        var _this = this;
        var payload = {
            id: event.value.id,
            username: event.value.username,
            password: event.value.password
        };
        this.dismissUpdateForm();
        this.userService.update(payload).subscribe(function (response) {
            if (response.error == true) {
                _this.showAlert("Operation error");
                return;
            }
            _this.showNotice("User updated");
            _this.list();
        }, function (error) {
            _this.showAlert("Connection error");
            console.log(error);
        });
    };
    UsersComponent.prototype.deleteUser = function (event) {
        var _this = this;
        console.log(event);
        var payload = {
            id: event.value.id,
            username: event.value.username,
            password: event.value.password
        };
        console.log(payload);
        this.dismissDeleteForm();
        this.userService.deletex(payload).subscribe(function (response) {
            if (response.error == true) {
                _this.showAlert("Operation error");
                return;
            }
            _this.showNotice("User deleted");
            _this.list();
        }, function (error) {
            _this.showAlert("Connection error");
            console.log(error);
        });
    };
    /* Create form */
    UsersComponent.prototype.showCreateForm = function () {
        $("#create-user").modal('show');
    };
    UsersComponent.prototype.dismissCreateForm = function () {
        $("#create-user").modal('hide');
        this.createForm.reset();
    };
    Object.defineProperty(UsersComponent.prototype, "createFormUsername", {
        get: function () {
            return this.createForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "createFormPassword", {
        get: function () {
            return this.createForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    /* Update form */
    UsersComponent.prototype.showUpdateForm = function (item) {
        console.log(item);
        this.updateForm.reset();
        this.updateForm.patchValue({
            id: item.id,
            username: item.username,
            password: null
        });
        $("#update-user").modal('show');
    };
    UsersComponent.prototype.dismissUpdateForm = function () {
        $("#update-user").modal('hide');
        this.updateForm.reset();
    };
    Object.defineProperty(UsersComponent.prototype, "updateFormUsername", {
        get: function () {
            return this.updateForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "updateFormPassword", {
        get: function () {
            return this.updateForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    /* Delete form */
    UsersComponent.prototype.showDeleteForm = function (item) {
        this.deleteForm.patchValue({
            id: item.id,
            username: item.username,
            password: null,
            confirmation: false
        });
        $("#delete-user").modal('show');
    };
    Object.defineProperty(UsersComponent.prototype, "deleteFormUsername", {
        get: function () {
            return this.deleteForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "deleteFormAcceptTerm", {
        get: function () {
            return this.deleteForm.get('acceptTerm');
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent.prototype.dismissDeleteForm = function () {
        $("#delete-user").modal('hide');
        this.deleteForm.reset();
    };
    /* Alerts */
    UsersComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    UsersComponent.prototype.dismissAlert = function () {
        this.alertMessage = null;
    };
    /* Notices */
    UsersComponent.prototype.showNotice = function (message) {
        this.noticeMessage = message;
    };
    UsersComponent.prototype.dismissNotice = function () {
        this.noticeMessage = null;
    };
    /* Pagination */
    UsersComponent.prototype.pageCount = function (total, limit) {
        //console.log(total, limit)
        var pagesRaw = total / limit;
        var pagesLow = Math.floor(pagesRaw);
        var pages = 0;
        if (pagesRaw == pagesLow) {
            pages = pagesLow;
        }
        else {
            pages = pagesLow + 1;
        }
        return pages;
    };
    UsersComponent.prototype.resolvePageNumber = function (offset, limit, maxPage) {
        var p = 0;
        for (p = 0; p < maxPage; p++) {
            if (offset >= p * limit && offset < (p + 1) * limit) {
                return p;
            }
        }
        return 0;
    };
    UsersComponent.prototype.changePage = function (offset) {
        this.page.offset = offset;
        this.list();
    };
    UsersComponent.prototype.paginate = function () {
        var paginatorItems = [];
        var pageCount = this.pageCount(this.page.total, this.page.limit);
        if (pageCount == 1) {
            this.page.offset = 0;
        }
        this.currentPage = this.resolvePageNumber(this.page.offset, this.page.limit, pageCount);
        var i = 0;
        for (i = 0; i < pageCount; i++) {
            if (i > this.currentPage - 4 && i < this.currentPage) {
                var item = {
                    visibleNumber: i + 1,
                    offset: i * this.page.limit,
                    active: false
                };
                paginatorItems.push(item);
            }
            if (i == this.currentPage) {
                var item = {
                    visibleNumber: i + 1,
                    offset: i * this.page.limit,
                    active: true
                };
                paginatorItems.push(item);
            }
            if (i > this.currentPage && i < this.currentPage + 4) {
                var item = {
                    visibleNumber: i + 1,
                    offset: i * this.page.limit,
                    active: false
                };
                paginatorItems.push(item);
            }
        }
        this.paginatorItems = paginatorItems;
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm = this.formBuilder.group({
            id: null,
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPasswordLength)]]
        });
        this.updateForm = this.formBuilder.group({
            id: null,
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPasswordLength)]]
        });
        this.deleteForm = this.formBuilder.group({
            id: null,
            username: [""],
            password: [""],
            confirmation: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
        });
        this.searchForm = this.formBuilder.group({
            userPattern: [""],
            pageLimit: [""],
        });
        this.list();
        this.searchForm.get('userPattern').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            _this.page.user_pattern = value;
            _this.list();
        });
        this.searchForm.get('pageLimit').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            console.log(value);
            _this.page.limit = value;
            _this.list();
        });
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'users',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")).default]
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ziggi/m2master/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map