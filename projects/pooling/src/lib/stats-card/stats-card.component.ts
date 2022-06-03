import {Component, Input} from '@angular/core'

@Component({
  selector: 'lib-pooling-stats-card',
  templateUrl: './stats-card.component.html',
})
export class StatsCardComponent {
  @Input() title: string = ''
  @Input() helpText?: string
}
