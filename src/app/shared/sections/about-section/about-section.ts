import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COPY } from '../../../core/site.constants';

@Component({
  selector: 'app-about-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-section.html',
})
export class AboutSection {
  readonly copy = COPY;
}
