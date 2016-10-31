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

	constructor(options: {
		value?: T,
		key?: string,
		label?: string,
		required?: boolean,
		order?: number,
		controlType?: string
	} = {}) {
		this.value = options.value;
		this.key = options.key;
		this.label = options.label;
		this.required = options.required;
		this.order = options.order === undefined ? 1 : options.order;
		this.controlType = options.controlType || '';
	}
}