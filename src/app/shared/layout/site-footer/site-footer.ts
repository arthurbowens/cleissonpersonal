import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../../core/site.constants';
import { InstagramCta } from '../../ui/instagram-cta/instagram-cta';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InstagramCta],
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
