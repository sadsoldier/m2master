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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent-create/agent-create.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent-create/agent-create.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\"><i class=\"fas fa-plus fa-lg\"></i></a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"createAgent(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Create agent</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('hostname') }}\">Hostname:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('hostname') }}\" formControlName=\"hostname\">\n\n                            <small *ngIf=\"formHostname.invalid && (formHostname.dirty || formHostname.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formHostname.errors.required\">Value is required</span>\n                                <span *ngIf=\"formHostname.errors.minlength\">Value is too short</span>\n                            </small>\n\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('username') }}\">Username:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('username') }}\" formControlName=\"username\">\n\n                            <small *ngIf=\"formUsername.invalid && (formUsername.dirty || formUsername.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formUsername.errors.required\">Value is required</span>\n                                <span *ngIf=\"formUsername.errors.minlength\">Value is too short</span>\n                            </small>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('password') }}\">Password:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('password') }}\" formControlName=\"password\">\n\n                            <small *ngIf=\"formPassword.invalid && (formPassword.dirty || formPassword.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formPassword.errors.required\">Value is required</span>\n                                <span *ngIf=\"formPassword.errors.minlength\">Value is too short</span>\n                            </small>\n                        </div>\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Create</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent-delete/agent-delete.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent-delete/agent-delete.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\" class=\"nav-link\"><i class=\"far fa-trash-alt\"></i> Delete </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"deleteAgent(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete agent [{{ formHostname.value }}]</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n                        <div class=\"form-group form-check\">\n                            <input id=\"{{ formId('confirmation') }}\" class=\"form-check-input\" type=\"checkbox\" formControlName=\"confirmation\" />\n                            <label class=\"form-check-label\" for=\"{{ formId('confirmation') }}\"> Confirmation </label>\n                        </div>\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Delete</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent-option/agent-option.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent-option/agent-option.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\">\n        <ng-content></ng-content>\n    </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Agent [{{ agent.hostname }}] option</h5>\n                    <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                        <span>&times;</span>\n                    </button>\n                </div>\n\n                <div class=\"modal-body\">\n\n                    <div class=\"dropdown-item\">\n                        <agent-update [agent]=\"agent\" (update)=\"onUpdate()\"></agent-update>\n                    </div>\n\n                    <div class=\"dropdown-item\">\n                        <agent-delete [agent]=\"agent\" (update)=\"onUpdate()\"></agent-delete>\n                    </div>\n\n                </div>\n\n\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent-update/agent-update.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent-update/agent-update.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\" class=\"nav-link\"><i class=\"far fa-edit\"></i> Update </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"updateAgent(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Update agent [{{ formHostname.value }}]</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('hostname') }}\">Hostname:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('hostname') }}\" formControlName=\"hostname\">\n\n                            <small *ngIf=\"formHostname.invalid && (formHostname.dirty || formHostname.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formHostname.errors.required\">Value is required</span>\n                                <span *ngIf=\"formHostname.errors.minlength\">Value is too short</span>\n                            </small>\n\n                        </div>\n\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('username') }}\">Username:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('username') }}\" formControlName=\"username\">\n\n                            <small *ngIf=\"formUsername.invalid && (formUsername.dirty || formUsername.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formUsername.errors.required\">Value is required</span>\n                                <span *ngIf=\"formUsername.errors.minlength\">Value is too short</span>\n                            </small>\n\n                        </div>\n\n\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('password') }}\">Password:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('password') }}\" formControlName=\"password\">\n\n                            <small *ngIf=\"formPassword.invalid && (formPassword.dirty || formPassword.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formPassword.errors.invalidPassword\">Value is too short</span>\n                            </small>\n                        </div>\n\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Update</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agents/agents.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agents/agents.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<layout>\n\n    <div className=\"container-fluid\">\n        <div className=\"row mb-3\">\n            <div class=\"float-right\">\n                <agent-create (update)=\"list()\"></agent-create>\n            </div>\n            <h5>\n                <i class=\"fas fa-user-secret\"></i>\n                <span> Agents </span>\n                <a (click)=\"list()\"><i class=\"fas fa-sync fa-sm\"></i></a>\n            </h5>\n        </div>\n    </div>\n\n    <!-- Alert box -->\n    <ng-container *ngIf=\"alertMessage\">\n        <div class=\"alert alert-danger\" role=\"alert\" id=\"alert\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissAlert()\">\n                <span>&times;</span>\n            </button>\n            {{ alertMessage }}\n        </div>\n    </ng-container>\n\n    <!-- Notice box -->\n    <ng-container *ngIf=\"noticeMessage\">\n        <div class=\"alert alert-success\" role=\"alert\" id=\"notice\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissNotice()\">\n                <span>&times;</span>\n            </button>\n            {{ noticeMessage }}\n        </div>\n    </ng-container>\n\n    <form accept-charset=\"UTF-8\" [formGroup]=\"searchForm\">\n        <div class=\"form-row\">\n\n            <div class=\"col-6 my-1\">\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">{{ page.total }}</div>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"hostname-pattern\" formControlName=\"hostnamePattern\" />\n                </div>\n            </div>\n\n            <div class=\"col-2 ml-auto\">\n\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <select class=\"custom-select\" formControlName=\"pageLimit\" id=\"page-limit\">\n                        <option [ngValue]=\"3\">3</option>\n                        <option [ngValue]=\"5\">5</option>\n                        <option [ngValue]=\"10\">10</option>\n                        <option [ngValue]=\"25\">25</option>\n                        <option [ngValue]=\"50\">50</option>\n                    </select>\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n    <ng-container *ngIf=\"page.agents\">\n        <table class=\"table table-striped table-hover table-sm\">\n\n            <thead class=\"thead-light\">\n                <tr>\n                    <th>#</th>\n                    <th>hostname</th>\n                    <th>uri</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <ng-container *ngFor=\"let item of page.agents; let i = index\">\n                    <tr>\n                        <td>{{ i + 1 + page.offset }}</td>\n                        <td>\n                            <agent-option [agent]=\"item\"  (update)=\"list()\">\n                                {{ item.hostname }}\n                            </agent-option>\n                        </td>\n                        <td>\n                                {{ item.scheme + \"://\" + item.hostname + \":\" + item.port }}\n                        </td>\n                    </tr>\n                </ng-container>\n            </tbody>\n\n        </table>\n\n        <pager [limit]=\"page.limit\" [total]=\"page.total\" [offset]=\"page.offset\" (newOffset)=\"setNewOffset($event)\" ></pager>\n\n    </ng-container>\n\n</layout>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-2\">\n    <div class=\"dropdown-divider\"></div>\n    <div class=\"dropdown-item active\"><i class=\"fas fa-hammer\"></i> Menu </div>\n\n    <a class=\"dropdown-item\" routerLink=\"/\"><i class=\"fas fa-home\"></i> Home </a>\n    <a class=\"dropdown-item\" routerLink=\"/agents\"><i class=\"fas fa-user-secret\"></i> Agents </a>\n    <a class=\"dropdown-item\" routerLink=\"/stores\"><i class=\"fas fa-archive\"></i> Stores </a>\n\n    <a class=\"dropdown-item\" routerLink=\"/schedules\"><i class=\"fas fa-calendar-alt\"></i> Schedules </a>\n\n\n    <a class=\"dropdown-item\" routerLink=\"/users\"><i class=\"fas fa-users\"></i> Users </a>\n\n    <div class=\"dropdown-divider mb-3\"></div>\n\n    <div class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Logout </div>\n    <div class=\"dropdown-divider mb-3\"></div>\n</div>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-create/schedule-create.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-create/schedule-create.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>schedule-create works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-delete/schedule-delete.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-delete/schedule-delete.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>schedule-delete works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-option/schedule-option.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-option/schedule-option.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>schedule-option works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-update/schedule-update.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-update/schedule-update.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>schedule-update works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedules/schedules.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedules/schedules.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<layout>\n\n    <div className=\"container-fluid\">\n        <div className=\"row mb-3\">\n            <div class=\"float-right\">\n                +\n            </div>\n            <h5>\n                <i class=\"fas fa-user-secret\"></i>\n                <span> Schedules </span>\n                <a (click)=\"list()\"><i class=\"fas fa-sync fa-sm\"></i></a>\n            </h5>\n        </div>\n    </div>\n\n    <!-- Alert box -->\n    <ng-container *ngIf=\"alertMessage\">\n        <div class=\"alert alert-danger\" role=\"alert\" id=\"alert\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissAlert()\">\n                <span>&times;</span>\n            </button>\n            {{ alertMessage }}\n        </div>\n    </ng-container>\n\n    <!-- Notice box -->\n    <ng-container *ngIf=\"noticeMessage\">\n        <div class=\"alert alert-success\" role=\"alert\" id=\"notice\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissNotice()\">\n                <span>&times;</span>\n            </button>\n            {{ noticeMessage }}\n        </div>\n    </ng-container>\n\n    <form accept-charset=\"UTF-8\" [formGroup]=\"searchForm\">\n        <div class=\"form-row\">\n\n            <div class=\"col-6 my-1\">\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">{{ page.total }}</div>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"hostname-pattern\" formControlName=\"hostnamePattern\" />\n                </div>\n            </div>\n\n            <div class=\"col-2 ml-auto\">\n\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <select class=\"custom-select\" formControlName=\"pageLimit\" id=\"page-limit\">\n                        <option [ngValue]=\"3\">3</option>\n                        <option [ngValue]=\"5\">5</option>\n                        <option [ngValue]=\"10\">10</option>\n                        <option [ngValue]=\"25\">25</option>\n                        <option [ngValue]=\"50\">50</option>\n                    </select>\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n    <ng-container *ngIf=\"page.schedules\">\n        <table class=\"table table-striped table-hover table-sm\">\n\n            <thead class=\"thead-light\">\n                <tr>\n                    <th>#</th>\n                    <th>hostname</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <ng-container *ngFor=\"let item of page.schedules; let i = index\">\n                    <tr>\n                        <td>{{ i + 1 + page.offset }}</td>\n                        <td>\n                            {{ item.agentId }}\n                        </td>\n                    </tr>\n                </ng-container>\n            </tbody>\n\n        </table>\n\n        <pager [limit]=\"page.limit\" [total]=\"page.total\" [offset]=\"page.offset\" (newOffset)=\"setNewOffset($event)\" ></pager>\n\n    </ng-container>\n\n</layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/store-create/store-create.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store-create/store-create.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\"><i class=\"fas fa-plus fa-lg\"></i></a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"createStore(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Create store</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('storeType') }}\">Type:</label>\n                            <select class=\"form-control\" formControlName=\"storeType\" id=\"{{ formId('storeType') }}\">\n                                <option value=\"s2\">s2</option>\n                                <option value=\"sftp\">sftp</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('hostname') }}\">Hostname:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('hostname') }}\" formControlName=\"hostname\">\n\n                            <small *ngIf=\"formHostname.invalid && (formHostname.dirty || formHostname.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formHostname.errors.required\">Value is required</span>\n                                <span *ngIf=\"formHostname.errors.minlength\">Value is too short</span>\n                            </small>\n\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('port') }}\">Port:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('port') }}\" formControlName=\"port\">\n\n                            <small *ngIf=\"formPort.invalid && (formPort.dirty || formPort.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formPort.errors.required\">Value is required</span>\n                                <span *ngIf=\"formPort.errors.min\">Value must be > 0</span>\n                                <span *ngIf=\"formPort.errors.max\">Value must be less 65536</span>\n                            </small>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('username') }}\">Username:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('username') }}\" formControlName=\"username\">\n\n                            <small *ngIf=\"formUsername.invalid && (formUsername.dirty || formUsername.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formUsername.errors.required\">Value is required</span>\n                                <span *ngIf=\"formUsername.errors.minlength\">Value is too short</span>\n                            </small>\n\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('password') }}\">Password:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('password') }}\" formControlName=\"password\">\n\n                            <small *ngIf=\"formPassword.invalid && (formPassword.dirty || formPassword.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formPassword.errors.required\">Value is required</span>\n                                <span *ngIf=\"formPassword.errors.minlength\">Value is too short</span>\n                            </small>\n                        </div>\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Create</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/store-delete/store-delete.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store-delete/store-delete.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\"><i class=\"far fa-trash-alt\"></i> Delete </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"deleteStore(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete store [{{ formHostname.value }}]</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n                        <div class=\"form-group form-check\">\n                            <input id=\"{{ formId('confirmation') }}\" class=\"form-check-input\" type=\"checkbox\" formControlName=\"confirmation\" />\n                            <label class=\"form-check-label\" for=\"{{ formId('confirmation') }}\"> Confirmation </label>\n                        </div>\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Delete</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/store-option/store-option.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store-option/store-option.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\">\n        <ng-content></ng-content>\n    </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Store [{{ store.hostname }}] option</h5>\n                    <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                        <span>&times;</span>\n                    </button>\n                </div>\n\n                <div class=\"modal-body\">\n\n                    <div class=\"dropdown-item\">\n                        <store-update [store]=\"store\" (update)=\"onUpdate()\"></store-update>\n                    </div>\n\n                    <div class=\"dropdown-item\">\n                        <store-delete [store]=\"store\" (update)=\"onUpdate()\"></store-delete>\n                    </div>\n\n                </div>\n\n\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/store-update/store-update.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store-update/store-update.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\"><i class=\"far fa-edit\"></i> Update </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"updateStore(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Update store [{{ formHostname.value }}]</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('storeType') }}\">Type:</label>\n                            <select class=\"form-control\" formControlName=\"storeType\" id=\"{{ formId('storeType') }}\">\n                                <option value=\"s2\">s2</option>\n                                <option value=\"sftp\">sftp</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('hostname') }}\">Hostname:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('hostname') }}\" formControlName=\"hostname\">\n\n                            <small *ngIf=\"formHostname.invalid && (formHostname.dirty || formHostname.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formHostname.errors.required\">Value is required</span>\n                                <span *ngIf=\"formHostname.errors.minlength\">Value is too short</span>\n                            </small>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('port') }}\">Port:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('port') }}\" formControlName=\"port\">\n\n                            <small *ngIf=\"formPort.invalid && (formPort.dirty || formPort.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formPort.errors.required\">Value is required</span>\n                                <span *ngIf=\"formPort.errors.min\">Value must be > 0</span>\n                                <span *ngIf=\"formPort.errors.max\">Value must be less 65536</span>\n                            </small>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('username') }}\">Username:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('username') }}\" formControlName=\"username\">\n\n                            <small *ngIf=\"formUsername.invalid && (formUsername.dirty || formUsername.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formUsername.errors.required\">Value is required</span>\n                                <span *ngIf=\"formUsername.errors.minlength\">Value is too short</span>\n                            </small>\n\n                        </div>\n\n\n\n                        <div class=\"form-group\">\n                            <label for=\"{{ formId('password') }}\">Password:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"{{ formId('password') }}\" formControlName=\"password\">\n\n                            <small *ngIf=\"formPassword.invalid && (formPassword.dirty || formPassword.touched)\" class=\"form-text text-muted\">\n                                <span *ngIf=\"formPassword.errors.invalidPassword\">Value is too short</span>\n                            </small>\n                        </div>\n\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Update</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stores/stores.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stores/stores.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<layout>\n\n    <div className=\"container-fluid\">\n        <div className=\"row mb-3\">\n            <div class=\"float-right\">\n                <store-create (update)=\"list()\"></store-create>\n            </div>\n            <h5>\n                <i class=\"fas fa-archive\"></i>\n                <span> Stores </span>\n                <a (click)=\"list()\"><i class=\"fas fa-sync fa-sm\"></i></a>\n            </h5>\n        </div>\n    </div>\n\n    <!-- Alert box -->\n    <ng-container *ngIf=\"alertMessage\">\n        <div class=\"alert alert-danger\" role=\"alert\" id=\"alert\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissAlert()\">\n                <span>&times;</span>\n            </button>\n            {{ alertMessage }}\n        </div>\n    </ng-container>\n\n    <!-- Notice box -->\n    <ng-container *ngIf=\"noticeMessage\">\n        <div class=\"alert alert-success\" role=\"alert\" id=\"notice\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissNotice()\">\n                <span>&times;</span>\n            </button>\n            {{ noticeMessage }}\n        </div>\n    </ng-container>\n\n    <form accept-charset=\"UTF-8\" [formGroup]=\"searchForm\">\n        <div class=\"form-row\">\n\n            <div class=\"col-6 my-1\">\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">{{ page.total }}</div>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"hostname-pattern\" formControlName=\"hostnamePattern\" />\n                </div>\n            </div>\n\n            <div class=\"col-2 ml-auto\">\n\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <select class=\"custom-select\" formControlName=\"pageLimit\" id=\"page-limit\">\n                        <option [ngValue]=\"3\">3</option>\n                        <option [ngValue]=\"5\">5</option>\n                        <option [ngValue]=\"10\">10</option>\n                        <option [ngValue]=\"25\">25</option>\n                        <option [ngValue]=\"50\">50</option>\n                    </select>\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n    <ng-container *ngIf=\"page.stores\">\n        <table class=\"table table-striped table-hover table-sm\">\n\n            <thead class=\"thead-light\">\n                <tr>\n                    <th>#</th>\n                    <th>hostname</th>\n                    <th>type</th>\n                    <th>uri</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <ng-container *ngFor=\"let item of page.stores; let i = index\">\n                    <tr>\n                        <td>{{ i + 1 + page.offset }}</td>\n                        <td>\n                            <store-option [store]=\"item\"  (update)=\"list()\">\n                                {{ item.hostname }}\n                            </store-option>\n                        </td>\n                        <td>{{ item.storeType }}</td>\n                        <td>\n                                {{ item.scheme + \"://\" + item.hostname + \":\" + item.port }}\n                        </td>\n                    </tr>\n                </ng-container>\n            </tbody>\n\n        </table>\n\n        <pager [limit]=\"page.limit\" [total]=\"page.total\" [offset]=\"page.offset\" (newOffset)=\"setNewOffset($event)\" ></pager>\n\n    </ng-container>\n\n</layout>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n\n    <a (click)=\"showForm()\"><i class=\"far fa-trash-alt\"></i> Delete </a>\n\n    <div class=\"modal fade\" id=\"{{ modalId() }}\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n\n            <div class=\"modal-content\">\n\n                <form accept-charset=\"UTF-8\" [formGroup]=\"form\" (ngSubmit)=\"deleteUser(form)\">\n\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete user [{{ formUsername.value }}]</h5>\n                        <button type=\"button\" class=\"close\" (click)=\"dismissForm()\">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n\n                    <div class=\"modal-body\">\n\n                        <div class=\"form-group form-check\">\n                            <input id=\"{{ formId('confirmation') }}\" class=\"form-check-input\" type=\"checkbox\" formControlName=\"confirmation\" />\n                            <label class=\"form-check-label\" for=\"{{ formId('confirmation') }}\"> Confirmation </label>\n                        </div>\n\n                    </div>\n\n                    <div *ngIf=\"this.alertMessage\" class=\"alert alert-warning border mx-4\" role=\"alert\">\n                        <div class=\"text-center\">{{ this.alertMessage }}</div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"dismissForm()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!form.valid\">Delete</button>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<layout>\n\n    <div className=\"container-fluid\">\n        <div className=\"row mb-3\">\n            <div class=\"float-right\">\n                <user-create (update)=\"list()\"></user-create>\n            </div>\n            <h5>\n                <i class=\"fas fa-users\"></i>\n                <span> Users </span>\n                <a (click)=\"list()\"><i class=\"fas fa-sync fa-sm\"></i></a>\n            </h5>\n        </div>\n    </div>\n\n    <!-- Alert box -->\n    <ng-container *ngIf=\"alertMessage\">\n        <div class=\"alert alert-danger\" role=\"alert\" id=\"alert\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissAlert()\">\n                <span>&times;</span>\n            </button>\n            {{ alertMessage }}\n        </div>\n    </ng-container>\n\n    <!-- Notice box -->\n    <ng-container *ngIf=\"noticeMessage\">\n        <div class=\"alert alert-success\" role=\"alert\" id=\"notice\">\n            <button type=\"button\" class=\"close\" (click)=\"dismissNotice()\">\n                <span>&times;</span>\n            </button>\n            {{ noticeMessage }}\n        </div>\n    </ng-container>\n\n    <form accept-charset=\"UTF-8\" [formGroup]=\"searchForm\">\n        <div class=\"form-row\">\n\n            <div class=\"col-6 my-1\">\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">{{ page.total }}</div>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"user-pattern\" formControlName=\"userPattern\" />\n                </div>\n            </div>\n\n            <div class=\"col-2 ml-auto\">\n\n                <div class=\"input-group input-group-sm flex-nowrap\">\n                    <select class=\"custom-select\" formControlName=\"pageLimit\" id=\"page-limit\">\n                        <option [ngValue]=\"3\">3</option>\n                        <option [ngValue]=\"5\">5</option>\n                        <option [ngValue]=\"10\">10</option>\n                        <option [ngValue]=\"25\">25</option>\n                        <option [ngValue]=\"50\">50</option>\n                    </select>\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n    <ng-container *ngIf=\"page.users\">\n        <table class=\"table table-striped table-hover table-sm\">\n\n            <thead class=\"thead-light\">\n                <tr>\n                    <th>#</th>\n                    <th>name</th>\n                    <th>mode</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <ng-container *ngFor=\"let item of page.users; let i = index\">\n                    <tr>\n                        <td>{{ i + 1 + page.offset }}</td>\n                        <td><user-option [user]=\"item\"  (update)=\"list()\">{{ item.username  }}</user-option></td>\n                        <td>\n                            <span *ngIf=\"item.isadmin\"><i class=\"fas fa-user-plus\"></i></span>\n                            <span *ngIf=\"!item.isadmin\"><i class=\"fas fa-microchip\"></i></span>\n                        </td>\n                    </tr>\n                </ng-container>\n            </tbody>\n\n        </table>\n\n        <pager [limit]=\"page.limit\" [total]=\"page.total\" [offset]=\"page.offset\" (newOffset)=\"setNewOffset($event)\" ></pager>\n\n    </ng-container>\n\n</layout>\n");

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

