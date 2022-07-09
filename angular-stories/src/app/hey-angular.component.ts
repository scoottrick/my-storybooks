import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hey-angular',
  template: `<h1>Hey</h1>`,
  styles: [
    `
      h1 {
        text-align: center;
      }
    `,
  ],
})
export class HeyAngularComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
