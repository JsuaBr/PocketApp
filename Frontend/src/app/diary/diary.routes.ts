import { Routes } from "@angular/router";
import { DiaryListComponent } from "./diary-list/diary-list.component";
import { DiaryCreateComponent } from "./diary-create/diary-create.component";

export const DIARY_ROUTES: Routes = [
    { path: '', component: DiaryListComponent },
    { path: 'create', component: DiaryCreateComponent}
];