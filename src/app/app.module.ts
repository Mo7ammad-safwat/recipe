import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadarComponent } from './headar/headar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetalsComponent } from './recipe/recipe-detals/recipe-detals.component';
import { ShopeingLestComponent } from './shopeing-lest/shopeing-lest.component';
import { ShopeingEditComponent } from './shopeing-lest/shopeing-edit/shopeing-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItmComponent } from './recipe/recipe-list/recipe-itm/recipe-itm.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadarComponent,
    RecipeComponent,
    RecipeDetalsComponent,
    RecipeItmComponent,
    ShopeingLestComponent,
    ShopeingEditComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
