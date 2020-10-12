import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BaseModule } from './base/base.module';
import { BaseComponent } from './base/base.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    BaseComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    BaseModule,
    SharedModule
  ]
})
export class FeaturesModule { }