/***/ "./src/app/agent-create/agent-create.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/agent-create/agent-create.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW50LWNyZWF0ZS9hZ2VudC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/agent-create/agent-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/agent-create/agent-create.component.ts ***!
  \********************************************************/
/*! exports provided: AgentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentCreateComponent", function() { return AgentCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agent.service */ "./src/app/agent.service.ts");




var AgentCreateComponent = /** @class */ (function () {
    function AgentCreateComponent(formBuilder, agentService) {
        this.formBuilder = formBuilder;
        this.agentService = agentService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alertMessage = "";
        this.minHostnameLength = 3;
        this.minUsernameLength = 5;
        this.minPasswordLength = 5;
    }
    AgentCreateComponent.prototype.onCreateAgent = function () {
        this.update.emit(null);
    };
    AgentCreateComponent.prototype.createAgent = function (event) {
        var _this = this;
        var payload = {
            scheme: "https",
            hostname: event.value.hostname,
            username: event.value.username,
            port: 7002,
            password: event.value.password,
        };
        this.agentService.create(payload).subscribe(function (response) {
            if (response.error == false) {
                _this.dismissForm();
                _this.onCreateAgent();
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
    AgentCreateComponent.prototype.modalId = function () {
        return "agent-create-modal";
    };
    AgentCreateComponent.prototype.formId = function (base) {
        return "agent-create-form-" + base;
    };
    AgentCreateComponent.prototype.showForm = function () {
        this.alertMessage = "";
        this.form.reset();
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    AgentCreateComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
        this.form.reset();
    };
    Object.defineProperty(AgentCreateComponent.prototype, "formHostname", {
        get: function () {
            return this.form.get('hostname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgentCreateComponent.prototype, "formUsername", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgentCreateComponent.prototype, "formPassword", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    AgentCreateComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    AgentCreateComponent.prototype.dismissAlert = function () {
        this.alertMessage = "";
    };
    AgentCreateComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            hostname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minHostnameLength)]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPasswordLength)]],
        });
    };
    AgentCreateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _agent_service__WEBPACK_IMPORTED_MODULE_3__["AgentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgentCreateComponent.prototype, "agent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AgentCreateComponent.prototype, "update", void 0);
    AgentCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'agent-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agent-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent-create/agent-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agent-create.component.scss */ "./src/app/agent-create/agent-create.component.scss")).default]
        })
    ], AgentCreateComponent);
    return AgentCreateComponent;
}());



