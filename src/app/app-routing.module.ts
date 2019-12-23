import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch:'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: '', redirectTo: 'tweets', pathMatch: 'full' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'tweets', loadChildren: './modules/tweets/tweets.module#TweetsModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
