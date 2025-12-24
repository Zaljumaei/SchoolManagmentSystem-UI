import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme';
  private readonly lightClass = 'theme-light';
  private readonly darkClass = 'theme-dark';

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private overlay: OverlayContainer
  ) {}

  init() {
    const saved = localStorage.getItem(this.storageKey) ?? 'light';
    this.apply(saved === 'dark');
  }

  apply(isDark: boolean) {
    const html = this.doc.documentElement;
    const themeClass = isDark ? this.darkClass : this.lightClass;

    html.classList.remove(this.lightClass, this.darkClass);
    html.classList.add(themeClass);

    // wichtig für Dialog/Menu/Select (Overlay)
    const overlayClasses = this.overlay.getContainerElement().classList;
    overlayClasses.remove(this.lightClass, this.darkClass);
    overlayClasses.add(themeClass);

    localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
  }
}
