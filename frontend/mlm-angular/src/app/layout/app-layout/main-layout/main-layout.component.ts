import { Direction } from '@angular/cdk/bidi';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';
import { DirectionService, InConfiguration } from '@core';
import { ConfigService } from '@config';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: [],
})
export class MainLayoutComponent implements AfterViewInit {
  direction!: Direction;
  public config!: InConfiguration;
  constructor(
    private directoryService: DirectionService,
    private configService: ConfigService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.config = this.configService.configData;
    this.directoryService.currentData.subscribe((currentData) => {
      if (currentData) {
        this.direction = currentData === 'ltr' ? 'ltr' : 'rtl';
      } else {
        if (localStorage.getItem('isRtl')) {
          if (localStorage.getItem('isRtl') === 'true') {
            this.direction = 'rtl';
          } else if (localStorage.getItem('isRtl') === 'false') {
            this.direction = 'ltr';
          }
        } else {
          if (this.config) {
            if (this.config.layout.rtl === true) {
              this.direction = 'rtl';
              localStorage.setItem('isRtl', 'true');
            } else {
              this.direction = 'ltr';
              localStorage.setItem('isRtl', 'false');
            }
          }
        }
      }
    });
  }
  ngAfterViewInit(): void {
    //------------ set varient start----------------
    if (localStorage.getItem('theme')) {
      this.renderer.removeClass(this.document.body, this.config.layout.variant);
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem('theme') as string
      );
    } else {
      this.renderer.addClass(this.document.body, this.config.layout.variant);
      localStorage.setItem('theme', this.config.layout.variant);
    }

    //------------ set varient end----------------

    //------------ set theme start----------------

    if (localStorage.getItem('choose_skin')) {
      this.renderer.removeClass(
        this.document.body,
        'theme-' + this.config.layout.theme_color
      );

      this.renderer.addClass(
        this.document.body,
        localStorage.getItem('choose_skin') as string
      );
      localStorage.setItem(
        'choose_skin_active',
        (localStorage.getItem('choose_skin') as string).substring(6)
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        'theme-' + this.config.layout.theme_color
      );

      localStorage.setItem(
        'choose_skin',
        'theme-' + this.config.layout.theme_color
      );
      localStorage.setItem(
        'choose_skin_active',
        this.config.layout.theme_color
      );
    }

    //------------ set theme end----------------

    //------------ set RTL start----------------

    if (localStorage.getItem('isRtl')) {
      if (localStorage.getItem('isRtl') === 'true') {
        this.setRTLSettings();
      } else if (localStorage.getItem('isRtl') === 'false') {
        this.setLTRSettings();
      }
    } else {
      if (this.config.layout.rtl == true) {
        this.setRTLSettings();
      } else {
        this.setLTRSettings();
      }
    }
    //------------ set RTL end----------------

    //------------ set sidebar color start----------------

    if (localStorage.getItem('menuOption')) {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem('menuOption') as string
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        'menu_' + this.config.layout.sidebar.backgroundColor
      );
      localStorage.setItem(
        'menuOption',
        'menu_' + this.config.layout.sidebar.backgroundColor
      );
    }

    //------------ set sidebar color end----------------

    //------------ set logo color start----------------

    if (localStorage.getItem('choose_logoheader')) {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem('choose_logoheader') as string
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        'logo-' + this.config.layout.logo_bg_color
      );
    }

    //------------ set logo color end----------------

    //------------ set sidebar collapse start----------------
    if (localStorage.getItem('collapsed_menu')) {
      if (localStorage.getItem('collapsed_menu') === 'true') {
        this.renderer.addClass(this.document.body, 'side-closed');
        this.renderer.addClass(this.document.body, 'submenu-closed');
      }
    } else {
      if (this.config.layout.sidebar.collapsed == true) {
        this.renderer.addClass(this.document.body, 'side-closed');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        localStorage.setItem('collapsed_menu', 'true');
      } else {
        this.renderer.removeClass(this.document.body, 'side-closed');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        localStorage.setItem('collapsed_menu', 'false');
      }
    }

    //------------ set sidebar collapse end----------------
  }

  setRTLSettings() {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    this.renderer.addClass(this.document.body, 'rtl');

    localStorage.setItem('isRtl', 'true');
  }
  setLTRSettings() {
    document.getElementsByTagName('html')[0].removeAttribute('dir');
    this.renderer.removeClass(this.document.body, 'rtl');

    localStorage.setItem('isRtl', 'false');
  }
}
