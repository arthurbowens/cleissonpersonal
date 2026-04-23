import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TESTIMONIALS } from '../../../core/site.constants';

@Component({
  selector: 'app-testimonials-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials-section.html',
})
export class TestimonialsSection {
  readonly items = TESTIMONIALS;
}
