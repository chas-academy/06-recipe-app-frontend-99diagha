import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SavedComponent } from './saved/saved.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AfterLoginService } from './services/after-login.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'saved', component: SavedComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: RegisterComponent, canActivate: [AfterLoginService] },
  { path: 'login', component: LoginComponent, canActivate: [AfterLoginService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
