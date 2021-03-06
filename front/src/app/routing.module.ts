import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component'

import { HomeComponent } from './home/home.component'
import { UsersComponent } from './users/users.component'

import { AgentsComponent } from './agents/agents.component'
import { StoresComponent } from './stores/stores.component'
import { DumpSchedulesComponent } from './dump-schedules/dump-schedules.component'

import { NotFoundComponent } from './not-found/not-found.component'

import { PageGuard } from './page.guard'

export const routes: Routes = [
    { path: "login", component: LoginComponent, data: { name: "Login" } },
    { path: "users", component: UsersComponent, canActivate: [PageGuard], data: { name: "Users" } },
    { path: "agents", component: AgentsComponent, canActivate: [PageGuard], data: { name: "Agents" } },
    { path: "stores", component: StoresComponent, canActivate: [PageGuard], data: { name: "Stores" } },
    { path: "schedules", component: DumpSchedulesComponent, canActivate: [PageGuard], data: { name: "DumpSchedules" } },

    { path: "", component: HomeComponent, canActivate: [PageGuard],  data: { name: "Home" } },
    { path: "notfound", component: NotFoundComponent, canActivate: [PageGuard] },
    { path: "**", component: NotFoundComponent, canActivate: [PageGuard] },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
