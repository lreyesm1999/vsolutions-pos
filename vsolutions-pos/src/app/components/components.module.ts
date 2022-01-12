import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonIconComponent } from './button-icon/button-icon.component';

@NgModule({
  declarations: [ButtonIconComponent],
  exports: [ButtonIconComponent],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ComponentsModule {}
