import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shared/header/header.component';
import { AppFooterComponent } from './shared/footer/footer.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { GridItemComponent } from './grid-view/grid-item/grid-item.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ListItemComponent } from './list-view/list-item/list-item.component';

import { Service } from './service/service';
import { Utils } from './shared/utils/utils';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    GridViewComponent,
    GridItemComponent,
    ListViewComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    Service,
    Utils
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
