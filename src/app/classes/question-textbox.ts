import { QuestionBase } from './question-base';

/**
 * TextboxQuestion
 */
export class TextboxQuestion extends QuestionBase<string> {
	controlType = 'textbox';
	type: string;

	constructor(options: {} = {}) {
		super(options);
		this.type = options['type'] || '';
	}
}