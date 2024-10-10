import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../service/admin.service";

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.css'
})
export class CouponsComponent implements OnInit{

  coupons: any;
  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.getCoupons();
  }

  getCoupons(){
    this.adminService.getCoupons().subscribe(res =>{
      this.coupons =res;
    })
  }

}
