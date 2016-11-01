import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UploadComponent } from './components/upload/upload.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { DocumentRowComponent } from './components/document-list/document-row/document-row.component';
import { QuestionService } from './services/question/question.service';
import { DocumentInfoService } from './services/document-info/document-info.service';

@NgModule({
	declarations: [
		AppComponent,
		DocumentListComponent,
		DashboardComponent,
		UploadComponent,
		DynamicFormComponent,
		DynamicFormQuestionComponent,
		DocumentRowComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [QuestionService, DocumentInfoService],
	bootstrap: [AppComponent]
})
export class AppModule { }
