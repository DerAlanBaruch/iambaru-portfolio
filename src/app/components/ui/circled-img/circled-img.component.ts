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
  template: `
    <div [ngStyle]="style()">
      <img
        [ngSrc]="src()"
        [alt]="alt()"
        loading="lazy"
        fill
      />
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        height: min-content;
      }
      div {
        position: relative;
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
