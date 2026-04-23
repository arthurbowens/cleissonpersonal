import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COPY } from '../../core/site.constants';
import { SiteHeader } from '../../shared/layout/site-header/site-header';
import { SiteFooter } from '../../shared/layout/site-footer/site-footer';
import { HeroSection } from '../../shared/sections/hero-section/hero-section';
import { PainSection } from '../../shared/sections/pain-section/pain-section';
import { AboutSection } from '../../shared/sections/about-section/about-section';
import { MethodSection } from '../../shared/sections/method-section/method-section';
import { AudienceSection } from '../../shared/sections/audience-section/audience-section';
import { TestimonialsSection } from '../../shared/sections/testimonials-section/testimonials-section';
import { CtaSection } from '../../shared/sections/cta-section/cta-section';
import { CtaMidBand } from '../../shared/ui/cta-mid-band/cta-mid-band';
import { WaMobileBar } from '../../shared/ui/wa-mobile-bar/wa-mobile-bar';

@Component({
  selector: 'app-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeader,
    SiteFooter,
    HeroSection,
    PainSection,
    CtaMidBand,
    AboutSection,
    MethodSection,
    AudienceSection,
    TestimonialsSection,
    CtaSection,
    WaMobileBar,
  ],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.css',
})
export class LandingPage {
  readonly copy = COPY;
}
