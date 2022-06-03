import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-pooling-empty-state',
  templateUrl: './empty-state.component.html',
})
export class EmptyStateComponent {
  @Input() text: string = ''
  @Input() iconName: string = ''
  @Input() iconSize: number = 4
}
