import { formatDate } from '@angular/common';
export class AdvanceTable {
  id: number;
  img: string;
  fName: string;
  lName: string;
  email: string;
  gender: string;
  bDate: string;
  mobile: string;
  address: string;
  country: string;
  constructor(advanceTable: AdvanceTable) {
    {
      this.id = advanceTable.id || this.getRandomID();
      this.img = advanceTable.img || 'assets/images/user/user1.jpg';
      this.fName = advanceTable.fName || '';
      this.lName = advanceTable.lName || '';
      this.email = advanceTable.email || '';
      this.gender = advanceTable.gender || 'male';
      this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = advanceTable.mobile || '';
      this.address = advanceTable.address || '';
      this.country = advanceTable.country || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
