import { Injectable } from '@angular/core';

import { DocumentBase } from '../../classes/document-base';
import { User } from '../../classes/user';

@Injectable()
export class DocumentInfoService {

	// TODO: Get from a remote source of document data
	// TODO: Make asynchronous
	getDocuments() {
		let hank: User = <User>{
			id: 0,
			firstName: 'Hank',
			lastName: 'Hankerson',
			email: 'hank.hankerson@hank.hank',
			isQA: false,
			qualifications: ['QC', 'Procurement', 'Engineering']
		};

		let documents: DocumentBase[] = [
			new DocumentBase({
				id: 0,
				docNum: 84,
				docType: 'LT',
				completeName: 'MNLT-00084',
				rev: 0,
				title: 'Letter to Customer',
				dateReserved: new Date('10/31/2016'),
				dateUploaded: new Date('10/31/2016'),
				reservedBy: hank,
				recordedBy: hank,
				projectReference: 38,
				requestingFunction: 'Procurement',
				storageLocation: 'Cabinet A1',
				qaRecord: false,
				references: '',
				preparer: hank,
				reviewer: hank,
				qaReviewer: hank,
				authorizer: hank,
				isCanceled: false,
				filePath: 'x'
			}),
			new DocumentBase({
				id: 1,
				docNum: 85,
				docType: 'LT',
				completeName: 'MNLT-00085',
				rev: 0,
				title: 'Letter to Customer 2',
				dateReserved: new Date(),
				dateUploaded: new Date(),
				reservedBy: hank,
				recordedBy: hank,
				projectReference: 38,
				requestingFunction: 'Procurement',
				storageLocation: 'Cabinet A1',
				qaRecord: false,
				references: '',
				preparer: hank,
				reviewer: hank,
				qaReviewer: hank,
				authorizer: hank,
				isCanceled: false,
				filePath: 'x'
			})
		];

		return documents.sort((a, b) => a.completeName.toLocaleUpperCase().localeCompare(b.completeName.toLocaleUpperCase()));
	}

}
