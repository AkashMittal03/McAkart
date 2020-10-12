import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellRoutingModule } from './app-shell-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppShellRoutingModule,
    SharedModule
  ]
})
export class AppShellModule { }
