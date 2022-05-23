import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerTitle!: string;
  headerImage!: string;

  constructor() { }

  ngOnInit(): void {
    this.headerTitle = 'Kilian DUCLOS';
    this.headerImage = 'assets/photo/chibi.svg'
  }

}
