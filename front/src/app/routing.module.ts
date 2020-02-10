import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { PageGuard } from './page.guard'

export const routes: Routes = [
    { path: "login", component: LoginComponent, data: { name: "Login" } },
    { path: "users", component: UsersComponent, canActivate: [PageGuard], data: { name: "Users" } },
    { path: "", component: HomeComponent, canActivate: [PageGuard],  data: { name: "Home" } },
    { path: "notfound", component: NotFoundComponent, canActivate: [PageGuard] },
    { path: "**", component: NotFoundComponent, canActivate: [PageGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
