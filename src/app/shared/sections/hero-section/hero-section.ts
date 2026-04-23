import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COPY, SITE } from '../../../core/site.constants';
import { WhatsappCta } from '../../ui/whatsapp-cta/whatsapp-cta';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WhatsappCta],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  readonly site = SITE;
  readonly copy = COPY;
}
