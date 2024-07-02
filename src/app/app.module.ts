import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisordocComponent } from './visordoc/visordoc.component';
import { DocumentEditorModule, DocumentEditorContainerModule, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
@NgModule({
  declarations: [
    AppComponent,
    VisordocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentEditorModule,
    DocumentEditorContainerModule,
    ButtonModule,
  ],
  providers: [ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
