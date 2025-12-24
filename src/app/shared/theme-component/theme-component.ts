import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from '../../core/services/theme.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  standalone: true,
  selector: 'app-theme-component',
  imports: [
    MatSidenavContainer,
    MatToolbar,
    MatSidenavContent,
    MatSlideToggle,
    ReactiveFormsModule
  ],
  templateUrl: './theme-component.html',
  styleUrl: './theme-component.scss'
})
export class ThemeComponent implements OnInit {
  switchTheme = new FormControl(false);

  constructor(private theme: ThemeService) {}

  ngOnInit() {
    this.switchTheme.valueChanges.subscribe(v => {
      this.theme.apply(!!v);
    });
  }
}

