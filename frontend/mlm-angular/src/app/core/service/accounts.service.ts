import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { environment } from 'environments/environment';

// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/x-www-form-urlencoded',
//       'Access-Control-Allow-Origin':'*'
//     })
//   };
const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin':'*'
  }),
};
@Injectable()
export class AccountsService {
  //  apiUrl='api.php';
  // ifscurl='https://ifsc.razorpay.com/';
  // authurl='https://www.coinbdex.com/api/members.php';

  //private token :string=""
  constructor(private http: HttpClient, private _authServer: AuthService) {}
  token = this._authServer.currentUserValue.token;
  authurl = environment.apiUrl;

  async personalinfo() {
    let cc = [{ route: 'personalinfo' }];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async getpersonalinfoforteamedit(cuserid: string) {
    let cc = [{ route: 'getpersonalinfoforteamedit' }, [{ cuserid: cuserid }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }
  async sendupdateotp(email: string) {
    let cc = [{ route: 'sendupdateotp' }, [{ email: email }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async sendsattlementotp() {
    let cc = [{ route: 'sendsattlementotp' }, []];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async sendwithdrawotp() {
    let cc = [{ route: 'sendwithdrawotp' }, [{}]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async sendtransferotp() {
    let cc = [{ route: 'sendtransferotp' }, [{}]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async treeview(userid: string) {
    let cc = [{ route: 'treeview' }, [{ tuserid: userid }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async searchtreeview(userid: string) {
    let cc = [{ route: 'searchtreeview' }, [{ searchuserid: userid }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async userbyid(userid: string) {
    let cc = [{ route: 'getpersonalinfobyid' }, [{ searchuserid: userid }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async verifyidforleveltopup(userid: string) {
    let cc = [{ route: 'verifyidforleveltopup' }, [{ searchuserid: userid }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async topup(topupamt: number, cuserid: string) {
    let cc = [{ route: 'topup' }, [{ topupamt: topupamt, cuserid: cuserid }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async verify(mobileotp: string, emailotp: string) {
    let cc = [
      { route: 'verify' },
      [{ mobileotp: mobileotp, emailotp: emailotp }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async sendemailverificationotp() {
    let cc = [{ route: 'sendemailverificationotp' }, []];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async sendmobileverificationotp() {
    let cc = [{ route: 'sendmobileverificationotp' }, []];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async stack(topupamt: number, durationid: number) {
    let cc = [
      { route: 'stack' },
      [{ topupamt: topupamt, durationid: durationid }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async cancelstack(rowid: number) {
    let cc = [{ route: 'cancelstack' }, [{ rowid: rowid }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async stackoptionlist() {
    let cc = [{ route: 'stackoptionlist' }, []];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async transferfund(topupamt: number, cuserid: string, otp: string) {
    let cc = [
      { route: 'transferfund' },
      [{ amount: topupamt, cuserid: cuserid, otp: otp }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async reqsattlement(topupamt: number, cuserid: string, otp: string) {
    let cc = [
      { route: 'reqsattlement' },
      [{ amount: topupamt, cuserid: cuserid, otp: otp }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }
  async topupbywallet(topupamt: number, cuserid: string) {
    let cc = [
      { route: 'topupbywallet' },
      [{ topupamt: topupamt, cuserid: cuserid }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async leveltopup(topupamt: number, cuserid: string) {
    let cc = [
      { route: 'leveltopup' },
      [{ topupamt: topupamt, cuserid: cuserid }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }
  async leveltopupbywallet(topupamt: number, cuserid: string) {
    let cc = [
      { route: 'leveltopupbywallet' },
      [{ topupamt: topupamt, cuserid: cuserid }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async magictopup(topupamt: number, cuserid: string) {
    let cc = [
      { route: 'magictopup' },
      [{ topupamt: topupamt, cuserid: cuserid }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }
  async magicpool(page: number, pagesize: number) {
    let cc = [{ route: 'magicpool' }, [{ page: page, pagesize: pagesize }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async magictopupbywallet(topupamt: number, cuserid: string) {
    let cc = [
      { route: 'magictopupbywallet' },
      [{ topupamt: topupamt, cuserid: cuserid }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async topup1(topupamt: number, level: number) {
    let cc = [{ route: 'retopup1' }, [{ topupamt: topupamt, level: level }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async topup2(topupamt: number, level: number) {
    let cc = [{ route: 'retopup2' }, [{ topupamt: topupamt, level: level }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async reentry(level: number) {
    let cc = [{ route: 'reentry' }, [{ level: level }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async currencylist() {
    return await this.http
      .get('https://account-api.nowpayments.io/available-currencies')
      .toPromise();
  }

  async topuplist() {
    let cc = [{ route: 'topuplist' }];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async levelpayout() {
    let cc = [{ route: 'levelpayout' }];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async topuplistroi(topupid: number, page: number, pagesize: number) {
    let cc = [
      { route: 'topuplistroi' },
      [{ topupid: topupid, page: page, pagesize: pagesize }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async downlinestatus() {
    let cc = [{ route: 'downlinestatus' }];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }
  async directdownlinelist(page: number, pagesize: number) {
    let cc = [
      { route: 'directdownlinelist' },
      [{ page: page, pagesize: pagesize }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async diamondlevelmembers(level: number, page: number, pagesize: number) {
    let cc = [
      { route: 'diamondlevelmembers' },
      [{ level: level, page: page, pagesize: pagesize }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async planlist() {
    ////this.token=this._authServer.getAuthorizationToken()
    let cc = [{ route: 'planlist' }];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }
  async topupbalance() {
    ////this.token=this._authServer.getAuthorizationToken()
    let cc = [{ route: 'topupbalance' }];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async directmembers() {
    let cc = [{ route: 'directmembers' }];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async downlinelist(level: number, page: number, pagesize: number) {
    let cc = [
      { route: 'downlinelist' },
      [{ level: level, page: page, pagesize: pagesize }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async teambusinesslist(
    findparam: number,
    page: number,
    pagesize: number,
    fromdate: string,
    uptodate: string,
    sortby: string
  ) {
    let cc = [
      { route: 'teambusiness' },
      [
        {
          findparam: findparam,
          sortby: sortby,
          page: page,
          pagesize: pagesize,
          fromdate: fromdate,
          uptodate: uptodate,
        },
      ],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async directbusiness(
    findparam: string,
    page: number,
    pagesize: number,
    fromdate: string,
    uptodate: string
  ) {
    let cc = [
      { route: 'directbusiness' },
      [
        {
          findparam: findparam,
          page: page,
          pagesize: pagesize,
          fromdate: fromdate,
          uptodate: uptodate,
        },
      ],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async directteambusiness(
    findparam: string,
    page: number,
    pagesize: number,
    fromdate: string,
    uptodate: string
  ) {
    let cc = [
      { route: 'directteambusiness' },
      [
        {
          findparam: findparam,
          page: page,
          pagesize: pagesize,
          fromdate: fromdate,
          uptodate: uptodate,
        },
      ],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async withdrawrequest(amount: number, otp: number) {
    let cc = [{ route: 'withdrawrequest' }, [{ topupamt: amount, otp: otp }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async payoutlist(page: number, pagesize: number) {
    let cc = [{ route: 'payoutlist' }, [{ page: page, pagesize: pagesize }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async withdrawlist(page: number, pagesize: number) {
    let cc = [{ route: 'withdrawlist' }, [{ page: page, pagesize: pagesize }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async payoutsummary(page: number, pagesize: number) {
    let cc = [{ route: 'payoutsummary' }, [{ page: page, pagesize: pagesize }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async stacklist(page: number, pagesize: number) {
    let cc = [{ route: 'stacklist' }, [{ page: page, pagesize: pagesize }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async myaccountsdx(page: number, pagesize: number) {
    let cc = [{ route: 'myaccountsdx' }, [{ page: page, pagesize: pagesize }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async myaccounttron(page: number, pagesize: number) {
    let cc = [{ route: 'myaccounttron' }, [{ page: page, pagesize: pagesize }]];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async magicdeduction(page: number, pagesize: number) {
    let cc = [
      { route: 'magicdeduction' },
      [{ page: page, pagesize: pagesize }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async changepassword(oldpwd: string, newpwd: string) {
    let cc = [
      { route: 'changepassword' },
      [{ oldpassword: oldpwd, newpassword: newpwd }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async updateprofile(address: string, otp: string) {
    let cc = [
      { route: 'updatepersonalinfo' },
      [{ address: address, otp: otp }],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async updateteamprofile(
    userid: string,
    email: string,
    address: string,
    password: string,
    name: string,
    mobile: string
  ) {
    let cc = [
      { route: 'updateteampersonalinfo' },
      [
        {
          cuserid: userid,
          email: email,
          address: address,
          password: password,
          name: name,
          mobile: mobile,
        },
      ],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }

  async updateprofilered(
    address: string,
    name: string,
    mobile: string,
    otp: number,
    email: StringConstructor
  ) {
    let cc = [
      { route: 'updatepersonalinfored' },
      [
        {
          address: address,
          name: name,
          mobile: mobile,
          otp: otp,
          email: email,
        },
      ],
    ];
    return await lastValueFrom(this.http.post(this.authurl, cc, httpOptions));
  }
}
