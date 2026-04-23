import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PAIN_POINTS } from '../../../core/site.constants';

@Component({
  selector: 'app-pain-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pain-section.html',
})
export class PainSection {
  readonly points = PAIN_POINTS;
}
