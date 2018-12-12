import { NgModule } from '@angular/core';
import { TreeViewComponent } from './tree-view.component';
import { DragulaModule } from 'ng2-dragula';
import { CommonModule } from '@angular/common';
import { NgxDnDModule} from '@swimlane/ngx-dnd';

@NgModule({
  imports: [
    CommonModule,
    NgxDnDModule ,
    DragulaModule.forRoot()
  ],
  declarations: [TreeViewComponent],
  exports: [TreeViewComponent]
})
export class TreeViewModule { }
