import { Component, Input } from '@angular/core';

import { DocumentBase } from '../../../classes/document-base';

@Component({
	selector: 'app-document-row',
	templateUrl: './document-row.component.html',
	styleUrls: ['./document-row.component.css']
})
export class DocumentRowComponent {
	@Input()
	doc;
}
