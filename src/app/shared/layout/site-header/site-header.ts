import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COPY, NAV_LINKS, SITE } from '../../../core/site.constants';
import { WhatsappCta } from '../../ui/whatsapp-cta/whatsapp-cta';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WhatsappCta],
  templateUrl: './site-header.html',
})
export class SiteHeader {
  readonly site = SITE;
  readonly nav = NAV_LINKS;
  readonly copy = COPY;
}
