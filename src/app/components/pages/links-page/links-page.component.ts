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
      icon: './assets/images/github.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alan-baruch',
      icon: './assets/images/linkedin.svg',
    },
    {
      name: 'Portfolio',
      url: '/',
      icon: './assets/images/web.svg',
    },
    {
      name: "Curriculum (PDF)",
      url: "https://drive.google.com/file/d/1Tc-ezioaW6bk9GBsBqBN0-CNrfAC0PBt/view?usp=drive_link",
      icon: './assets/images/user.svg',
    }
  ]);
  info = signal<Info>({
    name: 'I Am Baru',
    description: 'I am a web developer based on México, I love to build things.',
    icon: 'https://www.teorema.com.mx/wp-content/uploads/zorro-rojo.jpg',
  });
}
