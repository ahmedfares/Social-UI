import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule, MatInputModule} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule
];
@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialsModule { }
