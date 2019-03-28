import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {
  showPassword = false;
  clickLog = [];


  constructor() { }

  ngOnInit() {
  }

  onShowPassword() {
    this.showPassword = !this.showPassword;
    this.clickLog.push(new Date());
  }

}
