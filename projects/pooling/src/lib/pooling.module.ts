import { NgModule } from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import {EmptyStateComponent} from './empty-state/empty-state.component'
import {LoadingStateComponent} from './loading-state/loading-state.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {StatsCardComponent} from './stats-card/stats-card.component'
import {MatCardModule} from '@angular/material/card'
import {MatTooltipModule} from '@angular/material/tooltip'



@NgModule({
  declarations: [
    EmptyStateComponent,
    LoadingStateComponent,
    StatsCardComponent,
  ],
  imports: [
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
  ],
  exports: [
    EmptyStateComponent,
    LoadingStateComponent,
    StatsCardComponent,
  ]
})
export class PoolingModule { }
