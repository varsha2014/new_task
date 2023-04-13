import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  AllData: any;
  constructor(private listData: ServiceService) { }

  ngOnInit(): void {
    this.ListAllAccountGroup()
  }

  ListAllAccountGroup() {
    this.listData.DataList().subscribe(
      res => {
        this.AllData = res
        debugger;
      })
  }

}
