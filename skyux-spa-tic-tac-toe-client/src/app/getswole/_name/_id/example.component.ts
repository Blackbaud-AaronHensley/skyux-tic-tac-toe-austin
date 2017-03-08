import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-example',
  templateUrl: './example.component.html'
})

export class MyExampleComponent {
  @Input()
  public name: String;

  @Input()
  public anotherNameForId: number;
}
