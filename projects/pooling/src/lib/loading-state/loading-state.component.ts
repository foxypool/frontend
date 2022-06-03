import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-pooling-loading-state',
  templateUrl: './loading-state.component.html',
})
export class LoadingStateComponent {
  @Input() spinnerDiameterInPx: number = 70
}
