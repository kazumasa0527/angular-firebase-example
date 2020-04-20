import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pet: any;

  constructor() {}

  ngOnInit(): void {}
}
