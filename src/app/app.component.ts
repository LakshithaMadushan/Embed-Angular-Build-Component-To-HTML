import { Component } from '@angular/core';

@Component({
	selector: 'buddy-one',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	clickDone() {
		console.log('Done clicked');
	}
}
