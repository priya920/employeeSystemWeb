import { Component } from '@angular/core';


@Component({
	selector: 'app-home-layout',
	template: `
		<app-sidebar></app-sidebar>
        <router-outlet></router-outlet>
	`
})
export class HomeLayoutComponent {

	constructor(
		
	) { }
}
