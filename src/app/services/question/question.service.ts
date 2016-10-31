import { Injectable } from '@angular/core';

import { QuestionBase } from '../question-control/question-base';
import { DropdownQuestion } from '../question-control/question-dropdown';
import { TextboxQuestion } from '../question-control/question-textbox';

@Injectable()
export class QuestionService {

	// TODO: Get from a remote source of question metadata
	// TODO: Make asynchronous
	getQuestions() {
		let questions: QuestionBase<any>[] = [
			new DropdownQuestion({
				key: 'docType',
				label: 'Document Type',
				options: [
					{ key: 'ap', value: 'Audit Package' },
					{ key: 'cs', value: 'Customer Specification' },
					{ key: 'lt', value: 'Letter' },
					{ key: 'ma', value: 'Management Authority Delegation' },
					{ key: 'pp', value: 'Proposal Package' },
					{ key: 'rp', value: 'Report' }
				],
				order: 3
			}),

			new TextboxQuestion({
				key: 'title',
				label: 'Title',
				required: true,
				order: 1
			}),

			new TextboxQuestion({
				key: 'docNumber',
				label: 'Document Number',
				type: 'text',
				order: 2
			})
		];

		return questions.sort((a, b) => a.order - b.order);
	}
}
