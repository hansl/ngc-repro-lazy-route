
      import { RouterModule } from '@angular/router';
      import { ReactiveFormsModule } from '@angular/forms';
    import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import * as lazy_module_1 from './lazy/lazy.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      RouterModule.forRoot([{ path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule" }]),
      // lazy_module_1.LazyModule,
      ReactiveFormsModule,

    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
