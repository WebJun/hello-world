import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  { path: '',  component: UserListComponent },
  { path: 'list',  component: UserListComponent },
  { path: 'user/add', component: UserAddComponent },
  { path: 'user/view/:username', component: UserViewComponent },
  { path: 'edit/:username',  component: UserEditComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
