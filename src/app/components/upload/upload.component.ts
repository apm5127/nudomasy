import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question/question.service';

// TODO: Implement UploadComponent
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [QuestionService]
})
export class UploadComponent implements OnInit {
	questions: any[];

  constructor(private service: QuestionService) { }

  ngOnInit() {
	  this.questions = this.service.getQuestions();
  }
}
