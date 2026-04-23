import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { whatsappHref } from '../../../core/site.constants';

@Component({
  selector: 'app-whatsapp-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './whatsapp-cta.html',
})
export class WhatsappCta {
  label = input.required<string>();
  size = input<'sm' | 'md' | 'lg'>('md');
  fullWidth = input(false);

  readonly href = whatsappHref();

  protected readonly classes = computed(() => {
    const base =
      'group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] font-medium text-white shadow-sm ring-1 ring-inset ring-white/25 transition ' +
      'hover:brightness-95 hover:shadow-md active:scale-[0.99] ' +
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]';
    const fw = this.fullWidth() ? ' w-full' : '';
    switch (this.size()) {
      case 'sm':
        return base + ' px-4 py-2.5 text-sm' + fw;
      case 'lg':
        return base + ' min-h-[3.25rem] px-7 py-3.5 text-[0.95rem] leading-tight sm:px-8 sm:text-base' + fw;
      default:
        return base + ' px-5 py-3 text-sm' + fw;
    }
  });
}
