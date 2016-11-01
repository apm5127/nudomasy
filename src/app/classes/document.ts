/**
 * DocumentBase
 */
export class DocumentBase<T> {
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
		references?: string
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
	}
}