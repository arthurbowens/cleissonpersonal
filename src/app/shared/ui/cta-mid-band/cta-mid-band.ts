import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WhatsappCta } from '../whatsapp-cta/whatsapp-cta';
import { COPY } from '../../../core/site.constants';

@Component({
  selector: 'app-cta-mid-band',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WhatsappCta],
  templateUrl: './cta-mid-band.html',
})
export class CtaMidBand {
  readonly copy = COPY;
  /** Título à esquerda da faixa */
  title = input.required<string>();
  /** Se true, mostra os dois botões WhatsApp (textos fortes) */
  dualWhatsapp = input(true);
}
