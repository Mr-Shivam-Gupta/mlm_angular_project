import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { firstValueFrom, lastValueFrom } from 'rxjs';
// import {AuthService} from './auth.service';



// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/x-www-form-urlencoded',
//       'Access-Control-Allow-Origin':'*'
//     })
//   };
const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/x-www-form-urlencoded',
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};
  @Injectable()
  export class MemberService {
    
      apiUrl=environment.apiUrl;
      ifscurl='https://ifsc.razorpay.com/';
      authurl=environment.apiUrl;
     
    //private token :string=""
  constructor(private http: HttpClient) { }
  token=""
  





async personalinfo()
{
 ////this.token=this._authServer.getAuthorizationToken()
 let cc=[{"route":"getpersonalinfobyid"}]
 return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
 
}




async setallowautopool(allow: any)
{
 //this.token=this._authServer.getAuthorizationToken()
 let cc=[{"route":"setallowautopool"},[{'allowautopool':allow}]]
 return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
 
}

async usedpins(page: number, pagesize: number) {
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"usedpins"},[{"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
}

async transferredpins(page: number, pagesize: number) {
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"transferredpins"},[{"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
}

async transferpin(userid:string,planid:number,qty:number)
{
 //this.token=this._authServer.getAuthorizationToken()
 let cc=[{"route":"transferpins"},[{"auserid":userid,"planid":planid,"qty":qty}]]
 return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
 
}


async checkuserid(userid:string)
{
 //this.token=this._authServer.getAuthorizationToken()
 let cc=[{"route":"checkuserid"},[{"auserid":userid}]]
 return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
 
}

async checkuseridapproved(userid:string)
{
 //this.token=this._authServer.getAuthorizationToken()
 let cc=[{"route":"checkuseridapproved"},[{"auserid":userid}]]
 return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
 
}

async activateuser(userid:string,planid:number)
{
 //this.token=this._authServer.getAuthorizationToken()
 let cc=[{"route":"activateuser"},[{"auserid":userid,"planid":planid}]]
 return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
 
}

async availablepins()
{
 //this.token=this._authServer.getAuthorizationToken()

  let cc=[{"route":"availablepins"}]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
}


async planlistforgeneration()
{
 //this.token=this._authServer.getAuthorizationToken()

  let cc=[{"route":"planlistforgeneration"}]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
}


async treeview(userid:string)
{
 //this.token=this._authServer.getAuthorizationToken()

  let cc=[{"route":"treeview"},[{"tuserid":userid}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
}

async topup(topupamt:number,currency:string)
{
  //this.token=this._authServer.getAuthorizationToken()

  let cc=[{"route":"topup"},[{"topupamt":topupamt,"currency":currency}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
}

async currencylist()
{
  
  return await this.http.get("https://account-api.nowpayments.io/available-currencies").toPromise();
}

async topuplist()
{
  //this.token=this._authServer.getAuthorizationToken()
 
  let cc=[{"route":"topuplist"}]
 // return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
}



async downlinestatus()
{
 //this.token=this._authServer.getAuthorizationToken()
 let cc=[{"route":"downlinestatus"}]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))

}

async downlinelist(findparam:number,search:string,page:number,pagesize:number,fromdate:string,uptodate:string,sortby:string,sortingtype:string)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"downlinelist"},[{"findparam":findparam,"sortby":sortby,"page":page,"pagesize":pagesize,"fromdate":fromdate,"uptodate":uptodate}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async searchtree(search:string,searchuserid:string,page:number,pagesize:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"searchtreeview"},[{"searchname":search,"searchuserid":searchuserid,"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async insertkyc(kyctype:string,docvalue:string,mandatory:boolean)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"insertkyc"},[{"kyctype":kyctype,"docvalue":docvalue,"mandatory":mandatory}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async kychistory()
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"kychistory"}]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async userproducts()
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"userproducts"}]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}


async mytickets()
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"tickethistory"}]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async ticketdetail(ticketid:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"ticketdetail"},[{"ticketid":ticketid}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}
async newticket(complainttype:number,subject:string,detail:string)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"newticket"},[{"complainttype":complainttype,"subject":subject,"detail":detail}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async addreply(ticketid:number,detail:string)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"addreply"},[{"ticketid":ticketid,"detail":detail}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async payoutlist(page:number,pagesize:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"binarypayout"},[{"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async goldpayout(page:number,pagesize:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"goldpayout"},[{"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async platinumpayout(page:number,pagesize:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"platinumpayout"},[{"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async diamondpayout(page:number,pagesize:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"diamondpayout"},[{"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async directpayout(page:number,pagesize:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"directpayout"},[{"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
  
}

async payoutsummary(page:number,pagesize:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"payoutsummary"},[{"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
 
}

async myaccount(fromdate:string,uptodate:string,page:number,pagesize:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"myaccount"},[{"fromdate":fromdate, "uptodate":uptodate,"page":page,"pagesize":pagesize}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))

}

async generatepin(qty:number,planid:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"generatepin"},[{"qty":qty,"planid":planid}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))

}


async generatoeotp(otptype:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"sendotp"},[{"otptype":otptype}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))

}

async transferfund(userid:string,amount:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"transferfund"},[{"auserid":userid,"amount":amount}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))

}

async withdrawfund(amount:number)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"withdrawfund"},[{"amount":amount}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))

}



async changepassword(oldpwd:string,newpwd:string)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"changepassword"},[{"oldpassword":oldpwd,"newpassword":newpwd}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
}

async updateprofile(mobile:string,address:string)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"updatepersonalinfo"},[{"address":address}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
}  

async updatepan(pan:string)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"updatepan"},[{"pan":pan}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
} 

async updateaadhar(aadhar:string)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"updateaadhar"},[{"aadhar":aadhar}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
} 

async updatebank(ifsc:string,acno:string)
{
  //this.token=this._authServer.getAuthorizationToken()
  let cc=[{"route":"updatebankdetail"},[{"ifsc":ifsc,"acno":acno}]]
  return await lastValueFrom(this.http.post(this.authurl,cc,httpOptions))
} 

 

  

  }

