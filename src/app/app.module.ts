import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YumeanimeComponent } from './pages/projects/yumeanime/yumeanime.component';
import { BoardComponent } from './pages/board/board.component';
import { GalorComponent } from './pages/projects/galor/galor.component';
import { FallonComponent } from './pages/projects/fallon/fallon.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    YumeanimeComponent,
    BoardComponent,
    GalorComponent,
    FallonComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
