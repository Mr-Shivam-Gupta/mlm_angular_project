import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '@config';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { InConfiguration, AuthService, LanguageService } from '@core';
import { MemberService } from '@core/service/member.adbo.sbendervice';
import { AccountsService } from '@core/service/accounts.service';

interface Notifications {
  message: string;
  time: string;
  icon: string;
  color: string;
  status: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  public config!: InConfiguration;
  userImg?: string;
  homePage?: string;
  isNavbarCollapsed = true;
  flagvalue: string | string[] | undefined;
  countryName: string | string[] = [];
  langStoreValue?: string;
  defaultFlag?: string;
  isOpenSidebar?: boolean;
  docElement?: HTMLElement;
  isFullScreen = false;
  name:string=""
  userid:string=""
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private configService: ConfigService,
    private authService: AuthService,
    private router: Router,
    public languageService: LanguageService,
    private memService:AccountsService
  ) {
    super();
  }
  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
    { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
    { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
    { text: 'हिंदी', flag: 'assets/images/flags/in.jpg', lang: 'hi' },
  ];
 
  ngOnInit() {
    this.config = this.configService.configData;
    this.memService.personalinfo().then(data=>{
      let datax:any=data;
      this.name=datax.result[0].name;
      this.userid=datax.result[0].userid;
    })
    this.userImg = this.authService.currentUserValue.img;
    //this.name=this.authService.currentUserValue.firstName + " " + this.authService.currentUserValue.lastName;
    this.docElement = document.documentElement;

    this.homePage = 'dashboard/dashboard1';

    this.langStoreValue = localStorage.getItem('lang') as string;
    const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
    this.countryName = val.map((element) => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.defaultFlag = 'assets/images/flags/us.jpg';
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
    }
  }

  callFullscreen() {
    if (!this.isFullScreen) {
      if (this.docElement?.requestFullscreen != null) {
        this.docElement?.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
  }
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.langStoreValue = lang;
    this.languageService.setLanguage(lang);
  }
  mobileMenuSidebarOpen(event: Event, className: string) {
    const hasClass = (event.target as HTMLInputElement).classList.contains(
      className
    );
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }

    const hasClass2 = this.document.body.classList.contains('side-closed');
    if (hasClass2) {
      // this.renderer.removeClass(this.document.body, "side-closed");
      this.renderer.removeClass(this.document.body, 'submenu-closed');
    } else {
      // this.renderer.addClass(this.document.body, "side-closed");
      this.renderer.addClass(this.document.body, 'submenu-closed');
    }
  }
  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains('side-closed');
    if (hasClass) {
      this.renderer.removeClass(this.document.body, 'side-closed');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
      localStorage.setItem('collapsed_menu', 'false');
    } else {
      this.renderer.addClass(this.document.body, 'side-closed');
      this.renderer.addClass(this.document.body, 'submenu-closed');
      localStorage.setItem('collapsed_menu', 'true');
    }
  }
  logout() {
     this.authService.logout().then((res) => {
      let datax:any=res
      if (datax.result) {
        window.location.href = 'https://mlmcreatorsindia.com/outerapi/api.php';
        // this.router.navigateByUrl("")
      }
    });
  }
}
