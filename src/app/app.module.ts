import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

import { HttpClientModule}  from "@angular/common/http";
import { DocumentPipePipe } from './shared/document-pipe.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    SidebarComponent,
    DocumentPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
