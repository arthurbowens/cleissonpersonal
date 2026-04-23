import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { whatsappHref } from '../../../core/site.constants';

@Component({
  selector: 'app-whatsapp-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './whatsapp-cta.html',
})
export class WhatsappCta {
  /** Texto do botão */
  label = input.required<string>();
  size = input<'sm' | 'md' | 'lg'>('md');
  /** Largura total em telas pequenas (ex.: barra fixa no rodapé) */
  fullWidth = input(false);

  readonly href = whatsappHref();

  protected readonly classes = computed(() => {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white shadow-lg shadow-emerald-950/40 transition hover:bg-[#20BD5C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]';
    const fw = this.fullWidth() ? ' w-full' : '';
    switch (this.size()) {
      case 'sm':
        return base + ' px-4 py-2.5 text-sm' + fw;
      case 'lg':
        return base + ' px-7 py-4 text-base sm:px-9 sm:text-lg' + fw;
      default:
        return base + ' px-6 py-3.5 text-base' + fw;
    }
  });
}
