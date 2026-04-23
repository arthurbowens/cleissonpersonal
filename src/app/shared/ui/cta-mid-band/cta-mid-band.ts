import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Apenas título: evita 2 botões idênticos (verde) e repetição em 3 faixas.
 * O funil fica com hero + bloco final + atalho mobile.
 */
@Component({
  selector: 'app-cta-mid-band',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cta-mid-band.html',
})
export class CtaMidBand {
  title = input.required<string>();
}
