/**
 * DocumentBase
 */
import { User } from './user';

export class DocumentBase {
	docNum: number;
	docType: string;
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

	constructor(options: {
		docNum?: number,
		docType?: string,
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
		isCanceled?: boolean
	} = {}) {
		this.docNum = options.docNum;
		this.docType = options.docType;
		this.rev = options.rev;
		this.title = options.title;
		this.dateReserved = options.dateReserved;
		this.dateUploaded = options.dateUploaded;
		this.reservedBy = options.reservedBy;
		this.recordedBy = options.recordedBy;
		this.projectReference = options.projectReference;
		this.requestingFunction = options.requestingFunction;
		this.storageLocation = options.storageLocation;
		this.requestingFunction = options.requestingFunction;
		this.qaRecord = options.qaRecord;
		this.references = options.references;
		this.preparer = options.preparer;
		this.reviewer = options.reviewer;
		this.qaReviewer = options.qaReviewer;
		this.authorizer = options.authorizer;
		this.isCanceled = options.isCanceled;
	}
}