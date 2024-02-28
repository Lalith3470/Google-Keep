import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { CardcontainerComponent } from './components/cardcontainer/cardcontainer.component';


const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children:[
      {
        path : "trash",
        component : TrashComponent
      },
      {
        path : "notes",
        component : CardcontainerComponent
      },
      {
        path : "archive",
        component : ArchiveComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }