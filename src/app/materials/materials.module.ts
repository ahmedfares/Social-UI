import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule
];
@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialsModule { }
