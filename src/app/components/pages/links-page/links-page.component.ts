import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CircledImgComponent } from '../../ui/circled-img/circled-img.component';

type Link = { name: string; url: string; icon: string };
type Info = { name: string; description: string; icon: string };

@Component({
  selector: 'app-links-page',
  standalone: true,
  imports: [CommonModule, CircledImgComponent],
  templateUrl: './links-page.component.html',
  styleUrl: './links-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksPageComponent {
  links = signal<Link[]>([
    {
      name: 'Github',
      url: 'https://github.com/DerAlanBaruch',
      icon: 'https://www.teorema.com.mx/wp-content/uploads/zorro-rojo.jpg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alan-baruch',
      icon: 'https://www.teorema.com.mx/wp-content/uploads/zorro-rojo.jpg',
    },
    {
      name: 'Portafolio',
      url: '/',
      icon: 'https://www.teorema.com.mx/wp-content/uploads/zorro-rojo.jpg',
    },
  ]);
  info = signal<Info>({
    name: 'I Am Baru',
    description: 'I am a web developer based on México, I love to build things.',
    icon: 'https://www.teorema.com.mx/wp-content/uploads/zorro-rojo.jpg',
  });
}
