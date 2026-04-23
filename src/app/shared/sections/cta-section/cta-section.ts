import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COPY, SITE } from '../../../core/site.constants';
import { WhatsappCta } from '../../ui/whatsapp-cta/whatsapp-cta';
import { InstagramCta } from '../../ui/instagram-cta/instagram-cta';

@Component({
  selector: 'app-cta-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WhatsappCta, InstagramCta],
  templateUrl: './cta-section.html',
})
export class CtaSection {
  readonly site = SITE;
  readonly copy = COPY;
}
