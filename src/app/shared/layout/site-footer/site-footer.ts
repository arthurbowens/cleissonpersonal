import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COPY, SITE } from '../../../core/site.constants';
import { WhatsappCta } from '../../ui/whatsapp-cta/whatsapp-cta';
import { InstagramCta } from '../../ui/instagram-cta/instagram-cta';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WhatsappCta, InstagramCta],
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  readonly site = SITE;
  readonly copy = COPY;
  readonly year = new Date().getFullYear();
}
