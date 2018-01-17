import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { UserlistComponent } from './components/userlist/userlist.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatRadioModule } from '@angular/material';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { AbbrnumPipe } from './pipes/abbrnum/abbrnum.pipe';
import { StatusPipe } from './pipes/status/status.pipe';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    UserlistComponent,
    LoginComponent,
    ContactComponent,
    ProductComponent,
    HighlightDirective,
    AbbrnumPipe,
    StatusPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatRadioModule,
    RouterModule.forRoot([
      { path: 'home', component: MainComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'login', component: LoginComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  providers: [UserService, ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
