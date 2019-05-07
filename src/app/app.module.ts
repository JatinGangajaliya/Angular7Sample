import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetroBoardComponent } from './retro-board/retro-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewMoreModalContentComponent } from './view-more-modal-content/view-more-modal-content.component';
import { MessageService } from './services/message-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RetroBoardComponent,
    DashboardComponent,
    NavbarComponent,
    ViewMoreModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  entryComponents: [ViewMoreModalContentComponent] 
})
export class AppModule { }
