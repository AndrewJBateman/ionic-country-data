import { Component, OnInit, Input } from '@angular/core';
import { CountryListInterface } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss'],
})
export class CountryItemComponent implements OnInit {
  @Input() country: CountryListInterface;

  constructor() { }

  ngOnInit() {}

}