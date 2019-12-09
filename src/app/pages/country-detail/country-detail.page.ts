import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CountryDetailInterface } from '../../interfaces/interface';
import { RestApiService } from './../../services/rest-api.service';


@Component({
	selector: 'app-country-detail',
	templateUrl: './country-detail.page.html',
	styleUrls: ['./country-detail.page.scss'],
	providers: [RestApiService]
})
export class CountryDetailPage implements OnInit {
	// country: CountryDetailInterface;
	public country: any;
	name: string;
	countryChosen: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private restApiService: RestApiService
	) {	}

	ngOnInit() {
		let countryChosen = this.route.snapshot.queryParamMap.get('country');
		console.log('country chosen: ', countryChosen);
		// this.getCountryDetail('name/' +countryChosen);
		this.restApiService
			.getSingleCountry(countryChosen)
			.subscribe(
				data => {
					this.country = data[0];
					console.log('this is data[0]', this.country);
				},
				error => {
					console.log(error);
				});
	}

	// getCountryDetail(url: string) {
	// 	console.log('url', url);
	// 	return this.restApiService
	// 		.getCountryDetailData(url)
	// 		.subscribe((data: any) => {
	// 			this.country = data;
	// 		});
	// }

	goToGoogleMaps() {

	}

	goToWorldBankInfo() {

	}

	goToCountryNews() {

	}

	presentPopover($event) {

	}

	appendComa(content: any) {
    try {
      let result = content.concat(',');
      return result;
    } catch (err){
      console.log(err);
    }
  }
}
