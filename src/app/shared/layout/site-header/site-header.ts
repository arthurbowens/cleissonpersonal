import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COPY, NAV_LINKS, SITE, whatsappHref } from '../../../core/site.constants';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
})
export class SiteHeader {
  readonly site = SITE;
  readonly nav = NAV_LINKS;
  readonly copy = COPY;
  readonly wa = whatsappHref();
}
