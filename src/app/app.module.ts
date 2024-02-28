import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { NotecardComponent } from './components/notecard/notecard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { CardcontainerComponent } from './components/cardcontainer/cardcontainer.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ArchiveComponent,
    TrashComponent,
    NotecardComponent,
    SidenavComponent,
    CreatenoteComponent,
    CardcontainerComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }