import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import {ThemeComponent} from './shared/theme-component/theme-component';
import {ThemeService} from './core/services/theme.service';
import {ThemeComponent} from './shared/theme-component/theme-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private theme: ThemeService) {
    this.theme.init();
  }
  protected readonly title = signal('SchoolManagmentSystemFrontend1');
}
