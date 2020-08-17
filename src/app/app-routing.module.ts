import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [{ path: 'home', component: HomeComponent, data: { title: 'Home' } },
{ path: 'about', component: AboutComponent, data: { title: 'About' } },
{ path: 'projects', component: ProjectsComponent, data: { title: 'Projects' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