/***/ }),

/***/ "./src/app/agent-delete/agent-delete.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/agent-delete/agent-delete.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW50LWRlbGV0ZS9hZ2VudC1kZWxldGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/agent-delete/agent-delete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/agent-delete/agent-delete.component.ts ***!
  \********************************************************/
/*! exports provided: AgentDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentDeleteComponent", function() { return AgentDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agent.service */ "./src/app/agent.service.ts");




var AgentDeleteComponent = /** @class */ (function () {
    function AgentDeleteComponent(formBuilder, agentService) {
        this.formBuilder = formBuilder;
        this.agentService = agentService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alertMessage = "";
    }
    AgentDeleteComponent.prototype.onDeleteAgent = function () {
        this.update.emit(null);
    };
    AgentDeleteComponent.prototype.deleteAgent = function (event) {
        var _this = this;
        var payload = {
            id: event.value.id,
        };
        this.agentService.deletex(payload).subscribe(function (response) {
            if (response.error == false) {
                _this.dismissForm();
                _this.onDeleteAgent();
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
    AgentDeleteComponent.prototype.modalId = function () {
        return "agent-delete-modal-" + this.agent.hostname;
    };
    AgentDeleteComponent.prototype.formId = function (base) {
        return "agent-delete-form-" + base + "-" + this.agent.hostname;
    };
    AgentDeleteComponent.prototype.showForm = function () {
        this.alertMessage = "";
        this.form.reset();
        this.form.patchValue({
            id: this.agent.id,
            hostname: this.agent.hostname,
            confirmation: false
        });
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    AgentDeleteComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
        this.form.reset();
    };
    AgentDeleteComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    AgentDeleteComponent.prototype.dismissAlert = function () {
        this.alertMessage = "";
    };
    Object.defineProperty(AgentDeleteComponent.prototype, "formHostname", {
        get: function () {
            return this.form.get('hostname');
        },
        enumerable: true,
        configurable: true
    });
    AgentDeleteComponent.prototype.confirmationValidator = function () {
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
    AgentDeleteComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: -1,
            hostname: "",
            confirmation: [false, [this.confirmationValidator()]]
        });
    };
    AgentDeleteComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _agent_service__WEBPACK_IMPORTED_MODULE_3__["AgentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgentDeleteComponent.prototype, "agent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AgentDeleteComponent.prototype, "update", void 0);
    AgentDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'agent-delete',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agent-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent-delete/agent-delete.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agent-delete.component.scss */ "./src/app/agent-delete/agent-delete.component.scss")).default]
        })
    ], AgentDeleteComponent);
    return AgentDeleteComponent;
}());



