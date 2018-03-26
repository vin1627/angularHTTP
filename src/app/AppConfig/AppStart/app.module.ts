import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }  from '@angular/forms';
import { HomeComponent }  from '../../Views/Home/home.component';
import { GetList }  from '../../Services/getList.services';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ HomeComponent ],
  bootstrap:    [ HomeComponent ],
  providers: [ GetList ]
})
export class AppModule { }
