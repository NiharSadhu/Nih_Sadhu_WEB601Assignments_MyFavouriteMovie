import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TypeFilterPipe } from './type-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';

// Assignment 8
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContentDetailComponent } from './content-detail/content-detail.component';

// Assignment 9
import { AppRoutingModule } from './app-routing.module';






@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    TypeFilterPipe,
    HoverAffectDirective,
    ModifyContentComponent,
    AddContentDialogComponent,
    MatButtonModule,
      MatInputModule,
      ContentDetailComponent,
      AppRoutingModule
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
