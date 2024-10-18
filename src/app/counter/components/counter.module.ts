import { NgModule } from '@angular/core'
import { CounterComponent } from './counter/counter.component';
import { count } from 'rxjs';


@NgModule({

  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]

})
export class CounterModule {}
