import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-method-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './method-section.html',
})
export class MethodSection {}
