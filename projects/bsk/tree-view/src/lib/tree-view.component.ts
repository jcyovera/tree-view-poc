import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bsk-tree-view',
  templateUrl: 'tree-view.component.html',
  styleUrls: ['tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  @Input('items') public items: any[];

  constructor() { }

  ngOnInit() {
  }
  drop(event) {
    console.log(event);
  }

}
