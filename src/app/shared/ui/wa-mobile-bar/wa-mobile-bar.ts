import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhatsappCta } from '../whatsapp-cta/whatsapp-cta';
import { COPY } from '../../../core/site.constants';

@Component({
  selector: 'app-wa-mobile-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WhatsappCta],
  templateUrl: './wa-mobile-bar.html',
})
export class WaMobileBar {
  readonly copy = COPY;
}
