import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'circled-img',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `<img
    [ngSrc]="src()"
    [alt]="alt()"
    [width]="size()"
    [height]="size()"
    [ngStyle]="style()"
    loading="lazy"
  />`,
  styles: [
    `
      :host {
        display: flex;
        height: min-content;
      }

      img {
        border-radius: 50%;
        object-fit: cover;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircledImgComponent {
  src = input.required<string | URL>();
  alt = input<string>('');
  size = input.required<number>();
  style = computed(() => ({
    width: `${this.size()}px`,
    height: `${this.size()}px`,
  }));
}
