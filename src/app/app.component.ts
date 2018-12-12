import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tree-view-poc';
  data;

  ngOnInit(): void {
    this.data = [
      {
        label: 'Demo 1',
        children: [
          {label : ' SubDemo 1'},
          {label : ' SubDemo 12'},
          {label : ' SubDemo 13'},
          {label : ' SubDemo 14'},
        ]
      },
      {
        label: 'Demo 2',
        children: [
          {label : ' SubDemo 2'}
        ]
      },
      {
        label: 'Demo 3',
        children: [
          {label : ' SubDemo 3'},
          {label : ' SubDemo 32'},
          {label : ' SubDemo 33'},
          {label : ' SubDemo 34'},
        ]
      }
    ];

  }
}
