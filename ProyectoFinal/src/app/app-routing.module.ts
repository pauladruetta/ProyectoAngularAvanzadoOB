import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailPageComponent } from './components/pages/contacts-detail-page/contacts-detail-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { RandomContactPageComponent } from './components/pages/random-contact-page/random-contact-page.component';
import { TasksPageComponent } from './components/pages/tasks-page/tasks-page.component';
import { TaskComponent } from './components/task/task.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        component: HomePageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contactos',
        component: ContactsPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contactos/:id',
        component: ContactsDetailPageComponent
      },
      {
        path: 'tareas',
        component: TasksPageComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