/***/ }),

/***/ "./src/app/agent-option/agent-option.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/agent-option/agent-option.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW50LW9wdGlvbi9hZ2VudC1vcHRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/agent-option/agent-option.component.ts":
/*!********************************************************!*\
  !*** ./src/app/agent-option/agent-option.component.ts ***!
  \********************************************************/
/*! exports provided: AgentOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentOptionComponent", function() { return AgentOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AgentOptionComponent = /** @class */ (function () {
    function AgentOptionComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AgentOptionComponent.prototype.onUpdate = function () {
        console.log("event");
        this.update.emit(null);
        this.dismissForm();
    };
    AgentOptionComponent.prototype.modalId = function () {
        return "agent-option-modal-" + this.agent.hostname;
    };
    AgentOptionComponent.prototype.showForm = function () {
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    AgentOptionComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
    };
    AgentOptionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgentOptionComponent.prototype, "agent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AgentOptionComponent.prototype, "update", void 0);
    AgentOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'agent-option',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agent-option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent-option/agent-option.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agent-option.component.scss */ "./src/app/agent-option/agent-option.component.scss")).default]
        })
    ], AgentOptionComponent);
    return AgentOptionComponent;
}());



/***/ }),

/***/ "./src/app/agent-update/agent-update.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/agent-update/agent-update.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW50LXVwZGF0ZS9hZ2VudC11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/agent-update/agent-update.component.ts":
/*!********************************************************!*\
  !*** ./src/app/agent-update/agent-update.component.ts ***!
  \********************************************************/
/*! exports provided: AgentUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentUpdateComponent", function() { return AgentUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agent.service */ "./src/app/agent.service.ts");




var AgentUpdateComponent = /** @class */ (function () {
    function AgentUpdateComponent(formBuilder, agentService) {
        this.formBuilder = formBuilder;
        this.agentService = agentService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alertMessage = "";
        this.minHostnameLength = 3;
        this.minUsernameLength = 5;
        this.minPasswordLength = 5;
    }
    AgentUpdateComponent.prototype.onUpdateAgent = function () {
        this.update.emit(null);
    };
    AgentUpdateComponent.prototype.updateAgent = function (event) {
        var _this = this;
        var payload = {
            id: event.value.id,
            scheme: "https",
            hostname: event.value.hostname,
            port: 7002,
            username: event.value.username,
            password: event.value.password,
        };
        this.agentService.update(payload).subscribe(function (response) {
            if (response.error == false) {
                _this.dismissForm();
                _this.onUpdateAgent();
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
    AgentUpdateComponent.prototype.modalId = function () {
        return "agent-update-modal-" + this.agent.hostname;
    };
    AgentUpdateComponent.prototype.formId = function (base) {
        return "agent-update-form-" + base + "-" + this.agent.hostname;
    };
    AgentUpdateComponent.prototype.showForm = function () {
        this.alertMessage = "";
        this.form.reset();
        this.form.patchValue({
            id: this.agent.id,
            hostname: this.agent.hostname,
            username: this.agent.username,
            password: ""
        });
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    AgentUpdateComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
        this.form.reset();
    };
    Object.defineProperty(AgentUpdateComponent.prototype, "formHostname", {
        get: function () {
            return this.form.get('hostname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgentUpdateComponent.prototype, "formUsername", {
        get: function () {
            return this.form.get('hostname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgentUpdateComponent.prototype, "formPassword", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    AgentUpdateComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    AgentUpdateComponent.prototype.dismissAlert = function () {
        this.alertMessage = "";
    };
    AgentUpdateComponent.prototype.passwordValidator = function () {
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
    AgentUpdateComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            hostname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minHostnameLength)]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength)]],
            password: ["", [this.passwordValidator()]]
        });
    };
    AgentUpdateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _agent_service__WEBPACK_IMPORTED_MODULE_3__["AgentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgentUpdateComponent.prototype, "agent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AgentUpdateComponent.prototype, "update", void 0);
    AgentUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'agent-update',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agent-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent-update/agent-update.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agent-update.component.scss */ "./src/app/agent-update/agent-update.component.scss")).default]
        })
    ], AgentUpdateComponent);
    return AgentUpdateComponent;
}());



/***/ }),

/***/ "./src/app/agent.service.ts":
/*!**********************************!*\
  !*** ./src/app/agent.service.ts ***!
  \**********************************/
/*! exports provided: AgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentService", function() { return AgentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AgentService = /** @class */ (function () {
    function AgentService(httpClient) {
        this.httpClient = httpClient;
    }
    AgentService.prototype.list = function (page) {
        return this.httpClient.post("/api/v1/agent/list", {
            "limit": page.limit,
            "offset": page.offset,
            "hostnamePattern": page.hostnamePattern
        });
    };
    AgentService.prototype.create = function (agent) {
        return this.httpClient.post("/api/v1/agent/create", {
            "scheme": agent.scheme,
            "hostname": agent.hostname,
            "port": agent.port,
            "password": agent.password,
            "username": agent.username,
        });
    };
    AgentService.prototype.update = function (agent) {
        return this.httpClient.post("/api/v1/agent/update", {
            "id": agent.id,
            "scheme": agent.scheme,
            "hostname": agent.hostname,
            "port": agent.port,
            "password": agent.password,
            "username": agent.username,
        });
    };
    AgentService.prototype.deletex = function (agent) {
        return this.httpClient.post("/api/v1/agent/delete", {
            "id": agent.id
        });
    };
    AgentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AgentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AgentService);
    return AgentService;
}());



/***/ }),

/***/ "./src/app/agents/agents.component.scss":
/*!**********************************************!*\
  !*** ./src/app/agents/agents.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW50cy9hZ2VudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/agents/agents.component.ts":
/*!********************************************!*\
  !*** ./src/app/agents/agents.component.ts ***!
  \********************************************/
/*! exports provided: AgentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsComponent", function() { return AgentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _agent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agent.service */ "./src/app/agent.service.ts");





var AgentsComponent = /** @class */ (function () {
    function AgentsComponent(formBuilder, agentService) {
        this.formBuilder = formBuilder;
        this.agentService = agentService;
        this.noticeMessage = null;
        this.alertMessage = null;
        this.page = {
            total: 0,
            limit: 5,
            offset: 0,
            hostnamePattern: "",
            agents: []
        };
    }
    AgentsComponent.prototype.setNewOffset = function (newOffset) {
        this.page.offset = newOffset;
        this.list();
    };
    AgentsComponent.prototype.list = function () {
        var _this = this;
        this.agentService.list(this.page).subscribe(function (response) {
            if (response.error == false) {
                _this.page = response.result;
                if (_this.page.agents == null) {
                    _this.page.agents = [];
                }
            }
            else {
                if (response.message != null) {
                    _this.alertMessage = "Backend error: " + response.message;
                }
                else {
                    _this.alertMessage = "Backend error.";
                }
            }
        }, function (error) {
            if (error.message != null) {
                _this.alertMessage = "Communication error: " + error.message;
            }
            else {
                _this.alertMessage = "Communication error.";
            }
        });
    };
    /* Alerts */
    AgentsComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    AgentsComponent.prototype.dismissAlert = function () {
        this.alertMessage = null;
    };
    /* Notices */
    AgentsComponent.prototype.showNotice = function (message) {
        this.noticeMessage = message;
    };
    AgentsComponent.prototype.dismissNotice = function () {
        this.noticeMessage = null;
    };
    AgentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = this.formBuilder.group({
            hostnamePattern: [""],
            pageLimit: [this.page.limit],
        });
        this.list();
        this.searchForm.get('hostnamePattern').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            _this.page.hostnamePattern = value;
            _this.list();
        });
        this.searchForm.get('pageLimit').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            console.log(value);
            _this.page.limit = value;
            _this.list();
        });
    };
    AgentsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _agent_service__WEBPACK_IMPORTED_MODULE_4__["AgentService"] }
    ]; };
    AgentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'agents',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agents/agents.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agents.component.scss */ "./src/app/agents/agents.component.scss")).default]
        })
    ], AgentsComponent);
    return AgentsComponent;
}());



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
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pager/pager.component */ "./src/app/pager/pager.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/user-create/user-create.component.ts");
/* harmony import */ var _user_update_user_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-update/user-update.component */ "./src/app/user-update/user-update.component.ts");
/* harmony import */ var _user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-delete/user-delete.component */ "./src/app/user-delete/user-delete.component.ts");
/* harmony import */ var _user_option_user_option_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-option/user-option.component */ "./src/app/user-option/user-option.component.ts");
/* harmony import */ var _agents_agents_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./agents/agents.component */ "./src/app/agents/agents.component.ts");
/* harmony import */ var _agent_option_agent_option_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./agent-option/agent-option.component */ "./src/app/agent-option/agent-option.component.ts");
/* harmony import */ var _agent_create_agent_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./agent-create/agent-create.component */ "./src/app/agent-create/agent-create.component.ts");
/* harmony import */ var _agent_update_agent_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./agent-update/agent-update.component */ "./src/app/agent-update/agent-update.component.ts");
/* harmony import */ var _agent_delete_agent_delete_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./agent-delete/agent-delete.component */ "./src/app/agent-delete/agent-delete.component.ts");
/* harmony import */ var _stores_stores_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./stores/stores.component */ "./src/app/stores/stores.component.ts");
/* harmony import */ var _store_option_store_option_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./store-option/store-option.component */ "./src/app/store-option/store-option.component.ts");
/* harmony import */ var _store_create_store_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store-create/store-create.component */ "./src/app/store-create/store-create.component.ts");
/* harmony import */ var _store_update_store_update_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store-update/store-update.component */ "./src/app/store-update/store-update.component.ts");
/* harmony import */ var _store_delete_store_delete_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./store-delete/store-delete.component */ "./src/app/store-delete/store-delete.component.ts");
/* harmony import */ var _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./schedules/schedules.component */ "./src/app/schedules/schedules.component.ts");
/* harmony import */ var _schedule_create_schedule_create_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./schedule-create/schedule-create.component */ "./src/app/schedule-create/schedule-create.component.ts");
/* harmony import */ var _schedule_update_schedule_update_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./schedule-update/schedule-update.component */ "./src/app/schedule-update/schedule-update.component.ts");
/* harmony import */ var _schedule_option_schedule_option_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./schedule-option/schedule-option.component */ "./src/app/schedule-option/schedule-option.component.ts");
/* harmony import */ var _schedule_delete_schedule_delete_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./schedule-delete/schedule-delete.component */ "./src/app/schedule-delete/schedule-delete.component.ts");

































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
                _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
                _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_14__["UserCreateComponent"],
                _user_update_user_update_component__WEBPACK_IMPORTED_MODULE_15__["UserUpdateComponent"],
                _user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_16__["UserDeleteComponent"],
                _user_option_user_option_component__WEBPACK_IMPORTED_MODULE_17__["UserOptionComponent"],
                _pager_pager_component__WEBPACK_IMPORTED_MODULE_12__["PagerComponent"],
                _agents_agents_component__WEBPACK_IMPORTED_MODULE_18__["AgentsComponent"],
                _agent_option_agent_option_component__WEBPACK_IMPORTED_MODULE_19__["AgentOptionComponent"],
                _agent_create_agent_create_component__WEBPACK_IMPORTED_MODULE_20__["AgentCreateComponent"],
                _agent_update_agent_update_component__WEBPACK_IMPORTED_MODULE_21__["AgentUpdateComponent"],
                _agent_delete_agent_delete_component__WEBPACK_IMPORTED_MODULE_22__["AgentDeleteComponent"],
                _stores_stores_component__WEBPACK_IMPORTED_MODULE_23__["StoresComponent"],
                _store_option_store_option_component__WEBPACK_IMPORTED_MODULE_24__["StoreOptionComponent"],
                _store_create_store_create_component__WEBPACK_IMPORTED_MODULE_25__["StoreCreateComponent"],
                _store_update_store_update_component__WEBPACK_IMPORTED_MODULE_26__["StoreUpdateComponent"],
                _store_delete_store_delete_component__WEBPACK_IMPORTED_MODULE_27__["StoreDeleteComponent"],
                _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_28__["SchedulesComponent"],
                _schedule_create_schedule_create_component__WEBPACK_IMPORTED_MODULE_29__["ScheduleCreateComponent"],
                _schedule_update_schedule_update_component__WEBPACK_IMPORTED_MODULE_30__["ScheduleUpdateComponent"],
                _schedule_option_schedule_option_component__WEBPACK_IMPORTED_MODULE_31__["ScheduleOptionComponent"],
                _schedule_delete_schedule_delete_component__WEBPACK_IMPORTED_MODULE_32__["ScheduleDeleteComponent"]
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
/* harmony import */ var _agents_agents_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agents/agents.component */ "./src/app/agents/agents.component.ts");
/* harmony import */ var _stores_stores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stores/stores.component */ "./src/app/stores/stores.component.ts");
/* harmony import */ var _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedules/schedules.component */ "./src/app/schedules/schedules.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _page_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page.guard */ "./src/app/page.guard.ts");











var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], data: { name: "Login" } },
    { path: "users", component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_10__["PageGuard"]], data: { name: "Users" } },
    { path: "agents", component: _agents_agents_component__WEBPACK_IMPORTED_MODULE_6__["AgentsComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_10__["PageGuard"]], data: { name: "Agents" } },
    { path: "stores", component: _stores_stores_component__WEBPACK_IMPORTED_MODULE_7__["StoresComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_10__["PageGuard"]], data: { name: "Stores" } },
    { path: "schedules", component: _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_8__["SchedulesComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_10__["PageGuard"]], data: { name: "Schedules" } },
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_10__["PageGuard"]], data: { name: "Home" } },
    { path: "notfound", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_10__["PageGuard"]] },
    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], canActivate: [_page_guard__WEBPACK_IMPORTED_MODULE_10__["PageGuard"]] },
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

/***/ "./src/app/schedule-create/schedule-create.component.css":
/*!***************************************************************!*\
  !*** ./src/app/schedule-create/schedule-create.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlLWNyZWF0ZS9zY2hlZHVsZS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/schedule-create/schedule-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/schedule-create/schedule-create.component.ts ***!
  \**************************************************************/
/*! exports provided: ScheduleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleCreateComponent", function() { return ScheduleCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScheduleCreateComponent = /** @class */ (function () {
    function ScheduleCreateComponent() {
    }
    ScheduleCreateComponent.prototype.ngOnInit = function () {
    };
    ScheduleCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-create/schedule-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule-create.component.css */ "./src/app/schedule-create/schedule-create.component.css")).default]
        })
    ], ScheduleCreateComponent);
    return ScheduleCreateComponent;
}());



/***/ }),

/***/ "./src/app/schedule-delete/schedule-delete.component.css":
/*!***************************************************************!*\
  !*** ./src/app/schedule-delete/schedule-delete.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlLWRlbGV0ZS9zY2hlZHVsZS1kZWxldGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/schedule-delete/schedule-delete.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/schedule-delete/schedule-delete.component.ts ***!
  \**************************************************************/
/*! exports provided: ScheduleDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDeleteComponent", function() { return ScheduleDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScheduleDeleteComponent = /** @class */ (function () {
    function ScheduleDeleteComponent() {
    }
    ScheduleDeleteComponent.prototype.ngOnInit = function () {
    };
    ScheduleDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-delete',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-delete/schedule-delete.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule-delete.component.css */ "./src/app/schedule-delete/schedule-delete.component.css")).default]
        })
    ], ScheduleDeleteComponent);
    return ScheduleDeleteComponent;
}());



/***/ }),

/***/ "./src/app/schedule-option/schedule-option.component.css":
/*!***************************************************************!*\
  !*** ./src/app/schedule-option/schedule-option.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlLW9wdGlvbi9zY2hlZHVsZS1vcHRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/schedule-option/schedule-option.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/schedule-option/schedule-option.component.ts ***!
  \**************************************************************/
/*! exports provided: ScheduleOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleOptionComponent", function() { return ScheduleOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScheduleOptionComponent = /** @class */ (function () {
    function ScheduleOptionComponent() {
    }
    ScheduleOptionComponent.prototype.ngOnInit = function () {
    };
    ScheduleOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-option',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule-option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-option/schedule-option.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule-option.component.css */ "./src/app/schedule-option/schedule-option.component.css")).default]
        })
    ], ScheduleOptionComponent);
    return ScheduleOptionComponent;
}());



/***/ }),

/***/ "./src/app/schedule-update/schedule-update.component.css":
/*!***************************************************************!*\
  !*** ./src/app/schedule-update/schedule-update.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlLXVwZGF0ZS9zY2hlZHVsZS11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/schedule-update/schedule-update.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/schedule-update/schedule-update.component.ts ***!
  \**************************************************************/
/*! exports provided: ScheduleUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleUpdateComponent", function() { return ScheduleUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScheduleUpdateComponent = /** @class */ (function () {
    function ScheduleUpdateComponent() {
    }
    ScheduleUpdateComponent.prototype.ngOnInit = function () {
    };
    ScheduleUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-update',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-update/schedule-update.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule-update.component.css */ "./src/app/schedule-update/schedule-update.component.css")).default]
        })
    ], ScheduleUpdateComponent);
    return ScheduleUpdateComponent;
}());



/***/ }),

/***/ "./src/app/schedule.service.ts":
/*!*************************************!*\
  !*** ./src/app/schedule.service.ts ***!
  \*************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ScheduleService = /** @class */ (function () {
    function ScheduleService(httpClient) {
        this.httpClient = httpClient;
    }
    ScheduleService.prototype.list = function (page) {
        return this.httpClient.post("/api/v1/schedule/list", {
            "limit": page.limit,
            "offset": page.offset,
            "hostnamePattern": page.hostnamePattern
        });
    };
    ScheduleService.prototype.create = function (schedule) {
        return this.httpClient.post("/api/v1/schedule/create", {
            "agentId": schedule.agentId,
            "storeId": schedule.storeId,
            "actionType": schedule.actionType,
            "storePath": schedule.storePath,
            "resourse": schedule.resourse,
            "mins": schedule.mins,
            "hours": schedule.hours,
            "mdays": schedule.mdays,
            "wdays": schedule.wdays,
            "depth": schedule.depth
        });
    };
    ScheduleService.prototype.update = function (schedule) {
        return this.httpClient.post("/api/v1/schedule/update", {
            "id": schedule.id,
            "agentId": schedule.agentId,
            "storeId": schedule.storeId,
            "actionType": schedule.actionType,
            "storePath": schedule.storePath,
            "resourse": schedule.resourse,
            "mins": schedule.mins,
            "hours": schedule.hours,
            "mdays": schedule.mdays,
            "wdays": schedule.wdays,
            "depth": schedule.depth
        });
    };
    ScheduleService.prototype.deletex = function (schedule) {
        return this.httpClient.post("/api/v1/schedule/delete", {
            "id": schedule.id
        });
    };
    ScheduleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ScheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ScheduleService);
    return ScheduleService;
}());



/***/ }),

/***/ "./src/app/schedules/schedules.component.scss":
/*!****************************************************!*\
  !*** ./src/app/schedules/schedules.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlcy9zY2hlZHVsZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/schedules/schedules.component.ts":
/*!**************************************************!*\
  !*** ./src/app/schedules/schedules.component.ts ***!
  \**************************************************/
/*! exports provided: SchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesComponent", function() { return SchedulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule.service */ "./src/app/schedule.service.ts");





var SchedulesComponent = /** @class */ (function () {
    function SchedulesComponent(formBuilder, scheduleService) {
        this.formBuilder = formBuilder;
        this.scheduleService = scheduleService;
        this.noticeMessage = null;
        this.alertMessage = null;
        this.page = {
            total: 0,
            limit: 5,
            offset: 0,
            hostnamePattern: "",
            schedules: []
        };
    }
    SchedulesComponent.prototype.setNewOffset = function (newOffset) {
        this.page.offset = newOffset;
        this.list();
    };
    SchedulesComponent.prototype.list = function () {
        var _this = this;
        this.scheduleService.list(this.page).subscribe(function (response) {
            if (response.error == false) {
                _this.page = response.result;
                if (_this.page.schedules == null) {
                    _this.page.schedules = [];
                }
            }
            else {
                if (response.message != null) {
                    _this.alertMessage = "Backend error: " + response.message;
                }
                else {
                    _this.alertMessage = "Backend error.";
                }
            }
        }, function (error) {
            if (error.message != null) {
                _this.alertMessage = "Communication error: " + error.message;
            }
            else {
                _this.alertMessage = "Communication error.";
            }
        });
    };
    /* Alerts */
    SchedulesComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    SchedulesComponent.prototype.dismissAlert = function () {
        this.alertMessage = null;
    };
    /* Notices */
    SchedulesComponent.prototype.showNotice = function (message) {
        this.noticeMessage = message;
    };
    SchedulesComponent.prototype.dismissNotice = function () {
        this.noticeMessage = null;
    };
    SchedulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = this.formBuilder.group({
            hostnamePattern: [""],
            pageLimit: [this.page.limit],
        });
        this.list();
        this.searchForm.get('hostnamePattern').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            _this.page.hostnamePattern = value;
            _this.list();
        });
        this.searchForm.get('pageLimit').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            console.log(value);
            _this.page.limit = value;
            _this.list();
        });
    };
    SchedulesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"] }
    ]; };
    SchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'schedules',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedules/schedules.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedules.component.scss */ "./src/app/schedules/schedules.component.scss")).default]
        })
    ], SchedulesComponent);
    return SchedulesComponent;
}());



/***/ }),

/***/ "./src/app/store-create/store-create.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/store-create/store-create.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlLWNyZWF0ZS9zdG9yZS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/store-create/store-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/store-create/store-create.component.ts ***!
  \********************************************************/
/*! exports provided: StoreCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreCreateComponent", function() { return StoreCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");




var StoreCreateComponent = /** @class */ (function () {
    function StoreCreateComponent(formBuilder, storeService) {
        this.formBuilder = formBuilder;
        this.storeService = storeService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alertMessage = "";
        this.minHostnameLength = 3;
        this.minUsernameLength = 5;
        this.minPasswordLength = 5;
    }
    StoreCreateComponent.prototype.onCreateStore = function () {
        this.update.emit(null);
    };
    StoreCreateComponent.prototype.createStore = function (event) {
        var _this = this;
        var storeType = event.value.storeType;
        var scheme;
        if (storeType == "sftp") {
            scheme = "sftp";
        }
        else if (storeType == "s2") {
            scheme = "https";
        }
        var payload = {
            storeType: event.value.storeType,
            scheme: scheme,
            hostname: event.value.hostname,
            username: event.value.username,
            port: Number(event.value.port),
            password: event.value.password,
        };
        this.storeService.create(payload).subscribe(function (response) {
            if (response.error == false) {
                _this.dismissForm();
                _this.onCreateStore();
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
    StoreCreateComponent.prototype.modalId = function () {
        return "store-create-modal";
    };
    StoreCreateComponent.prototype.formId = function (base) {
        return "store-create-form-" + base;
    };
    StoreCreateComponent.prototype.showForm = function () {
        this.alertMessage = "";
        this.form.reset();
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    StoreCreateComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
        this.form.reset();
    };
    Object.defineProperty(StoreCreateComponent.prototype, "formHostname", {
        get: function () {
            return this.form.get('hostname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreCreateComponent.prototype, "formPort", {
        get: function () {
            return this.form.get('port');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreCreateComponent.prototype, "formUsername", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreCreateComponent.prototype, "formPassword", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    StoreCreateComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    StoreCreateComponent.prototype.dismissAlert = function () {
        this.alertMessage = "";
    };
    StoreCreateComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            storeType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            port: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(65535)]],
            hostname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minHostnameLength)]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPasswordLength)]],
        });
    };
    StoreCreateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StoreCreateComponent.prototype, "store", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StoreCreateComponent.prototype, "update", void 0);
    StoreCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'store-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/store-create/store-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store-create.component.scss */ "./src/app/store-create/store-create.component.scss")).default]
        })
    ], StoreCreateComponent);
    return StoreCreateComponent;
}());



/***/ }),

/***/ "./src/app/store-delete/store-delete.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/store-delete/store-delete.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlLWRlbGV0ZS9zdG9yZS1kZWxldGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/store-delete/store-delete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/store-delete/store-delete.component.ts ***!
  \********************************************************/
/*! exports provided: StoreDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDeleteComponent", function() { return StoreDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");




var StoreDeleteComponent = /** @class */ (function () {
    function StoreDeleteComponent(formBuilder, storeService) {
        this.formBuilder = formBuilder;
        this.storeService = storeService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alertMessage = "";
    }
    StoreDeleteComponent.prototype.onDeleteStore = function () {
        this.update.emit(null);
    };
    StoreDeleteComponent.prototype.deleteStore = function (event) {
        var _this = this;
        var payload = {
            id: event.value.id,
        };
        this.storeService.deletex(payload).subscribe(function (response) {
            if (response.error == false) {
                _this.dismissForm();
                _this.onDeleteStore();
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
    StoreDeleteComponent.prototype.modalId = function () {
        return "store-delete-modal-" + this.store.hostname;
    };
    StoreDeleteComponent.prototype.formId = function (base) {
        return "store-delete-form-" + base + "-" + this.store.hostname;
    };
    StoreDeleteComponent.prototype.showForm = function () {
        this.alertMessage = "";
        this.form.reset();
        this.form.patchValue({
            id: this.store.id,
            hostname: this.store.hostname,
            confirmation: false
        });
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    StoreDeleteComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
        this.form.reset();
    };
    StoreDeleteComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    StoreDeleteComponent.prototype.dismissAlert = function () {
        this.alertMessage = "";
    };
    Object.defineProperty(StoreDeleteComponent.prototype, "formHostname", {
        get: function () {
            return this.form.get('hostname');
        },
        enumerable: true,
        configurable: true
    });
    StoreDeleteComponent.prototype.confirmationValidator = function () {
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
    StoreDeleteComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: -1,
            hostname: "",
            confirmation: [false, [this.confirmationValidator()]]
        });
    };
    StoreDeleteComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StoreDeleteComponent.prototype, "store", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StoreDeleteComponent.prototype, "update", void 0);
    StoreDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'store-delete',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/store-delete/store-delete.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store-delete.component.scss */ "./src/app/store-delete/store-delete.component.scss")).default]
        })
    ], StoreDeleteComponent);
    return StoreDeleteComponent;
}());



/***/ }),

/***/ "./src/app/store-option/store-option.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/store-option/store-option.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlLW9wdGlvbi9zdG9yZS1vcHRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/store-option/store-option.component.ts":
/*!********************************************************!*\
  !*** ./src/app/store-option/store-option.component.ts ***!
  \********************************************************/
/*! exports provided: StoreOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreOptionComponent", function() { return StoreOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoreOptionComponent = /** @class */ (function () {
    function StoreOptionComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StoreOptionComponent.prototype.onUpdate = function () {
        console.log("event");
        this.update.emit(null);
        this.dismissForm();
    };
    StoreOptionComponent.prototype.modalId = function () {
        return "store-option-modal-" + this.store.hostname;
    };
    StoreOptionComponent.prototype.showForm = function () {
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    StoreOptionComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
    };
    StoreOptionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StoreOptionComponent.prototype, "store", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StoreOptionComponent.prototype, "update", void 0);
    StoreOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'store-option',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store-option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/store-option/store-option.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store-option.component.scss */ "./src/app/store-option/store-option.component.scss")).default]
        })
    ], StoreOptionComponent);
    return StoreOptionComponent;
}());



