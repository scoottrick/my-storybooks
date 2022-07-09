import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hey-storybook',
  template: `<div>
    <h1>Hey, {{ name }}</h1>
  </div>`,
})
export class HeyStorybookComponent implements OnInit {
  @Input() name = 'buddy';
  constructor() {}

  ngOnInit() {}
}
