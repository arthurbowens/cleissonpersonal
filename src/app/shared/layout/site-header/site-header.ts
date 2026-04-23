import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
  protected readonly menuOpen = signal(false);

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
