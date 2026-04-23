import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../../core/site.constants';

let instagramGradientSeq = 0;

@Component({
  selector: 'app-instagram-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './instagram-cta.html',
})
export class InstagramCta {
  readonly url = SITE.instagramProfileUrl;
  readonly gradientId = `ig-grad-${++instagramGradientSeq}`;
}
