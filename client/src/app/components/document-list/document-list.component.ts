import { Component, OnInit } from '@angular/core';

import { DocumentBase } from '../../classes/document-base';
import { DocumentInfoService } from '../../services/document-info/document-info.service';

// TODO: Implement DocumentListComponent
@Component({
	selector: 'app-doc-list',
	templateUrl: './document-list.component.html',
	styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
	//documents: DocumentBase[];
	docs = [5, 10, 15, 20];

	constructor(private dis: DocumentInfoService) { }

	// TODO: Implement filters for searching and faster load times

	ngOnInit() {
		//this.documents = this.dis.getDocuments(this.documents);
	}

}
