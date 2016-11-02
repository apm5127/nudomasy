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
	docs: DocumentBase[];
	simpleDateReserved: string[];
	simpleDateUploaded: string[];

	payload: string = '';

	constructor(private dis: DocumentInfoService) { }

	// TODO: Implement filters for searching and faster load times
	ngOnInit() {
		this.docs = this.dis.getDocuments();
		this.simpleDateReserved =  this.docs.map(d => d.dateReserved.toLocaleDateString());
		this.simpleDateUploaded =  this.docs.map(d => d.dateReserved.toLocaleDateString());
		
		this.payload = JSON.stringify(Object.keys(this.docs));
	}

}
