import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { RoutingModule } from './routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'

import { LayoutComponent } from './layout/layout.component'

import { MenuComponent } from './menu/menu.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

import { PagerComponent } from './pager/pager.component';

import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserOptionComponent } from './user-option/user-option.component';

import { AgentsComponent } from './agents/agents.component';
import { AgentOptionComponent } from './agent-option/agent-option.component';
import { AgentCreateComponent } from './agent-create/agent-create.component';
import { AgentUpdateComponent } from './agent-update/agent-update.component';
import { AgentDeleteComponent } from './agent-delete/agent-delete.component';

import { StoresComponent } from './stores/stores.component';
import { StoreOptionComponent } from './store-option/store-option.component';
import { StoreCreateComponent } from './store-create/store-create.component';
import { StoreUpdateComponent } from './store-update/store-update.component';
import { StoreDeleteComponent } from './store-delete/store-delete.component';

import { DumpSchedulesComponent } from './dump-schedules/dump-schedules.component';
import { DumpScheduleCreateComponent } from './dump-schedule-create/dump-schedule-create.component';
import { DumpScheduleUpdateComponent } from './dump-schedule-update/dump-schedule-update.component';
import { DumpScheduleOptionComponent } from './dump-schedule-option/dump-schedule-option.component';
import { DumpScheduleDeleteComponent } from './dump-schedule-delete/dump-schedule-delete.component'

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        MenuComponent,
        NotFoundComponent,
        LoginComponent,
        HomeComponent,

        UsersComponent,
        UserCreateComponent,
        UserUpdateComponent,
        UserDeleteComponent,
        UserOptionComponent,

        PagerComponent,

        AgentsComponent,
        AgentOptionComponent,
        AgentCreateComponent,
        AgentUpdateComponent,
        AgentDeleteComponent,

        StoresComponent,
        StoreOptionComponent,
        StoreCreateComponent,
        StoreUpdateComponent,
        StoreDeleteComponent,

        DumpSchedulesComponent,
        DumpScheduleCreateComponent,
        DumpScheduleUpdateComponent,
        DumpScheduleOptionComponent,
        DumpScheduleDeleteComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
