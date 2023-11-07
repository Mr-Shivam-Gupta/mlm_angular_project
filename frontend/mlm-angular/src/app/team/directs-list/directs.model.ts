import { formatDate } from '@angular/common';
export class Directs {
  userid:string;
  name:string;
  mobile:string;
  active:boolean
  doj:string
  doa!:string
  totalinvestment:number

  constructor(advanceTable: Directs) {
    {
      this.userid = advanceTable.userid || '';
    
      this.doj = formatDate(new Date(), 'dd/MM/yyyy', 'en') || '';
      this.mobile = advanceTable.mobile || '';
      this.name = advanceTable.name || '';
      this.doa = advanceTable.doa || '';
      this.totalinvestment = advanceTable.totalinvestment || 0;
      this.active=advanceTable.active || false
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
