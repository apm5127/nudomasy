/**
 * DocumentBase
 */
import { User } from './user';

export class DocumentBase {
	id: number;
	docNum: number;
	docType: string;
	completeName: string;
	rev: number;
	title: string;
	dateReserved: Date;
	dateUploaded: Date;
	reservedBy: User;
	recordedBy: User;
	projectReference: number;
	requestingFunction: string;
	storageLocation: string;
	qaRecord: boolean;
	references: string;
	preparer: User;
	reviewer: User;
	qaReviewer: User;
	authorizer: User;
	isCanceled: boolean;
	filePath: string;

	constructor(info: {
		id?: number,
		docNum?: number,
		docType?: string,
		completeName?: string,
		rev?: number,
		title?: string,
		dateReserved?: Date,
		dateUploaded?: Date,
		reservedBy?: User,
		recordedBy?: User,
		projectReference?: number,
		requestingFunction?: string,
		storageLocation?: string,
		qaRecord?: boolean,
		references?: string,
		preparer?: User,
		reviewer?: User,
		qaReviewer?: User,
		authorizer?: User,
		isCanceled?: boolean,
		filePath?: string
	} = {}) {
		this.id = info.id;
		this.docNum = info.docNum;
		this.docType = info.docType;
		this.completeName = info.completeName;
		this.rev = info.rev;
		this.title = info.title;
		this.dateReserved = info.dateReserved;
		this.dateUploaded = info.dateUploaded;
		this.reservedBy = info.reservedBy;
		this.recordedBy = info.recordedBy;
		this.projectReference = info.projectReference;
		this.requestingFunction = info.requestingFunction;
		this.storageLocation = info.storageLocation;
		this.requestingFunction = info.requestingFunction;
		this.qaRecord = info.qaRecord;
		this.references = info.references;
		this.preparer = info.preparer;
		this.reviewer = info.reviewer;
		this.qaReviewer = info.qaReviewer;
		this.authorizer = info.authorizer;
		this.isCanceled = info.isCanceled;
		this.filePath = info.filePath;
	}
}