import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  AfterViewInit,
  Renderer2,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ConfigService } from '@config';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { InConfiguration, DirectionService, RightSidebarService } from '@core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit, AfterViewInit
{
  selectedBgColor = 'white';
  maxHeight!: string;
  maxWidth!: string;
  showpanel = false;
  isOpenSidebar!: boolean;
  isDarkSidebar = false;
  isDarTheme = false;
  public innerHeight?: number;
  headerHeight = 60;
  isRtl = false;
  public config!: InConfiguration;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private rightSidebarService: RightSidebarService,
    private configService: ConfigService,
    private directionService: DirectionService
  ) {
    super();
  }
  ngOnInit() {
    this.config = this.configService.configData;
    this.subs.sink = this.rightSidebarService.sidebarState.subscribe(
      (isRunning) => {
        this.isOpenSidebar = isRunning;
      }
    );
    this.setRightSidebarWindowHeight();
  }

  ngAfterViewInit() {
    this.selectedBgColor = localStorage.getItem('choose_skin_active') as string;

    if (localStorage.getItem('menuOption')) {
      if (localStorage.getItem('menuOption') === 'menu_dark') {
        this.isDarkSidebar = true;
      } else if (localStorage.getItem('menuOption') === 'menu_light') {
        this.isDarkSidebar = false;
      }
    }

    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        this.isDarTheme = true;
      } else if (localStorage.getItem('theme') === 'light') {
        this.isDarTheme = false;
      }
    }

    if (localStorage.getItem('isRtl')) {
      if (localStorage.getItem('isRtl') === 'true') {
        this.isRtl = true;
      } else if (localStorage.getItem('isRtl') === 'false') {
        this.isRtl = false;
      }
    }
  }

  selectTheme(e: string) {
    this.selectedBgColor = e;
    const prevTheme = this.elementRef.nativeElement
      .querySelector('.settingSidebar .choose-theme li.active')
      .getAttribute('data-theme');
    this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
    this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
    localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
    localStorage.setItem('choose_skin_active', this.selectedBgColor);
  }
  lightSidebarBtnClick() {
    this.renderer.removeClass(this.document.body, 'menu_dark');
    this.renderer.removeClass(this.document.body, 'logo-black');
    this.renderer.addClass(this.document.body, 'menu_light');
    this.renderer.addClass(this.document.body, 'logo-white');
    const menuOption = 'menu_light';
    localStorage.setItem('choose_logoheader', 'logo-white');
    localStorage.setItem('menuOption', menuOption);
  }
  darkSidebarBtnClick() {
    this.renderer.removeClass(this.document.body, 'menu_light');
    this.renderer.removeClass(this.document.body, 'logo-white');
    this.renderer.addClass(this.document.body, 'menu_dark');
    this.renderer.addClass(this.document.body, 'logo-black');
    const menuOption = 'menu_dark';
    localStorage.setItem('choose_logoheader', 'logo-black');
    localStorage.setItem('menuOption', menuOption);
  }
  lightThemeBtnClick() {
    this.renderer.removeClass(this.document.body, 'dark');
    this.renderer.removeClass(this.document.body, 'submenu-closed');
    this.renderer.removeClass(this.document.body, 'menu_dark');
    this.renderer.removeClass(this.document.body, 'logo-black');
    if (localStorage.getItem('choose_skin')) {
      this.renderer.removeClass(
        this.document.body,
        localStorage.getItem('choose_skin') as string
      );
    } else {
      this.renderer.removeClass(
        this.document.body,
        'theme-' + this.config.layout.theme_color
      );
    }

    this.renderer.addClass(this.document.body, 'light');
    this.renderer.addClass(this.document.body, 'submenu-closed');
    this.renderer.addClass(this.document.body, 'menu_light');
    this.renderer.addClass(this.document.body, 'logo-white');
    this.renderer.addClass(this.document.body, 'theme-white');
    const theme = 'light';
    const menuOption = 'menu_light';
    this.selectedBgColor = 'white';
    this.isDarkSidebar = false;
    localStorage.setItem('choose_logoheader', 'logo-white');
    localStorage.setItem('choose_skin', 'theme-white');
    localStorage.setItem('theme', theme);
    localStorage.setItem('menuOption', menuOption);
  }
  darkThemeBtnClick() {
    this.renderer.removeClass(this.document.body, 'light');
    this.renderer.removeClass(this.document.body, 'submenu-closed');
    this.renderer.removeClass(this.document.body, 'menu_light');
    this.renderer.removeClass(this.document.body, 'logo-white');
    if (localStorage.getItem('choose_skin')) {
      this.renderer.removeClass(
        this.document.body,
        localStorage.getItem('choose_skin') as string
      );
    } else {
      this.renderer.removeClass(
        this.document.body,
        'theme-' + this.config.layout.theme_color
      );
    }
    this.renderer.addClass(this.document.body, 'dark');
    this.renderer.addClass(this.document.body, 'submenu-closed');
    this.renderer.addClass(this.document.body, 'menu_dark');
    this.renderer.addClass(this.document.body, 'logo-black');
    this.renderer.addClass(this.document.body, 'theme-black');
    const theme = 'dark';
    const menuOption = 'menu_dark';
    this.selectedBgColor = 'black';
    this.isDarkSidebar = true;
    localStorage.setItem('choose_logoheader', 'logo-black');
    localStorage.setItem('choose_skin', 'theme-black');
    localStorage.setItem('theme', theme);
    localStorage.setItem('menuOption', menuOption);
  }
  setRightSidebarWindowHeight() {
    this.innerHeight = window.innerHeight;
    const height = this.innerHeight - this.headerHeight;
    this.maxHeight = height + '';
    this.maxWidth = '500px';
  }
  onClickedOutside(event: Event) {
    const button = event.target as HTMLButtonElement;
    if (button.id !== 'settingBtn') {
      if (this.isOpenSidebar === true) {
        this.toggleRightSidebar();
      }
    }
  }
  toggleRightSidebar(): void {
    this.rightSidebarService.setRightSidebar(
      (this.isOpenSidebar = !this.isOpenSidebar)
    );
  }
  switchDirection(event: MatSlideToggleChange) {
    const isrtl = String(event.checked);
    if (
      isrtl === 'false' &&
      document.getElementsByTagName('html')[0].hasAttribute('dir')
    ) {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      this.renderer.removeClass(this.document.body, 'rtl');
      this.directionService.updateDirection('ltr');
    } else if (
      isrtl === 'true' &&
      !document.getElementsByTagName('html')[0].hasAttribute('dir')
    ) {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      this.renderer.addClass(this.document.body, 'rtl');
      this.directionService.updateDirection('rtl');
    }
    localStorage.setItem('isRtl', isrtl);
    this.isRtl = event.checked;
  }
  setRTLSettings() {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    this.renderer.addClass(this.document.body, 'rtl');
    this.isRtl = true;
    localStorage.setItem('isRtl', 'true');
  }
  setLTRSettings() {
    document.getElementsByTagName('html')[0].removeAttribute('dir');
    this.renderer.removeClass(this.document.body, 'rtl');
    this.isRtl = false;
    localStorage.setItem('isRtl', 'false');
  }
}