/***/ }),

/***/ "./src/app/store-update/store-update.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/store-update/store-update.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlLXVwZGF0ZS9zdG9yZS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/store-update/store-update.component.ts":
/*!********************************************************!*\
  !*** ./src/app/store-update/store-update.component.ts ***!
  \********************************************************/
/*! exports provided: StoreUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreUpdateComponent", function() { return StoreUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");




var StoreUpdateComponent = /** @class */ (function () {
    function StoreUpdateComponent(formBuilder, storeService) {
        this.formBuilder = formBuilder;
        this.storeService = storeService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alertMessage = "";
        this.minHostnameLength = 3;
        this.minUsernameLength = 5;
        this.minPasswordLength = 5;
    }
    StoreUpdateComponent.prototype.onUpdateStore = function () {
        this.update.emit(null);
    };
    StoreUpdateComponent.prototype.updateStore = function (event) {
        var _this = this;
        var storeType = event.value.storeType;
        var scheme;
        if (storeType == "sftp") {
            scheme = "sftp";
        }
        else if (storeType == "s2") {
            scheme = "https";
        }
        var payload = {
            id: event.value.id,
            storeType: storeType,
            scheme: scheme,
            hostname: event.value.hostname,
            port: Number(event.value.port),
            username: event.value.username,
            password: event.value.password,
        };
        this.storeService.update(payload).subscribe(function (response) {
            if (response.error == false) {
                _this.dismissForm();
                _this.onUpdateStore();
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
    StoreUpdateComponent.prototype.modalId = function () {
        return "store-update-modal-" + this.store.hostname;
    };
    StoreUpdateComponent.prototype.formId = function (base) {
        return "store-update-form-" + base + "-" + this.store.hostname;
    };
    StoreUpdateComponent.prototype.showForm = function () {
        this.alertMessage = "";
        this.form.reset();
        this.form.patchValue({
            id: this.store.id,
            storeType: this.store.storeType,
            hostname: this.store.hostname,
            port: this.store.port,
            username: this.store.username,
            password: ""
        });
        var id = this.modalId();
        $('#' + id).modal('show');
    };
    StoreUpdateComponent.prototype.dismissForm = function () {
        var id = this.modalId();
        $('#' + id).modal('hide');
        this.form.reset();
    };
    Object.defineProperty(StoreUpdateComponent.prototype, "formHostname", {
        get: function () {
            return this.form.get('hostname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreUpdateComponent.prototype, "formPort", {
        get: function () {
            return this.form.get('port');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreUpdateComponent.prototype, "formUsername", {
        get: function () {
            return this.form.get('hostname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreUpdateComponent.prototype, "formPassword", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    StoreUpdateComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    StoreUpdateComponent.prototype.dismissAlert = function () {
        this.alertMessage = "";
    };
    StoreUpdateComponent.prototype.passwordValidator = function () {
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
    StoreUpdateComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            storeType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            hostname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minHostnameLength)]],
            port: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(65535)]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength)]],
            password: ["", [this.passwordValidator()]]
        });
    };
    StoreUpdateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StoreUpdateComponent.prototype, "store", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StoreUpdateComponent.prototype, "update", void 0);
    StoreUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'store-update',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/store-update/store-update.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store-update.component.scss */ "./src/app/store-update/store-update.component.scss")).default]
        })
    ], StoreUpdateComponent);
    return StoreUpdateComponent;
}());



/***/ }),

/***/ "./src/app/store.service.ts":
/*!**********************************!*\
  !*** ./src/app/store.service.ts ***!
  \**********************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StoreService = /** @class */ (function () {
    function StoreService(httpClient) {
        this.httpClient = httpClient;
    }
    StoreService.prototype.list = function (page) {
        return this.httpClient.post("/api/v1/store/list", {
            "limit": page.limit,
            "offset": page.offset,
            "hostnamePattern": page.hostnamePattern
        });
    };
    StoreService.prototype.create = function (store) {
        return this.httpClient.post("/api/v1/store/create", {
            "storeType": store.storeType,
            "scheme": store.scheme,
            "hostname": store.hostname,
            "port": store.port,
            "password": store.password,
            "username": store.username,
        });
    };
    StoreService.prototype.update = function (store) {
        return this.httpClient.post("/api/v1/store/update", {
            "id": store.id,
            "storeType": store.storeType,
            "scheme": store.scheme,
            "hostname": store.hostname,
            "port": store.port,
            "password": store.password,
            "username": store.username,
        });
    };
    StoreService.prototype.deletex = function (store) {
        return this.httpClient.post("/api/v1/store/delete", {
            "id": store.id
        });
    };
    StoreService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/stores/stores.component.scss":
/*!**********************************************!*\
  !*** ./src/app/stores/stores.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3Jlcy9zdG9yZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/stores/stores.component.ts":
/*!********************************************!*\
  !*** ./src/app/stores/stores.component.ts ***!
  \********************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");





var StoresComponent = /** @class */ (function () {
    function StoresComponent(formBuilder, storeService) {
        this.formBuilder = formBuilder;
        this.storeService = storeService;
        this.noticeMessage = null;
        this.alertMessage = null;
        this.page = {
            total: 0,
            limit: 5,
            offset: 0,
            hostnamePattern: "",
            stores: []
        };
    }
    StoresComponent.prototype.setNewOffset = function (newOffset) {
        this.page.offset = newOffset;
        this.list();
    };
    StoresComponent.prototype.list = function () {
        var _this = this;
        this.storeService.list(this.page).subscribe(function (response) {
            if (response.error == false) {
                _this.page = response.result;
                if (_this.page.stores == null) {
                    _this.page.stores = [];
                }
            }
            else {
                if (response.message != null) {
                    _this.alertMessage = "Backend error: " + response.message;
                }
                else {
                    _this.alertMessage = "Backend error.";
                }
            }
        }, function (error) {
            if (error.message != null) {
                _this.alertMessage = "Communication error: " + error.message;
            }
            else {
                _this.alertMessage = "Communication error.";
            }
        });
    };
    /* Alerts */
    StoresComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
    };
    StoresComponent.prototype.dismissAlert = function () {
        this.alertMessage = null;
    };
    /* Notices */
    StoresComponent.prototype.showNotice = function (message) {
        this.noticeMessage = message;
    };
    StoresComponent.prototype.dismissNotice = function () {
        this.noticeMessage = null;
    };
    StoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = this.formBuilder.group({
            hostnamePattern: [""],
            pageLimit: [this.page.limit],
        });
        this.list();
        this.searchForm.get('hostnamePattern').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            _this.page.hostnamePattern = value;
            _this.list();
        });
        this.searchForm.get('pageLimit').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            console.log(value);
            _this.page.limit = value;
            _this.list();
        });
    };
    StoresComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }
    ]; };
    StoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'stores',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stores.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stores/stores.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stores.component.scss */ "./src/app/stores/stores.component.scss")).default]
        })
    ], StoresComponent);
    return StoresComponent;
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
            "userPattern": page.userPattern
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
            limit: 5,
            offset: 0,
            userPattern: "",
            users: []
        };
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
            }
            else {
                if (response.message != null) {
                    _this.alertMessage = "Backend error: " + response.message;
                }
                else {
                    _this.alertMessage = "Backend error.";
                }
            }
        }, function (error) {
            if (error.message != null) {
                _this.alertMessage = "Communication error: " + error.message;
            }
            else {
                _this.alertMessage = "Communication error.";
            }
        });
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
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = this.formBuilder.group({
            userPattern: [""],
            pageLimit: [this.page.limit],
        });
        this.list();
        this.searchForm.get('userPattern').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            _this.page.userPattern = value;
            _this.list();
        });
        this.searchForm.get('pageLimit').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
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