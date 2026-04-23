import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COPY } from '../../../core/site.constants';

@Component({
  selector: 'app-audience-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './audience-section.html',
})
export class AudienceSection {
  readonly copy = COPY;
}
