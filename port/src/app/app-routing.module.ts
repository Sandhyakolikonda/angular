import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AchivementsComponent } from './pages/achivements/achivements.component';
import { StrengthsComponent } from './pages/strengths/strengths.component';
import { EducationComponent } from './pages/education/education.component';
import { InternshipComponent } from './pages/internship/internship.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'About', component:AboutComponent,
    children:[
      {
        path:'Education',component:EducationComponent
      },
      {
        path:'Strengths',component:StrengthsComponent
      },
      {
        path:'Achivements',component:AchivementsComponent
      },
      {
        path:'Internship',component:InternshipComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
