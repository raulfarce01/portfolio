import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BoardComponent } from './pages/board/board.component';
import { YumeanimeComponent } from './pages/projects/yumeanime/yumeanime.component';
import { FallonComponent } from './pages/projects/fallon/fallon.component';
import { GalorComponent } from './pages/projects/galor/galor.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  
  {
    path: "",
    component: MainComponent
  },
  {
    path: "board",
    component: BoardComponent
  },
  {
    path: "yumeanime",
    component: YumeanimeComponent
  },
  {
    path: "fallon",
    component: FallonComponent
  },
  {
    path: "galor",
    component: GalorComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "not-found"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
