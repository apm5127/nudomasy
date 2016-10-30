import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentListComponent } from './components/document-list/document-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
	{ path: ``, component: DashboardComponent },
	{ path: `docs`, component: DocumentListComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, DocumentListComponent];