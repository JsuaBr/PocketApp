import { Routes } from "@angular/router";
import { NotesListComponent } from "./notes-list/notes-list.component";
import { NotesGridComponent } from "./notes-grid/notes-grid.component";
import { NotesCreateComponent } from "./notes-create/notes-create.component";
import { NotesDetailComponent } from "./notes-detail/notes-detail.component";

export const NOTES_ROUTES: Routes = [
    {path: '', component: NotesListComponent},
    {path: 'calendar', component: NotesGridComponent},
    {path: 'create', component: NotesCreateComponent},
    {path: 'details/:id', component: NotesDetailComponent}
];